import "./Intro.css";
import Github from "../../img/github.png";
import LinkedIn from "../../img/linkedin.png";
import Twitter from "../../img/twitter.png";
import boy from "../../img/boy.png";
import { themeContext } from "../../Context";
import { useContext } from "react";
import { Link } from "react-scroll";

export const Intro = () => {
  const transition = { duration: 2, type: "string" };
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="intro">
      <div className="intro-left">
        <img src={boy} alt="" />
      </div>
      <div className="intro-right">
        <div className="intro-name">
          <span style={{ color: darkMode ? "white" : "" }}>Hey, I'm</span>
          <span>ALLEN NII AYITEY ARYEE </span>
          <span>A Frontend developer with experience in Web Designing. </span>
        </div>
        <div className="intro-icons">
          <a href="https://www.linkedin.com/in/allen-nii-ayitey-aryee-a45093169/">
            <img src={LinkedIn} alt="" width="70px" />
          </a>
          <a href="https://twitter.com/allen_aryee">
            <img src={Twitter} alt="" width="70px" />
          </a>
          <a href="https://github.com/PAPA-allen">
            <img src={Github} alt="" width="70px" />
          </a>
        </div>

        <Link spy={true} to="Contact" smooth={true} activeClass="activeClass">
          <button className="button intro-button">Hire Me</button>
        </Link>

        {/*blur divs */}

        {/* <div className="blur" style={{ background: "rgb(236 219 255)" }}></div>
        <div
          className="blur"
          style={{
            background: "rgb(236 219 255)",
            top: "17rem",
            width: "31rem",
            height: "13rem",
            left: "-9rem",
          }}
        ></div> */}
      </div>
    </div>
  );
};
