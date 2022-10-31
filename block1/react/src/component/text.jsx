import React from "react";
import Arr from "../images/arrow.png";
import { Link } from "react-router-dom";
const st = {
  between: {
    width: "18%",
    height: "6%",
  },
  link: {
    width: "21%",
    height: "6%",
    backgroundColor: "white",
    color: "#4DA0FD",
    display: "flex",
    flexDirection: "row",
  },
  arrow: {
    height: "100%",
    width: "23.7%",
    //backgroundImage: `url(${Arr})`,
  },
};
function Text() {
  return (
    <div>
      <p style={{ fontSize: "21px" }}>
        Give everyone you work with—inside and outside your company—a more
        productive way to stay in sync. Respond faster with emoji, keep
        conversations focused in channels, and simplify all your communication
        into one place.
      </p>
      <div style={st.between}></div>
      <Link>
        <a style={st.link}>
          Learn more <div style={st.arrow}></div>
        </a>
      </Link>
    </div>
  );
}
export default Text;
