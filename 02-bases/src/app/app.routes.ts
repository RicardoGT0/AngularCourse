import { Routes } from '@angular/router';
import { CounterComponent } from './pages/counter/counter.component';
import { HeroPageComponent } from './pages/hero/hero-page-component';
import { DragonballPageComponent } from './pages/dragonball/dragonball-page.component';
import { DragonballSuperPageComponent } from './pages/dragonballSuper/dragonballSuper-page.component';

export const routes: Routes = [
  {
    path: 'counter',
    component: CounterComponent
  },
  {
    path: 'hero',
    component: HeroPageComponent,
  },
  {
    path: 'dragonball',
    component: DragonballPageComponent
  },
  {
    path: 'dragonballSuper',
    component: DragonballSuperPageComponent
  },
  {
    path: '**',
    redirectTo: 'counter'
  }
];
