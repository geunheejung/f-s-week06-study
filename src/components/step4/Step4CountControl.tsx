import useCounterStore from "./useCounterStore";

function Step4CounterControl() {
  const counterStore = useCounterStore();

  const handleClickIncrease = () => {
    counterStore.updateCounter();
  };

  const handleClickDecrease = () => {
    counterStore.updateCounter(false);
  };

  return (
    <div>
      {counterStore.count}
      <button
        data-testid="IncreaseBtn"
        type="button"
        onClick={handleClickIncrease}
      >
        Increase
      </button>

      <button type="button" onClick={handleClickDecrease}>
        Decrease
      </button>
    </div>
  );
}

export default Step4CounterControl;
