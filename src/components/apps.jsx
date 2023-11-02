import { Outlet, Link } from "react-router-dom";
import tityping from "../img/apps/tityping.png";
import login from "../img/apps/login.png";
import signup from "../img/apps/signup.png";
import "../css/apps.css";

const Apps = () => {
  return (
    <div>
      <p className="title">Those are some apps that I developed</p>
      <div className="apps-div">
        <div className="tityping">
          <div>
            <img src={tityping} width={"325px"} height={"275px"} />
          </div>
          <div>
            <p className="text">
              TiTyping is an app that his mainly function is to improve your
              accuracy and speed while typing. This app contains a text box
              where you can specify the amount of words you want to type.
            </p>
          </div>
        </div>
        <div className="login-app">
          <div>
            <img src={login} width={"300px"} />
            <img src={signup} width={"300px"} height={"275px"} />
          </div>
          <div>
            <p className="text">
              This app is a simple login app, where you can login and you can
              sign up in a database, is really usefull to have it because you
              will be able to use it every time you need to develop an app that
              it has a login
            </p>
          </div>
        </div>
      </div>
      <div className="redirect">
        <div className="previous">
          <p>Previous</p>
          <Link to="/">
            <i
              className="fa-solid fa-circle-arrow-left"
              style={{ color: "#eacb48", fontSize: "30px" }}
            ></i>
          </Link>
          <Outlet />
        </div>
        <div className="next">
          <p>Next</p>
          <Link to="/aboutme">
            <i
              className="fa-solid fa-circle-arrow-right"
              style={{ color: "#eacb48", fontSize: "30px" }}
            ></i>
          </Link>
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Apps;
