import { Component } from '@angular/core';
import { SideMenuHeaderComponent } from "./sideMenu-header/sideMenu-header.component";
import { SideMenuOptionsComponent } from "./sideMenu-options/sideMenu-options.component";

@Component({
  selector: 'side-menu',
  imports: [SideMenuHeaderComponent, SideMenuOptionsComponent],
  templateUrl: './sideMenu.component.html',
})
export class SideMenuComponent { }
