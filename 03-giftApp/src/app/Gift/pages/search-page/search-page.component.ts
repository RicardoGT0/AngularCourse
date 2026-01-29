import { Component, inject, signal } from '@angular/core';
import { GifService } from '../../services/gif.service';
import { GifListComponent } from "../../components/gifList/gifList.component";
import { Gif } from '../../interfaces/Gif.interfaces';

@Component({
  templateUrl: './search-page.component.html',
  imports: [GifListComponent],
})
export default class SearchPageComponent {
  gifServices = inject(GifService);
  gifs=signal<Gif[]>([])

  searchGifs( value: string ): void {
    this.gifServices.searchGifs(value).subscribe(gifs=>{
      this.gifs.set(gifs);
    });
  }
}
