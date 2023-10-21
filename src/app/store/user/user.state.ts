import { State, Action } from '@ngxs/store';
import { Increment, Decrement } from './user.action';

@State<number>({
  name: 'count',
  defaults: 0
})
export class CountState {
    
  @Action(Increment) public increment({ setState }) {
    setState(state => ++state);
  }

  @Action(Decrement) public decrement({ setState }) {
    setState(state => --state);
  }
}