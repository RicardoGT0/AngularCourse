import { Component, computed, signal } from "@angular/core";

@Component({
  templateUrl: './hero-page-component.html',
})

export class HeroPageComponent {
  public name = signal("Ironman");
  public age = signal(45);

  public capitalizeHero= computed(()=> {
    return this.name().toUpperCase();
  })

  public getHeroDescription= computed(()=> {
    return `${this.name()} - ${this.age()}`;
  })

  public changeHero(): void {
    this.name.set("Spiderman");
    this.age.set(22);
  }

  public resetForm(): void {
    this.name.set("Ironman");
    this.age.set(45);
  }

  public changeAge(value: number): void {
    this.age.set(value);
  }
}
