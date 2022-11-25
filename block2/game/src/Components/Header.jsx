import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";
import Upper from "../Img/UpperBack.png";
import Lower from "../Img/LowerBack.png";
import Green from "../Img/body.png";
import { Button } from "@mui/material";
import { style } from "@mui/system";

const Rat = ({ active }) => {
  const [score, setScore] = useState(0);
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        margin: "0",
        position: "relative",
        height: "256px",
        width: "128px",
      }}
    >
      <div>dsfsd</div>
      <img
        src={Upper}
        style={{
          position: "absolute",
          top: 0,
          width: "128px",
          height: "128px",
          zIndex: 1,
        }}
        alt=""
      />
      <img
        onClick={() => {
          active = false;
          setScore((e) => e + 1);
          console.log(score);
        }}
        src={Green}
        style={{
          width: "64px",
          marginLeft: "10px",
          transform: `translateY(${active ? "0px" : "-80px"})`,
          transition: "all 1s",
          position: "absolute",
          left: "24px",
          bottom: 0,
          zIndex: 2,
        }}
        alt=""
      />
      <img
        src={Lower}
        style={{
          position: "absolute",
          width: "128px",
          height: "144px",
          bottom: 0,
          zIndex: 3,
        }}
        alt=""
      />
    </div>
  );
};

export const Header = () => {
  const [rats, setRats] = useState(
    new Array(3).fill(null).map(() => new Array(5).fill(false))
  );

  useEffect(() => {
    const interval = setInterval(() => {
      let newRats = new Array(3).fill(null).map(() => new Array(5).fill(false));
      for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 5; j++) {
          newRats[i][j] = Math.random() >= 0.5;
        }
      }
      setRats(newRats);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div></div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",

          flexDirection: "column",
        }}
      >
        {rats.map((row, index) => (
          <div
            key={index}
            style={{
              flexDirection: "row",
              display: "flex",
            }}
          >
            {row.map((rat, index) => (
              <Rat active={rat} key={index} />
            ))}
          </div>
        ))}
      </div>
    </>
  );
};

export default Header;

/*
 active = false;
          transform: `translateY(${active ? "-80px" : "0px"})`;   
*/
