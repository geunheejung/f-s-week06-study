import useCounterStore from "./useCounterStore";

export default function Step4Counter() {
  const counterStore = useCounterStore();

  return <div>Count: {counterStore.count}</div>;
}
