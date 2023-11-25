import { useCallback, useState } from "react";

const useForceUpdate = () => {
  const [state, setState] = useState(0);

  // useCallback은 파라미터로 주입된 함수를 클로져 영역에 저장한다.
  // 그말은 즉슨, forceUpdate 변수를 평가할 때, 이미 존재하는 값을 가져오는 것이다.
  // 그말은 즉슨, foreceUpdate가 다시 평가된다 하더라도, 함수의 참조는 남아있기에 여전히 같은 값을 바라본다.
  // 즉, 현재 함수의 바깥 스코프에 useCallback으로 주입한 함수가 존재한다.
  const forceUpdate = useCallback(() => setState(prev => prev + 1), []);

  return forceUpdate;
};

export default useForceUpdate;