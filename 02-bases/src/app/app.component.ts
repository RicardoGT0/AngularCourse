import { Component, inject, isDevMode } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { NavbarComponent } from "./components/shared/navbar/navbar.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavbarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  private router = inject(Router);
  public title= "Ricardo";

  getCurrentRoute(): string {
    const url =this.router.url;
    if (url==="/") {
      return "HOME";
    }else{
      return url.replace("/","").toUpperCase();
    }
  }

  getEnvironment(): string {
    return isDevMode() ? 'DEVELOPMENT' : 'PRODUCTION';
  }

}
