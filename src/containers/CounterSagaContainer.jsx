import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux"
import Counter from "../components/Counter"
import { decreaseAsync, increaseAsync, zeroAsync } from "../modules/counterSaga";

const CounterSagaContainer = () => {
  const number = useSelector((state) => state.counterSagaReduce.number);
  const dispatch = useDispatch();
  const onIncrease = useCallback(() => dispatch(increaseAsync()),[dispatch]);
  const onDecrease = useCallback(() => dispatch(decreaseAsync()),[dispatch]);
  const onZero = useCallback(() => dispatch(zeroAsync()),[dispatch]);

  return <Counter 
    number={number} 
    onIncrease={onIncrease} 
    onDecrease={onDecrease}
    zero={onZero}
    />
};
export default CounterSagaContainer;