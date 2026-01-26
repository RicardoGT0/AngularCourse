import { Component, input } from '@angular/core';
import { GitListItemComponent } from "./gifList-item/gifList-item.component";

@Component({
  selector: 'gif-list',
  imports: [GitListItemComponent],
  templateUrl: './gifList.component.html',
})
export class GifListComponent {
  gifs = input.required<string[]>()
}
