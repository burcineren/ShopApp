import { Component } from '@angular/core';
import { CountState } from './store/user/user.state';
import { Increment, Decrement } from './store/user/user.action';
import { Observable } from 'rxjs';
import { Dispatch } from '@ngxs-labs/dispatch-decorator'
import { Select } from '@ngxs/store';

@Component({
  selector: 'root',
  template: `
  <p>
    NGXS counter: {{ count$ | async }}
    <button (click)="increment()">+</button>
    <button (click)="decrement()">-</button>
  </p>
`,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @Select(CountState) count$: Observable<number>;
  @Dispatch() public increment = () => new Increment();
  @Dispatch() public decrement = () => new Decrement();
}
