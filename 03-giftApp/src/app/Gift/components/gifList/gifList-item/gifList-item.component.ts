import { Component, input } from '@angular/core';
import { Gif } from '../../../interfaces/Gif.interfaces';

@Component({
  selector: 'gif-list-item',
  imports: [],
  templateUrl: './gifList-item.component.html',
})
export class GitListItemComponent {
  gif = input.required<Gif>()
 }
