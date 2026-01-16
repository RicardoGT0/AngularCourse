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
    { id: 400, name: "Krillin", power: 5000 },
    { id: 500, name: "Gohan", power: 8000 },
    { id: 600, name: "Trunks", power: 9000 },
    { id: 700, name: "Frieza", power: 13000 },
    { id: 800, name: "Yamcha", power: 1000 },
  ])

  styleByPower(power: number) {
    if (power > 12000) {
      return "text-danger";
    } else if (power > 8000) {
      return "text-warning";
    } else if (power > 5000) {
      return "text-success"
    } else {
      return "text-info" ;
    }
  }
}
