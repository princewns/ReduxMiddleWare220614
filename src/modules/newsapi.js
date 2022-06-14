import axios from "axios";

// 액션
const GET_NEWS = 'newsapi/GET_NEWS';
const GET_NEWS_SUCCESS = 'newsapi/GET_NEWS_SUCCESS';
const GET_NEWS_FAIL = 'newsapi/GET_NEWS_FAIL';

// 액션함수 > axios로 받아오기 위해 비동기로 작성
export const getNews = () => async (dispatch) => {
  dispatch({ type : GET_NEWS }); // 액션타입을 객체로 바로 보내줌
  try{
    const response = await axios.get("https://newsapi.org/v2/top-headlines?country=kr&category=business&apiKey=c4c09dd0ba45435cb60e93cd10259c2a");
    console.log(response.data.articles);
    dispatch({ type : GET_NEWS_SUCCESS, payload : response.data.articles });
    //요청 성공
  }
  catch(e) {
    dispatch({ type : GET_NEWS_FAIL, payload : e, error : true });
    //에러 발생 알림
    throw e; // 에러를 넘겨줌
  };
};

const initialState = {
  loading : {
    GET_NEWS : false
  },
  news : null,
};

//reducer 함수 작성
const newsapi = (state=initialState, action) => {
  switch(action.type){
    case GET_NEWS : 
      return{
        ...state, 
        loading : {GET_NEWS : true}
      };
    case GET_NEWS_SUCCESS : 
      return{
        ...state,
        loading : {GET_NEWS : false},
        news : action.payload
      };
    case GET_NEWS_FAIL : 
      return{
        ...state,
        loading : {GET_NEWS : false},
      };
    default : return state;
  };
};
export default newsapi;
