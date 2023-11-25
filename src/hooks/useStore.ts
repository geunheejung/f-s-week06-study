import { useEffect } from "react";
import { container, singleton } from "tsyringe";
import useForceUpdate from "./useForceUpdate";
import Store from "../stores/Store";

const useStore = () => {
  const store = container.resolve(Store);
  const forceUpdate = useForceUpdate();

  useEffect(() => {
    store.addListener(forceUpdate);

    return () => store.removeListener(forceUpdate);
  }, [store, forceUpdate]);

  return store;
}

export default useStore;