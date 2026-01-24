import { Component } from "@angular/core";
import { RouterOutlet } from "@angular/router";
import { SideMenuComponent } from "../../components/sideMenu/sideMenu.component";

@Component({
  templateUrl: "./dashboard-page.component.html",
  imports: [RouterOutlet, SideMenuComponent],
})
export default class DashboardPageComponent {}
