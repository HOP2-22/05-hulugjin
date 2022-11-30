import React, { useEffect, useState } from "react";
import upperback from "../Img/UpperBack.png";
import back from "../Img/LowerBack.png";
import hun from "../Img/body.png";
import { Container } from "@mui/system";
import { Alert } from "@mui/material";
import Hammer from "../Img/hammer.png";

function Header({ active }) {
  const [click, setClick] = useState(true);
  const [seconds, setSeconds] = useState(30);
  const [score, setScore] = useState(0);
  const [min, setMin] = useState(0);
  const [start, setStart] = useState(false);
  const [col, setCol] = useState(new Array(15).fill(false));
  const [on, setOn] = useState(true);
  const [isDisabled, setIsDisabled] = useState(false);
  const [valueX, setValueX] = useState();
  const [valueY, setValueY] = useState();
  const [mouseClick, setMouseClick] = useState(false);

  useEffect(() => {
    let inter = null;
    inter = setInterval(() => {
      const translation = () => {
        let random = Math.floor(Math.random() * 15);
        col[random] = true;
        setTimeout(() => {
          col[random] = false;
        }, 1000);
      };
      if (click) translation();
    }, [200]);
    return () => clearInterval(inter);
  }, [click, col]);

  useEffect(() => {
    if (start) {
      const interval = setInterval(() => {
        setSeconds(seconds - 1);
      }, 1000);
      if (seconds >= 100) {
        setMin(min - 1);
        setSeconds(0);
      }
      if (seconds === 0) {
        setStart(false);
        alert(score + " score");
      }

      return () => clearInterval(interval);
    }
  }, [seconds, start]);

  return (
    <body
      style={{
        width: "100vw",
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      {" "}
      <div
        className=""
        style={{
          display: "flex",
          gap: "100px",
          width: "100vw",
          justifyContent: "center",
        }}
      >
        <div className="">
          <p>time:{seconds}</p>
        </div>
        <div className="">
          <p>Score:{score}</p>
        </div>
      </div>
      <div className=""></div>
      <div
        className=""
        style={{
          display: "grid",
          justifyContent: "center",
          gridTemplateColumns: "Repeat(5,minmax(0 , 1fr))",
          gap: "20px",
        }}
      >
        {col.map((coloo, index) => {
          return (
            <div
              key={index}
              style={{
                display: "grid",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <img
                src={upperback}
                style={{ width: "128px", height: "128px", zIndex: "1" }}
                alt=""
              />
              {start ? (
                <img
                  src={hun}
                  style={{
                    width: "64px",
                    height: "128px",
                    zIndex: "2",
                    marginTop: " -30px ",
                    marginLeft: " 30px",
                    transform: `translateY(${coloo ? "-80px" : "0px"})`,
                    transition: "all 1s",
                    pointerEvents: isDisabled ? "none" : "auto",
                  }}
                  onClick={() => {
                    setScore((e) => e + 1);
                    setIsDisabled(true);
                    setTimeout(() => {
                      setIsDisabled(false);
                    }, 1000);
                  }}
                  alt=""
                />
              ) : (
                <img
                  src={hun}
                  style={{
                    width: "64px",
                    height: "128px",
                    zIndex: "2",
                    marginTop: " -30px ",
                    marginLeft: " 30px",
                    transform: `translateY(${coloo ? "-80px" : "0px"})`,
                    transition: "all 1s",
                  }}
                  alt=""
                />
              )}

              <img
                src={back}
                style={{
                  width: "128px",
                  height: "124px",
                  zIndex: "3",
                  marginTop: " -115px",
                }}
                alt=""
              />
            </div>
          );
        })}
      </div>
      <img
        src={Hammer}
        style={{
          position: "absolute",
          width: "50px",
          height: "50px",
          zIndex: "4",
          left: valueX,
          top: valueY,
        }}
        alt=""
      />
      <button
        onClick={() => {
          setStart(true);
          setClick(true);
        }}
      >
        Start
      </button>
    </body>
  );
}
export default Header;
