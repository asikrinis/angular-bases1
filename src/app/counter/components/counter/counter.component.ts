import { Component } from "@angular/core";

@Component({
  selector: 'app-counter',
  template: `<h3>Counter: {{ counter }} </h3>
  <button (click)="increaseBy(+1)" >+1</button>
  <button (click)="increaseBy(-1)">-1</button>
  <button (click)="resetCounter()">Reset</button>`
})
export class CounterComponent {
  public counter: number = 30;
  constructor(){}


  increaseBy(value: number): void {
    // this.counter = this.counter + 1;
    this.counter += value;
  }

  resetCounter(){
    this.counter = 30;
  }
}
