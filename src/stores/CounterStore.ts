import { singleton } from 'tsyringe';
import ObjectStore from './ObjectStore';

@singleton()
export default class CounterStore extends ObjectStore {
  count = 0;
  
  /**
   * count State를 업데이트 합니다.
   * isIncrease = true => 1 증가
   * isIncrease = false => 1 감소
   * @param isIncrease 
   */
  updateCounter(isIncrease = true) {
    this.count += isIncrease ? +1 : -1;
    this.publish();
  }  
}