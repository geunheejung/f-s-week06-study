
export type Listener = () => void;

export type Action<Type, Payload = {}> = {
  type: Type;
  payload: Payload;
}

type Reducer<State, ActionType, Payload = {}> = (state: State, action: Action<ActionType, Payload>) => State;

type Reducers<State, ActionType> = Record<string, Reducer<State, ActionType, any>>;

// Class를 Global Container 내에서, Singleton으로 등록하는 Class Decorator 팩토리이다.
export default class BaseStore<State, ActionType> {
  state: State;
  constructor(initialState: State, reducers: Reducers<State, ActionType>) {
    this.state = initialState;

    this.reducer = (state: State, action: Action<ActionType>) => {
      const f = Reflect.get(reducers, action.type as string);
    
      if (!f) return state;
    
      return f(state, action);
    };
  }

  reducer = (state: State, action: any) => state;

  // 현재 Store의 사용자들 모두에게 변경 사실을 전파하기 위함.
  listeners = new Set<Listener>();

  dispatch(action: Action<ActionType>) {
    this.state = this.reducer(this.state, action);
    this.publish();
  }

  addListener(listener: Listener) {
    this.listeners.add(listener);
  }

  removeListener(listener: Listener) {
    this.listeners.delete(listener);
  }

  publish() {
    this.listeners.forEach((listener) => listener());
  }
}