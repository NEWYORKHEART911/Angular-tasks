import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.sass']
})
export class CounterComponent {

  count: number = 0;

  increment() {
    this.count++;
  }

  decrement() {
    if(this.count==0) {
      return;
    }
    --this.count;
  }

}
