import { container } from "tsyringe";
import CounterStore from "../../stores/CounterStore";
import useForceUpdate from "../../hooks/useForceUpdate";
import { useEffect } from "react";
import ObjectStore from "../../stores/ObjectStore";

const useObjectStore = <T extends ObjectStore>(store: T): T => {
  const forceUpdate = useForceUpdate();

  useEffect(() => {
    store.addListener(forceUpdate);

    return () => store.removeListener(forceUpdate);
  }, [store, forceUpdate]);

  return store;
}

const useCounterStore = () => {
  const store = container.resolve(CounterStore);

  return useObjectStore(store);
}

export default useCounterStore;