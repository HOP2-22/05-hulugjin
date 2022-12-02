import "./App.css";
import React from "react";
import { useEffect, useState } from "react";
import Header from "./Components/Header";
import Hammer from "./Img/hammer.png";

function App() {
  const [mousePosition, setMousePosition] = useState({ x: null, y: null });
  const [style, setStyle] = useState(false);
  useEffect(() => {
    const onClick = () => {};
    document.addEventListener("mousemove", onMouseUpdate);
    document.addEventListener("click", (event) => {
      setStyle(true);
      setTimeout(() => {
        setStyle(false);
      }, 75);
    });
    function onMouseUpdate(e) {
      setMousePosition({
        x: e.pageX,
        y: e.pageY,
      });
    }
    return () => {
      console.log(mousePosition.x, mousePosition.y);
      document.removeEventListener("mousemove", onMouseUpdate);
    };
  }, [mousePosition]);

  return (
    <div
      onClick={() => {
        setStyle(true);
        console.log(style);
      }}
    >
      <img
        src={Hammer}
        style={{
          position: "absolute",
          width: "150px",
          height: "150px",
          marginTop: "-150px",
          marginRight: "-120px",
          zIndex: "4",
          left: `${mousePosition.x}px`,
          top: `${mousePosition.y}px`,
          pointerEvents: "none",
          transform: `${style === true ? " rotate(-100deg)" : "rotate(0deg)"}`,
          transformOrigin: "bottom center",
          transition: "0.05s",
        }}
        alt=""
      />
      <Header />
    </div>
  );
}

export default App;
