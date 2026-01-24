import { Component } from '@angular/core';
import { environment } from '@environments/environment';

@Component({
  selector: 'side-menu-header',
  imports: [],
  templateUrl: './sideMenu-header.component.html',
})
export class SideMenuHeaderComponent {
  envs = environment
}
