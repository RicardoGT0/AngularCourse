import { Component, input } from '@angular/core';
import type { Character } from '../../../interfaces/Character.interface';
import { NgClass } from "@angular/common";

@Component({
  selector: 'dragonball-character-list',
  templateUrl: './character-list.html',
  styleUrl: './character-list.css',
  imports: [NgClass],

})
export class CharacterList {
  characters = input.required<Character[]>();

  styleByPower(power: number) {
    if (power > 12000) {
      return "text-danger";
    } else if (power > 8000) {
      return "text-warning";
    } else if (power > 5000) {
      return "text-success"
    } else {
      return "text-info";
    }
  }
}
