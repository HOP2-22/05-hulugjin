import React from "react";

export const Card = (props) => {
  const { starNumber, comment, avatar, name } = props;
  const star = ["⭐", "⭐", "⭐", "⭐", "⭐"];
  star.length = starNumber;

  return (
    <div
      style={{
        padding: "15px 30px 15px 30px",
        boxshadow: "rgba(100, 100, 111, 0.4) 0px 7px 29px 0px",
        alignItems: "center",
        justifyContent: "center",
        width: "365px",
        height: "375px",
        fontSize: "18px",
        filter: "drop-shadow(0px 15px 35px rgba(0, 0, 0, 0.25))",
        backgroundColor: "white",
      }}
    >
      <div
        style={{
          display: "flex",
          gap: 5,
        }}
      >
        {star.map((element, index) => (
          <p key={index}>{element}</p>
        ))}
      </div>
      <p style={{ width: 300 }}>{comment}</p>
      <div
        style={{
          display: "flex",
          marginTop: 10,
          marginBottom: 10,
          alignItems: "center",
        }}
      >
        <div style={{ width: "100%", height: "2%" }}></div>
        <img
          style={{ width: "56px", borderRadius: 10 }}
          src={avatar}
          alt="lorem"
        />
        <h4>{name}</h4>
      </div>
    </div>
  );
};

export default Card;
