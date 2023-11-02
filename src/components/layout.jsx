import { Outlet, Link } from "react-router-dom";
import "../css/layout.css";
import Footer from "./footer.jsx";

const Layout = () => {
  return (
    <>
      <nav className="navbar">
        <Link to="/"></Link>
        <p
          style={{ marginRight: "500px", fontWeight: "bold", fontSize: "25px" }}
        >
          😉Lvdwig.
        </p>
        <Link to="/" className="navbar-item">
          Home
        </Link>
        <Link to="/apps" className="navbar-item">
          Apps
        </Link>
        <Link to="/aboutme" className="navbar-item">
          About Me
        </Link>
        <a className="navbar-item" href="https://www.github.com/lvdwig">
          Github<i className="fa fa-github"></i>
        </a>
      </nav>
      <Outlet />
      <Footer />
    </>
  );
};

export default Layout;
