import { Component } from '@angular/core';
import { SideMenuHeaderComponent } from "../sideMenu-header/sideMenu-header.component";

@Component({
  selector: 'side-menu',
  imports: [SideMenuHeaderComponent],
  templateUrl: './sideMenu.component.html',
})
export class SideMenuComponent { }
