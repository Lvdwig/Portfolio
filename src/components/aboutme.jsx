import { Outlet, Link } from "react-router-dom";
import "../css/aboutme.css";

const AboutMe = () => {
  const HR = ({ color, width }) => (
    <hr
      style={{
        backgroundColor: color,
        borderColor: color,
        height: 2,
        width: width,
        textAlign: "center",
      }}
    />
  );

  return (
    <div className="about-me-boxes">
      <div className="introduction">
        <p className="title">Introduction about me</p>
        <p className="introduction-text">
          My name is Lluis Martin, I was born in 2002 in Spain. My hobbies are
          coding, play videogames like CS:GO and play Futsal.
        </p>
        <HR color="#eacb48" width="600px" />
      </div>
      <div className="studies-jobs">
        <p className="title">Studies and Jobs</p>
        <div className="studies-jobs-boxes">
          <div className="studies-jobs-box">
            <p className="studies-jobs-title">2021 - 2022</p>
            <p className="studies-jobs-text">
              Working as a Programmer in the town hall of my City.
            </p>
            <HR color="#eee" width="200px" />
          </div>
          <div className="studies-jobs-box">
            <p className="studies-jobs-title">2020 - 2022</p>
            <p className="studies-jobs-text">
              High degree on cross platform application development.
            </p>
            <HR color="#eee" width="200px" />
          </div>
          <div className="studies-jobs-box">
            <p className="studies-jobs-title">2018 - 2020</p>
            <p className="studies-jobs-text">
              Mid degree on Microsystem and Network
            </p>
            <HR color="#eee" width="200px" />
          </div>
        </div>
      </div>
      <div id="software-i-use">
        <p className="software-i-use-title">Software & Technologies I use</p>
        <div className="software-i-use-boxes">
          <div className="software-i-use-box">
            <p>The text editor that I use is:</p>
            <div className="text-editor">
              <p className="neovim">Neovim</p>
              <a href="https://github.com/Lvdwig/nvim" id="neovim-config">
                Get config
              </a>
            </div>
          </div>
          <div className="languagesContainer">
            <p>The languages that I use for Coding are:</p>
            <div className="languages">
              <p className="html" style={{ color: "#0c0d0d" }}>
                HTML
              </p>
              <p className="css" style={{ color: "#0c0d0d" }}>
                CSS
              </p>
              <p className="js" style={{ color: "#0c0d0d" }}>
                JS
              </p>
              <p className="jsx" style={{ color: "#0c0d0d" }}>
                JSX
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="redirect">
        <div className="previous">
          <p>Previous</p>
          <Link to="/apps">
            <i
              className="fa-solid fa-circle-arrow-left"
              style={{ color: "#eacb48", fontSize: "30px" }}
            ></i>
          </Link>
          <Outlet />
        </div>
      </div>
    </div>
  );
};
export default AboutMe;
