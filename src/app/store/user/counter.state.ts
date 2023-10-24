import { State, Action, StateContext, Selector } from '@ngxs/store';
import { Increment, Decrement } from './counter.action'; // counter.actions.ts dosyasını içe aktarın

// Durum modeli

export class CounterStateModel {
  
  constructor(
    public count: number
     
  ) {}
}

// Başlangıç durumu
@State<CounterStateModel>({
  name: 'counter',
  defaults: {
    count: 0
  }
})
export class CounterState {
  @Selector()
  static getCount(state: CounterStateModel) {
    
    return state.count;
  }

  @Action(Increment)
  increment({ getState, patchState }: StateContext<CounterStateModel>) {
    
    const state = getState();
    console.log("state",state);
    patchState({
      count: state.count + 1
    });
  }
  @Action(Decrement)
  decrement({ getState, patchState }: StateContext<CounterStateModel>) {
    const state = getState();
    patchState({
      count: state.count - 1
    });
  }

}

