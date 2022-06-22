import { Link, NavLink } from "react-router-dom"; //네브링크는 네브에서 사용하는 링크 링크랑 차이점은 스타일프롭으로 함수지정가능
import Container from "./Container";
import UserMenu from "./UserMenu";
import logoImg from "../assets/logo.svg";
import styles from "./Nav.module.css";

const getLinkStyle = ({ isActive }) => {
  return {
    textDecoration: isActive ? "underline" : undefined, //덱스트 데코레이션이라는 css 속성에 isActive가 참일때만 밑줄그어줘
  };
};

function Nav() {
  return (
    <div className={styles.nav}>
      <Container className={styles.container}>
        <Link to="/">
          <img src={logoImg} alt="Codethat Logo" />
        </Link>
        <ul className={styles.menu}>
          <li>
            <NavLink to="/courses" style={getLinkStyle}>
              카탈로그
            </NavLink>
          </li>
          <li>
            <NavLink to="/questions" style={getLinkStyle}>
              커뮤니티
            </NavLink>
          </li>
          <li>
            <UserMenu />
          </li>
        </ul>
      </Container>
    </div>
  );
}

export default Nav;
