import { container } from "tsyringe";
import Store, { State } from "../stores/Store";
import { useEffect, useState } from "react";
import useForceUpdate from "./useForceUpdate";

type Selector<Value> = (state: State) => Value;

const useSelector = <Value>(selector: Selector<Value>) => {  
  const store = container.resolve(Store);

  const [state, setState] = useState(selector(store.state));

  const forceUpdate = useForceUpdate();

  useEffect(() => {
    const update = () => {
      const newState = selector(store.state);
      if (newState !== state) {
        forceUpdate();
        setState(newState);
      }
    }

    store.addListener(update);

    return () => {
      store.removeListener(update);
    }
  }, [store, forceUpdate]);

  return selector(store.state);
}

export default useSelector;