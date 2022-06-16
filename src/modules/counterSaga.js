// redux-saga를 이용하여 1초뒤에 값이 증가하는 비동기 함수 만들기
// redux-saga에서 delay, put 함수를 가져옴
import { delay, put, takeEvery, takeLatest } from 'redux-saga/effects';

//비동기를 위한 액션이름 추가
const INCREASE = "counter/INCREASE";
const DECREASE = "counter/DECREASE";
const ZERO = 'counter/ZERO';
const SETDIFF = 'counter/SETDIFF';
const DIFF = 'counter/DIFF';

const INCREASE_ASYNC = 'counter/INCREASE_ASYNC';
const DECREASE_ASYNC = "counter/DECREASE_ASYNC";
const ZERO_ASYNC = 'counter/ZERO_ASYNC';


export const increase = () => ({ type: INCREASE });
export const decrease = () => ({ type: DECREASE });
export const zero = () => ({ type: ZERO });
export const setDiff = (diff) => ({ type : SETDIFF, payload : diff });
export const onDiff = () => ({ type : DIFF });

export const increaseAsync = () => ({ type : INCREASE_ASYNC });
export const decreaseAsync = () => ({ type : DECREASE_ASYNC });
export const zeroAsync = () => ({ type : ZERO_ASYNC });

//제너럴 함수 생성
function* increaseSaga() {
  yield delay(1000); // 1초 기다림
  yield put(increase()); // 액션을 디스패치 해줌
};
function* decreaseSaga() {
  yield delay(1000);
  yield put(decrease());
};
function* zeroSaga() {
  yield delay(1000);
  yield put(zero());
}

// 작성해준 기능이 들어간 함수
export function* counterSaga() {
  // takeEvery는 모든 작업 실행
  yield takeEvery(INCREASE_ASYNC, increaseSaga);
  yield takeEvery(DECREASE_ASYNC, decreaseSaga);
  // takeLatest는 중복되었을떄 마지막 작업만 실행
  yield takeLatest(ZERO_ASYNC, zeroSaga);
};

// 초기 상태
const initalState = {
  number: 0,
  diff : 0
};

// 리듀서 함수 ,상태값을 변화시키는 함수
// 이때 state는 기본값을 넣어서 사용
function counterSagaReduce(state = initalState, action) {
  switch (action.type) {
    case INCREASE:
      return { ...state, number: state.number + 1 };
    case DECREASE:
      return { ...state, number: state.number - 1 };
    case ZERO :
      return { ...state, number: initalState.number };
    case SETDIFF : 
      return { ...state, diff: parseInt(action.payload) };
    case DIFF : 
      return { ...state, number : state.number + state.diff };
    default:
      return state;
  };
};

export default counterSagaReduce;