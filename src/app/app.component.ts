import { Component } from '@angular/core';
import { CounterState } from './store/user/counter.state';
import { Increment, Decrement } from './store/user/counter.action';
// import { Increment, Decrement } from './store/user/user.action';
import { Observable } from 'rxjs';
import { Dispatch } from '@ngxs-labs/dispatch-decorator'
import { Select, Store } from '@ngxs/store';

@Component({
  selector: 'root',
  template:  `
  <div>
    <h1>Sayaç Değeri: {{ count | async }}</h1>
    <button (click)="increment()">Artır</button>
    <button (click)="decrement()">Azalt</button>
  </div>
`,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @Select(CounterState.getCount) count?: Observable<number>;

  constructor(private store: Store) {}

  increment() {
    this.store.dispatch(new Increment());
  }

  decrement() {
    this.store.dispatch(new Decrement());
  }
}
