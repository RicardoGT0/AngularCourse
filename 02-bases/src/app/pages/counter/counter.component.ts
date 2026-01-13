import { ChangeDetectionStrategy, Component, signal } from "@angular/core";

@Component({
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css'],
  // --> only for demonstration of signal and ZoneLess usage
  // changeDetection: ChangeDetectionStrategy.OnPush
})

export class CounterComponent {
  counter = 20;
  counterSignal= signal(30);
  increaseCounter(value: number) {
    this.counter += value;
    this.counterSignal.update(current => current + value);
  }
  decreaseCounter(value: number) {
    this.counter -= value;
    this.counterSignal.update(current => current - value);
  }
  resetCounter() {
    this.counter = 20;
    this.counterSignal.set(30);
  }
}
