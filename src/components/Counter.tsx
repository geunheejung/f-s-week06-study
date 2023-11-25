import useCounterStore from "../hooks/useCounterStore";
import useSelector from "../hooks/useSelector";
import useStore from "../hooks/useStore";
import { getCount } from "../stores/Store";

// Businnes -> 실제 로직만 테스트 가능.
// 변화의 영향도가 크며, 큰 만큼 변화의 빈도가 적다.

// const state = {
//   count: 0,
// };

// const increase = () => {
//   state.count += 1;
// };

// UI -> 사용자 이벤트가 트리거 되었는지만 테스트 가능.
// 변화의 영향도가 작으며, 작은 만큼 변화의 빈도가 크다.

export default function Counter() {
  // const store = container.resolve(CounterStore);
  // const forceUpdate = useForceUpdate();

  // const [ignored, forceUpdate] = useReducer(x => x + 1, 0);
  // Component의 렌더링으로 인해 재호출 되기에, useForceUpdate가 매번 새로운 값으로 제공된다. -> useCallback 사용
  // useEffect(() => {
  //   store.addListener(forceUpdate);

  //   return () => store.removeListener(forceUpdate);
  // }, [store, forceUpdate]);

  // const click = () => {
  //   // React Component는 UI의 대해서만 처리하게 된다.
  //   // 숫자를 어떻게 올리든, 렌더링을 어떻게 하든 알게뭐야.
  //   // store.count += 1;
  //   // increase();
  //   store.update();
  // };
  // const counterStore = useCounterStore();
  const count = useSelector(getCount);

  return <div>Count: {count}</div>;
}
