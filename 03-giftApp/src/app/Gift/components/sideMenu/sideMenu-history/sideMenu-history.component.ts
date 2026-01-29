import { Component, inject } from '@angular/core';
import { GifService } from '../../../services/gif.service';
import { RouterLink, RouterLinkActive } from "@angular/router";

@Component({
  selector: 'side-menu-history',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './sideMenu-history.component.html',
})

export class SideMenuHistoryComponent {
  gifservice = inject(GifService)
}
