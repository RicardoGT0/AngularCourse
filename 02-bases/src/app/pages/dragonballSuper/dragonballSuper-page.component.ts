import { Component, signal } from "@angular/core";
import { CharacterList } from "../../components/dragonball/character-list/character-list";
import type { Character } from "../../interfaces/Character.interface";
import { CharacterAdd } from "../../components/dragonball/character-add/character-add";

@Component({
  selector: "dragonballSuper",
  templateUrl: "./dragonballSuper-page.component.html",
  styleUrl: "./dragonballSuper-page.component.css",
  imports: [CharacterList, CharacterAdd],
})

export class DragonballSuperPageComponent {
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

  addCharacter(character: Character) {
    this.characters.update(list => [...list, character]);
  }
}
