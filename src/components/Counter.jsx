// 리덕스를 사용하기 위해서 보여지는 컴포넌트에서는 props 값을 받아온다

/** state 를 사용하는 방법
 * 1. useState, useReduce 를 이용하여 한 컴포넌트에서 사용
 * 2. Context API를 이용하여 전역적으로 사용 : useContext()이용하여 값 가져옴
 * 3. 리덕스를 이용하여 상태관리 하여 사용 : props을 통해 값 가져옴
 */
const Counter = ({ number, onIncrease, onDecrease, zero, diff, onSetdiff, onDiff }) => {
  const onChange = (e) => {
    onSetdiff(e.target.value);
  };
  return (
    <div>
      <h1>{number}</h1>
      <input type='number' value={diff} onChange={onChange}/>
      <div>
        <button onClick={onDecrease}>-</button>
        <button onClick={zero}>0</button>
        <button onClick={onIncrease}>+</button>
        <button onClick={onDiff}>작성한 값만큼 숫자 증가</button>
      </div>
    </div>
  );
};

export default Counter;
