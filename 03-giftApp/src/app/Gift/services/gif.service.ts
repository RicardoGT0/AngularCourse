import { HttpClient } from "@angular/common/http";
import { inject, Injectable, signal } from "@angular/core";
import { environment } from "@environments/environment";
import type { GiphyResponse } from '../interfaces/Giphy.interfaces';
import { GifMapper } from "../mapper/gif.mapper";
import { Gif } from "../interfaces/Gif.interfaces";
import { map } from "rxjs";

@Injectable({ providedIn: 'root' })
export class GifService {
  private http = inject(HttpClient);
  trendingData=signal<Gif[]>([])

  constructor() {
    this.loadTrendingGifs();
  }

  loadTrendingGifs() {
    this.http.get <GiphyResponse> (`${environment.URLGiphy}${environment.URLTrendingGifs}`,
      {
        params: {
          api_key: environment.APIKey,
          limit:25,
          offset:0,
          rating:'g',
          lang:'es',
        }
      }
    ).subscribe(resp => {
      const gifs = GifMapper.mapGiphyItemsToGifArray(resp.data);
      this.trendingData.set(gifs);
    });
  }

  searchGifs(query: string) {
    return this.http.get <GiphyResponse> (`${environment.URLGiphy}${environment.URLSearchGifs}`,
      {
        params: {
          api_key: environment.APIKey,
          q: query,
          limit:25,
          offset:0,
          rating:'g',
          lang:'es',
        }
      }
    ).pipe(
      map(resp => resp.data),
      map(dataItems => GifMapper.mapGiphyItemsToGifArray(dataItems)),
    )
  }
}
