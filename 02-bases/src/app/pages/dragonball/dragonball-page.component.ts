import { Component, signal } from "@angular/core";

interface Character {
  id: number;
  name: string;
  power: number;
}


@Component({
  templateUrl: "./dragonball-page.component.html",
  styleUrl: "./dragonball-page.component.css"
})

export class DragonballPageComponent {
  characters=signal<Character[]>([
    { id: 100, name: "Goku", power: 15000 },
    { id: 200, name: "Vegeta", power: 13000 },
    { id: 300, name: "Piccolo", power: 7000 },
  ])
}
