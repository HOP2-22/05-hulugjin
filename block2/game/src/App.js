import "./App.css";
import React from "react";
import { useEffect, useState } from "react";
import Header from "./Components/Header";
import Hammer from "./Img/hammer.png";

function App() {
  const [mousePosition, setMousePosition] = useState({ x: null, y: null });
  document.addEventListener("mousemove", onMouseUpdate, false);
  function onMouseUpdate(e) {
    setMousePosition({
      x: e.pageX,
      y: e.pageY,
    });
  }
  useEffect(() => {
    return () => document.removeEventListener("mousemove", onMouseUpdate, true);
  }, [onMouseUpdate]);

  return (
    <div>
      <img
        src={Hammer}
        style={{
          position: "absolute",
          width: "50px",
          height: "50px",
          zIndex: "4",
          left: `${mousePosition.x}px`,
          top: `${mousePosition.y}px`,
        }}
        alt=""
      />
      <Header />
    </div>
  );
}

export default App;
