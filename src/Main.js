import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./components/App";
import HomePage from "./pages/HomePage";
import CoursePage from "./pages/CoursePage";
import CourseListPage from "./pages/CourseListPage";
import WishlistPage from "./pages/WishlistPage";
import QuestionListPage from "./pages/QuestionListPage";
import QuestionPage from "./pages/QuestionPage";
import NotFoundPage from "./pages/NotFoundPage";

function Main() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          {/*하위라우터 여러개에서 공통된 디자인을 보여주고싶을땐, element프롭을 지정하고 지정된 컴포넌트에서는 아울렛컴포넌트를 사용하면됨*/}
          <Route index element={<HomePage />} /> {/* 슬래시라는 경로로들어오면 홈페이지라는 컴포넌트를 보여줌 */}
          <Route path="courses">
            <Route index element={<CourseListPage />} />
            {/* index에 해당하는 컴포넌트는 패쓰 프롭대신에 인덱스를 넣어주면됨*/}
            <Route path=":courseSlug" element={<CoursePage />} />
            {/*변하는경로: 동적인경로//코스슬로그라는 변수로 페이지의 경로를 받아올수있음. 리액트 라우터에서는 이런걸 파라미터라고 부름*/}
          </Route>
          <Route path="questions">
            <Route index element={<QuestionListPage />} />
            <Route path=":questionId" element={<QuestionPage />} />
          </Route>
          <Route path="wishlist" element={<WishlistPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default Main;
