import { Component, inject } from '@angular/core';
import { GifService } from '../../../services/gif.service';

@Component({
  selector: 'side-menu-history',
  imports: [],
  templateUrl: './sideMenu-history.component.html',
})

export class SideMenuHistoryComponent {
  gifservice = inject(GifService)
}
