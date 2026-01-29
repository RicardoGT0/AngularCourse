import { Component, computed, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs';
import { GifService } from '../../services/gif.service';
import { GifListComponent } from "../../components/gifList/gifList.component";

@Component({
  selector: 'history-page.component',
  imports: [GifListComponent],
  templateUrl: './history-page.component.html',
})
export default class HistoryPageComponent {
  query = toSignal(inject(ActivatedRoute).params.pipe(map(params => params['query'])));
  gifServices = inject(GifService);

  gifs = computed(() => this.gifServices.searchHistory()[this.query()]);
}
