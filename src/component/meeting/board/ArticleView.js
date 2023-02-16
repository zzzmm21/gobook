import "../../../assets/css/component/meeting/Board.css";
import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import Layout from "layout/Layout";
import { getArticle, deleteArticle } from "api";
import Comment from "component/comment";
import App from './../../../App';

function ArticleView() {
  const [data, setData] = useState({});
  const { id } = useParams();

  const navigate = useNavigate();

  useEffect(() => {
    const articleLoad = async (id) => {
      const { foods } = await getArticle();
   
    
      const article = foods.filter((item) => item.id === parseInt(id));

      // console.log(article);
      setData(article[0]);
      console.log(foods)
   
    };
    articleLoad(id);
    // console.log(`2+${id}`);
  }, [id]);

  const onDelete = () => {
    deleteArticle(id);
    return;
  };

  return (
    <div>
      <Layout>
        <h4>글 상세 페이지</h4>
        <div className="post-view-wrapper">
          {data ? (
            <>
              <div className="post-view-row">
                <label>게시글 번호</label>
                <label>{data.id}</label>
              </div>
              <div className="post-view-row">
                <label>제목</label>
                <label>{data.title}</label>
              </div>
              <div className="post-view-row">
                <label>작성일</label>
                <label>{data.createDate}</label>
              </div>
              <div className="post-view-row">
                <label>조회수</label>
                <label>{data.readCount}</label>
              </div>
              <div className="post-view-row">
                <label>내용</label>
                <div>{data.content}</div>
              </div>
              <div className="post-view-row">
                <label>hashTag</label>
                <div>{data.hashTag}</div>
              </div>
            </>
          ) : (
            "해당 게시글을 찾을 수 없습니다."
          )}
        </div>
        <button
          onClick={() => {
            onDelete();
            navigate(-1);
          }}
        >
          삭제
        </button>
        <Link to={{ pathname: `modi` }}>
          <button>수정</button>
        </Link>
        <button onClick={() => navigate(-1)}>목록으로</button>
        <Comment />
      </Layout>
    </div>
  );
}

export default ArticleView;