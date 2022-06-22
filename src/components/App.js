import { Outlet } from "react-router-dom";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import styles from "./App.module.css";
import "./App.font.css";

function App() {
  return (
    <>
      <Nav className={styles.nav} />
      <div className={styles.body}>
        <Outlet />
        {/*중첩라우팅할때 사용함, 예) 어떤곳에서는 네브가 보여져야하고 어떤곳에서는 보여지지않아야할때사용 */}
      </div>
      <Footer className={styles.footer} />
    </>
  );
}

export default App;
