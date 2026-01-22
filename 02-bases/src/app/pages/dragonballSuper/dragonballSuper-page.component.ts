import { Component, inject, signal } from "@angular/core";
import { CharacterList } from "../../components/dragonball/character-list/character-list";
import { CharacterAdd } from "../../components/dragonball/character-add/character-add";
import { DragonballSuperService } from '../../services/dragonballSuperService';

@Component({
  selector: "dragonballSuper",
  templateUrl: "./dragonballSuper-page.component.html",
  styleUrl: "./dragonballSuper-page.component.css",
  imports: [CharacterList, CharacterAdd],
})

export class DragonballSuperPageComponent {
  DragonballSuperService = inject(DragonballSuperService);
}
