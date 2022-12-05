import React, { useContext } from "react";
import ThemeContext, { ColorModeContext } from "../context/ThemeContext";
import Switch from "@mui/material/Switch";

const label = { inputProps: { "aria-label": "Switch demo" } };
function Home() {
  const { theme, changeTheme, colorChange } = useContext(ColorModeContext);
  function change() {
    if (theme === "white") {
      changeTheme();
    } else {
      colorChange();
    }
  }
  return (
    <div>
      <p>home theme: {theme}</p>

      <div>
        <Switch {...label} defaultChecked onClick={change} />{" "}
      </div>
    </div>
  );
}

export default Home;
