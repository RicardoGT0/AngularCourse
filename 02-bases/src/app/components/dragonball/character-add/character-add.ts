import { Component, input, output, signal } from '@angular/core';
import { Character } from '../../../interfaces/Character.interface';

@Component({
  selector: 'dragonball-character-add',
  templateUrl: './character-add.html',
  styleUrl: './character-add.css',
})
export class CharacterAdd {
  name = signal<string>("");
  power = signal<number>(0);
  charactersLength = input.required<Number>();
  addCharacterEmit = output<Character>();

  addCharacter() {
    if (!this.name() || this.power() <= 0) return;

    const newCharacter: Character = {
      id: this.charactersLength().valueOf() + 1 * 100,
      name: this.name(),
      power: this.power()
    };

    this.addCharacterEmit.emit(newCharacter);
    // this.characters.update(list => [...list, newCharacter]);
    this.resetForm();
  }

  resetForm() {
    this.name.set("");
    this.power.set(0);
  }

}
