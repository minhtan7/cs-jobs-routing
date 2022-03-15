import { Link, Outlet } from "react-router-dom";
import NavBar from "../components/Navbar";

const style = {
  container: {
    maxWidth: "1140px",
    margin: "auto"
  }
};

const Layout = () => {
  return (
    <>
      <NavBar />
      <div style={style.container}>
        <Outlet />
      </div>
    </>
  );
};

export default Layout;
