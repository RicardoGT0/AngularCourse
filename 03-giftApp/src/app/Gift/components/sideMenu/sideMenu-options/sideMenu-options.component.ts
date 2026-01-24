import { Component } from '@angular/core';
import type { MenuOption } from '../../../interfaces/MenuOptions.interfaces';
import { RouterLink, RouterLinkActive } from "@angular/router";

@Component({
  selector: 'side-menu-options',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './sideMenu-options.component.html',
})
export class SideMenuOptionsComponent {
  menuOptions: MenuOption[] = [
    {
      icon: 'fa-solid fa-chart-line',
      label: 'Trending',
      subLabel: 'Los gifs mas populares',
      route: '/dashboard/trending',
    },
    {
      icon: 'fa-solid fa-magnifying-glass',
      label: 'Search',
      subLabel: 'Buscar gifs',
      route: '/dashboard/search',
    },
  ];
}
