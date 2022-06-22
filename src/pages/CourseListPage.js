import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import { getCourses } from "../api";
import ListPage from "../components/ListPage";
import Warn from "../components/Warn";
import CourseItem from "../components/CourseItem";
import styles from "./CourseListPage.module.css";
import searchBarStyles from "../components/SearchBar.module.css";
import searchIcon from "../assets/search.svg";

function CourseListPage() {
  useSearchParams(); //쿼리파라미터 값을 가져오고 싶을때 리액트에서는 useSearchParams를 사용함
  const [searchParams, setSearchParams] = useSearchParams(); //usestate랑 형태가 똑같음 차이점은? 사용값이 셔치파람즈임
  const initKeyword = searchParams.get("keyword"); //겟함수를 통해서 가져올수있음
  const [keyword, setKeyword] = useState(initKeyword || ""); //초기값 , 키워드 state는 input에 value로 내려줘야해서 문자열이어야함. 검색창에 보이는거
  const courses = getCourses(initKeyword); //파라미터

  const handleKeywordChange = (e) => setKeyword(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSearchParams(
      //keyword state 값이 없으면 빈객체를 넘겨줘 => 인풋에 아무것도 검색하지않으면 그냥 courses 원래 값을 보여줘
      keyword
        ? {
            keyword,
          }
        : {}
    );
  };

  return (
    <ListPage variant="catalog" title="모든 코스" description="자체 제작된 코스들로 기초를 쌓으세요.">
      <form className={searchBarStyles.form} onSubmit={handleSubmit}>
        <input name="keyword" value={keyword} onChange={handleKeywordChange} placeholder="검색으로 코스 찾기"></input>
        <button type="submit">
          <img src={searchIcon} alt="검색" />
        </button>
      </form>

      <p className={styles.count}>총 {courses.length}개 코스</p>

      {initKeyword && courses.length === 0 ? ( //검색어가 있을때, 검색된 결과가 없으면?
        <Warn
          className={styles.emptyList}
          title="조건에 맞는 코스가 없어요."
          description="올바른 검색어가 맞는지 다시 한 번 확인해 주세요."
        />
      ) : (
        <div className={styles.courseList}>
          {courses.map((course) => (
            <CourseItem key={course.id} course={course} />
          ))}
        </div>
      )}
    </ListPage>
  );
}

export default CourseListPage;
