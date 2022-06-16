//리덕스는 Hook 이전에 생긴 라이브러리 - 함수형에서만 사용 가능
//리액트 168.8 버전에서 Hook이 도입되면서 Hook을 이용한 내용이 추가
//현 리액트 18.0버전
import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Counter from '../components/Counter';
import {increase, decrease, zero, setDiff, onDiff} from '../modules/counter';

const CounterHookContainer = () => {
  //state에 접근하기 위해 useSelector 사용
  const {number, diff} = useSelector((state) => ({
    number : state.counter.number,
    diff : state.counter.diff,
  }))
  //dispatch를 사용하기 위해 useDispatch 사용
  const dispatch = useDispatch();

  //callback함수를 이용해서 최적화 : 함수 새로 만듬 방지
  const onIncrease = useCallback(() => dispatch(increase()), [dispatch]);
  const onDecrease = useCallback(() => dispatch(decrease()), [dispatch]);
  const onZero = useCallback(() => dispatch(zero()), [dispatch]);

  const onSetDiff = useCallback((diff) => dispatch(setDiff(diff)),[dispatch]);
  const OnDiff = useCallback(() => dispatch(onDiff()),[dispatch]);
  return <Counter 
  number={number} 
  onIncrease={onIncrease} 
  onDecrease={onDecrease} 
  zero={onZero}
  diff={diff}
  onSetdiff={onSetDiff}
  onDiff={OnDiff}/>
}
export default CounterHookContainer;