import { Component, input } from '@angular/core';

@Component({
  selector: 'gif-list-item',
  imports: [],
  templateUrl: './gifList-item.component.html',
})
export class GitListItemComponent {
  gif = input.required<string>()
 }
