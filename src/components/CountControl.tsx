import useDispatch from "../hooks/useDispatch";
import useSelector from "../hooks/useSelector";
import { getCount } from "../stores/Store";
import { descrease, increase } from "../stores/actions";

export default function CounterControl() {
  // 현재 CounterControl에서 사용하는 store를 업데이트 하는 리스너를 등록하지 않았기 때문에
  // const store = container.resolve(store);

  const count = useSelector(getCount);
  const dispatch = useDispatch();

  const handleClickIncrease = () => {
    dispatch(increase());
  };

  const handleClickDecrease = () => {
    dispatch(descrease());
  };

  return (
    <div>
      {count}
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
