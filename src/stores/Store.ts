import { singleton } from 'tsyringe';
import BaseStore from './BaseStore';
import { ActionType } from './actions';
import reducers from './reducers';

const initialState = { count: 0, name: 'bob' };

export type State = typeof initialState;

export const getCount = (state: State) => state.count;

@singleton()
export default class Store extends BaseStore<typeof initialState, ActionType> {
  constructor() {
    super(initialState, reducers);
  }

  updateCounter(isIncrease = true) {
    this.state = this.reducer(this.state, { type: isIncrease ? 'increase' : 'descrease', payload: 10 });
    this.publish();
  }  
}