const NewsItem = ({news, loadingNews}) => {
  return(
    <div>
      {// loadingNews가 true 일때 로딩중이라는 글자 출력
      loadingNews && '로딩중...'
      }
      {
      // loadingNews가 false이고, news의 값이 null이 아닐때
      !loadingNews && 
        news &&
        // news를 map을 이용하여 반복
        news.map((n) => (
          <div>
            <h2>{n.title}</h2>
            <p>{n.description}</p>
          </div>
        ))
      }
    </div>
  );
};
export default NewsItem;