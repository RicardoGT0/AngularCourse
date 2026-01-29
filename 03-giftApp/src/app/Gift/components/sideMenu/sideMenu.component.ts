import { Component, signal } from '@angular/core';
import { SideMenuHeaderComponent } from "./sideMenu-header/sideMenu-header.component";
import { SideMenuOptionsComponent } from "./sideMenu-options/sideMenu-options.component";
import { SideMenuHistoryComponent } from "./sideMenu-history/sideMenu-history.component";
import { NgClass } from "@angular/common";

@Component({
  selector: 'side-menu',
  imports: [SideMenuHeaderComponent, SideMenuOptionsComponent, SideMenuHistoryComponent, NgClass],
  templateUrl: './sideMenu.component.html',
})
export class SideMenuComponent {
  showingHistory = signal(false);

  showHistory = () => {
    this.showingHistory.update(value => !value);
  }
}
