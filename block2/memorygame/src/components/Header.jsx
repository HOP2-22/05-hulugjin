import React, { useEffect, useState } from "react";
import data from "../data/data";
const styles = {
  body: {
    width: "100vw",
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  style: {
    width: "80%",
    height: "80%",
    backgroundColor: "red",
    color: "blue",
  },
};

const reverse = {
  back: {
    width: "300px",
    height: "300px",
    backgroundColor: "aqua",
  },
};

const Card = ({ dataa }) => {
  const [rotate, setRotate] = useState(false);

  return (
    <div
      style={{
        transform: `${
          rotate === true ? "rotateY(180deg)" : "rotateY(45deg) rotateY(-45deg)"
        }`,
        transition: "1s",
        backgroundColor: `${rotate ? "red" : "green"}`,
        zIndex: `${rotate ? 1 : 0}`,
      }}
    >
      <img
        src={dataa.image}
        alt="img"
        width="300px"
        position="absolute"
        height="300px"
        zIndex={rotate ? -1 : 1}
        onClick={() => {
          rotate === true ? setRotate(false) : setRotate(true);
          setTimeout(() => {}, 1000);
        }}
      ></img>
    </div>
  );
};

export default function Header() {
  const [images, setImages] = useState(
    data.sort(function () {
      return Math.random() - 0.5;
    })
  );
  return (
    <div style={styles.body}>
      <div
        style={{
          display: "grid",
          justifyContent: "center",
          gridTemplateColumns: "Repeat(5,minmax(0 , 1fr))",
          gap: "10px",
        }}
      >
        {images.map((dataa, index) => {
          return <Card key={index} dataa={dataa} />;
        })}
      </div>
    </div>
  );
}
// pointerEvents: isDisabled ? "none" : "auto",
// height={rotate === true ? "400px" : "100px"}
