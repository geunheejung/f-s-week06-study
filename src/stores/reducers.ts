import { Action } from "./BaseStore";
import { State } from "./Store";
import { ACTION_TYPE, ActionType } from './actions';

const increase = (state: State, action: Action<ActionType, number>): State => {
  switch (action.type) {
    case ACTION_TYPE.INCREASE:
      return {
        ...state,
        count: state.count + action.payload,
      };
    default:
      return state;
  }  
}

const descrease = (state: State, action: Action<ActionType>): State => {
  switch (action.type) {
    case ACTION_TYPE.DESCREASE:
      return {
        ...state,
        count: state.count - 1,
      };
    default:
      return state;
  }  
}

const reducers = {
  increase,
  descrease
}

export default reducers;