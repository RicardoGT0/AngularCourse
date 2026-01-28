import { Component, computed, inject, signal } from "@angular/core";
import { GifListComponent } from "../../components/gifList/gifList.component";
import { GifService } from './../../services/gif.service';

@Component({
  templateUrl: "./trending-page.component.html",
  imports: [GifListComponent],
})
export default class TrendingPageComponent {
  gifServices = inject(GifService);

  trendingGifs =  computed(() => this.gifServices.trendingData().map(gif => gif.url));
}
