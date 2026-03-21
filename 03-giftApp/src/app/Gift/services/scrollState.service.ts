import { Injectable, signal } from "@angular/core";

@Injectable({ providedIn: 'root' })
export class ScrollStateService {
  private scrollPosition = signal(0);

  public setScrollPosition(position: number) {
    this.scrollPosition.set(position);
  }

  public getScrollPosition() {
    return this.scrollPosition();
  }
}
