import { Component } from "@angular/core";
import { RouterOutlet } from "@angular/router";
import { SideMenuOptionsComponent } from "../../components/sideMenu-options/sideMenu-options.component";
import { SideMenuHeaderComponent } from "../../components/sideMenu-header/sideMenu-header.component";

@Component({
  templateUrl: "./dashboard-page.component.html",
  imports: [RouterOutlet, SideMenuOptionsComponent, SideMenuHeaderComponent],
})
export default class DashboardPageComponent {}
