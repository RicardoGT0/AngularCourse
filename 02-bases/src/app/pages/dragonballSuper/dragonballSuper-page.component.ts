import { Component, signal } from "@angular/core";
import { CharacterList } from "../../components/dragonball/character-list/character-list";
import type { Character } from "../../interfaces/Character.interface";

@Component({
  selector: "dragonballSuper",
  templateUrl: "./dragonballSuper-page.component.html",
  styleUrl: "./dragonballSuper-page.component.css",
  imports: [CharacterList],
})

export class DragonballSuperPageComponent {
  name = signal<string>("");
  power = signal<number>(0);

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

  addCharacter() {
    if (!this.name() || this.power() <= 0) return;

    const newCharacter: Character = {
      id: Math.max(...this.characters().map(c => c.id)) + 100,
      name: this.name(),
      power: this.power()
    };

    this.characters.update(list => [...list, newCharacter]);
    this.resetForm();
  }

  resetForm() {
    this.name.set("");
    this.power.set(0);
  }
}
