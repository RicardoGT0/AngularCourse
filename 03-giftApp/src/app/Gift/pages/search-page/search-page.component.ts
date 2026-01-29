import { Component, inject } from '@angular/core';
import { GifService } from '../../services/gif.service';
import { GifListComponent } from "../../components/gifList/gifList.component";

@Component({
  templateUrl: './search-page.component.html',
  imports: [GifListComponent],
})
export default class SearchPageComponent {
  gifServices = inject(GifService);

  searchGifs( value: string ): void {
    this.gifServices.searchGifs(value);
  }
}
