import { container } from "tsyringe";
import { Action } from "../stores/BaseStore";
import { ActionType } from "../stores/actions";
import Store from "../stores/Store";

const useDispatch = () => {
  const store = container.resolve(Store);

  return (action: Action<ActionType>) => store.dispatch(action);
};

export default useDispatch;