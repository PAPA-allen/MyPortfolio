import "./S.css";
import { Card } from "../Card/Card";
import CV from "./CV.pdf";
import { motion } from "framer-motion";

export const S = () => {
  const transition = { duration: 1, type: "spring" };
  return (
    <div className="services" id="Services">
      {/* left */}
      <div className="profile">
        <span>My Profile</span>
        <span>CV </span>
        <span>
          The button below contains my curriculum vitae which could be viewed.
        </span>
        <a href={CV} download>
          <button className="button s-button">Download CV</button>
        </a>

        {/* <div
          className="blur s-blur1"
          style={{ background: "var(--seablue)" }}
        ></div> */}
      </div>
      {/* right */}

      <div className="cards">
        <motion.div
          whileInView={{ left: "14rem" }}
          initial={{ left: "29%" }}
          transition={transition}
          style={{ left: "14rem" }}
        >
          <Card
            heading={"UI/UX"}
            detail={
              "Developed and designed UI for database of user's transport web app and a secure login for members"
            }
          />
        </motion.div>

        <motion.div
          whileInView={{ left: "29rem" }}
          initial={{ left: "27%" }}
          transition={transition}
          style={{ top: "0rem", left: "27rem" }}
        >
          <Card
            heading={"Developer Skills"}
            detail={"Web development, MySQL, UserEXperience(UX), Html, Javascript, Figma, ReactJS, Implementing RESTful APIs"}
          />
        </motion.div>
        
      </div>
    </div>
  );
};
