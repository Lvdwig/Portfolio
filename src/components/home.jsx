import React from "react";
import Typed from "react-typed";
import { Outlet, Link } from "react-router-dom";
import latestProject from "../img/home/latestProject.png";
import "../css/home.css";

const Home = () => {
  const names = ["Lvdwig", "Lluis"];

  return (
    <div>
      <div className="main-div">
        <div className="fast-bio">
          <p>Hi, I am</p>
          <div className="name">
            <Typed strings={names} typeSpeed={75} backSpeed={75} loop />
            <span>Martin</span>
          </div>
          <p className="description">
            A junior developer who is interested in improving their coding
            skills. I am currently trying to improve in web development, I have
            a couple of Apps developed. I invite you to take a look at them.{" "}
          </p>
        </div>
        <div className="latest-project">
          <p>Currently I am working on:</p>
          <img src={latestProject} />
        </div>
      </div>
      <div className="redirect">
        <div className="next">
          <p>Next</p>
          <Link to="/apps">
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

export default Home;
