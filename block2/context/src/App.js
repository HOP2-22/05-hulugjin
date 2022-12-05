import "./App.css";
import { Component, useState } from "react";
import Home from "./component/home";
import ThemeContext from "./context/ThemeContext";
import BasicSwitches from "./component/switch";
import * as React from "react";
import Button from "@mui/material/Button";
function App() {
  return (
    <ThemeContext>
      <Home />
    </ThemeContext>
  );
}
export default App;
