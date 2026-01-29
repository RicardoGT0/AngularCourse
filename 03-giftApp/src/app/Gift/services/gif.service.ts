import { HttpClient } from "@angular/common/http";
import { computed, effect, inject, Injectable, signal } from "@angular/core";
import { environment } from "@environments/environment";
import type { GiphyResponse } from '../interfaces/Giphy.interfaces';
import { GifMapper } from "../mapper/gif.mapper";
import { Gif } from "../interfaces/Gif.interfaces";
import { map, tap } from "rxjs";

@Injectable({ providedIn: 'root' })
export class GifService {
  private http = inject(HttpClient);
  trendingData = signal<Gif[]>([])

  searchHistory = signal<Record<string, Gif[]>>({});
  searchHistoryKeys = computed(() => Object.keys(this.searchHistory()));

  constructor() {
    this.loadTrendingGifs();
    this.loadFromLocalStorage();
  }

  loadFromLocalStorage() {
    const data = localStorage.getItem('history') ?? '{}';
    if (!data)
     return;

    this.searchHistory.set(JSON.parse(data));
  }

  saveToLocalStorage = effect(() => {
    localStorage.setItem('history', JSON.stringify(this.searchHistory()));
  });

  loadTrendingGifs() {
    this.http.get<GiphyResponse>(`${environment.URLGiphy}${environment.URLTrendingGifs}`,
      {
        params: {
          api_key: environment.APIKey,
          limit: 25,
          offset: 0,
          rating: 'g',
          lang: 'es',
        }
      }
    ).subscribe(resp => {
      const gifs = GifMapper.mapGiphyItemsToGifArray(resp.data);
      this.trendingData.set(gifs);
    });
  }

  searchGifs(query: string) {
    return this.http.get<GiphyResponse>(`${environment.URLGiphy}${environment.URLSearchGifs}`,
      {
        params: {
          api_key: environment.APIKey,
          q: query,
          limit: 25,
          offset: 0,
          rating: 'g',
          lang: 'es',
        }
      }
    ).pipe(
      map(resp => resp.data),
      map(dataItems => GifMapper.mapGiphyItemsToGifArray(dataItems)),
      tap(gifs => {
        this.searchHistory.update(history => ({
          ...history,
          [query.toLocaleLowerCase()]: gifs
        }))
      })
    )
  }

  getGifByQuery(query: string): Gif[] {
    return this.searchHistory()[query] ?? [];
  }
}
