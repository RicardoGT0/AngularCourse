import { Component, signal } from "@angular/core";
import { NgClass } from "@angular/common";

interface Character {
  id: number;
  name: string;
  power: number;
}


@Component({
  templateUrl: "./dragonball-page.component.html",
  styleUrl: "./dragonball-page.component.css",
  imports: [NgClass],
})

export class DragonballPageComponent {
  characters = signal<Character[]>([
    { id: 100, name: "Goku", power: 15000 },
    { id: 200, name: "Vegeta", power: 12000 },
    { id: 300, name: "Piccolo", power: 7000 },
  ])

  styleByPower(power: number) {
    if (power > 12000) {
      return "text-danger";
    } else if (power > 8000) {
      return "text-warning";
    } else {
      return "text-success";
    }
  }
}
