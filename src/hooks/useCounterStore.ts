import { useEffect } from "react";
import { container } from "tsyringe";
import CounterStore from "../stores/CounterStore";
import useForceUpdate from "./useForceUpdate";
import Store from "../stores/Store";

const useCounterStore = () => {
  const store = container.resolve(Store);
  const forceUpdate = useForceUpdate();

  // const [ignored, forceUpdate] = useReducer(x => x + 1, 0);
  // Component의 렌더링으로 인해 재호출 되기에, useForceUpdate가 매번 새로운 값으로 제공된다. -> useCallback 사용
  useEffect(() => {
    store.addListener(forceUpdate);

    return () => store.removeListener(forceUpdate);
  }, [store, forceUpdate]);

  return store;
}

export default useCounterStore;