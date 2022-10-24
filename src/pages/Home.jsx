import React, { useState } from "react";
import { Link } from "react-router-dom";
import Image from "../images/back.jpeg";
import { Team } from "./Team";

const styles = {
  background: {
    width: "100vw",
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    backgroundImage: `url(${Image})`,
  },
  navbar: {
    width: "82%",
    height: "5%",
    backgroundColor: "blue",
  },
  team: {
    width: "9%",
    height: "100%",
    backgroundColor: "red",
    display: "flex",
    alignItems: "center",
    fontSize: "190%",
    color: "white",
    fontWeight: "bold",
  },
};
/*
const UserCard = ({ userData }) => {
  return (
    <Link style={styles.userCardContainer} to={userData.username}>
      <img
        src={userData.avatar}
        width={100}
        height={100}
        alt={userData.username}
      />
      <div>
        <p>UserName: {userData.username}</p>
        <p>Email: {userData.email}</p>
        <p>Birth: {userData.date_of_birth}</p>
      </div>
    </Link>
  );
};
*/
export const Home = () => {
  /*
  const [output, setOutput] = useState(users);
  console.log(users);
  const search = (val) => {
    setOutput(
      users.filter((user) => {
        return user.username.toLowerCase().includes(val.toLowerCase());
      })
    );
  };
  return (
    <div style={styles.container}>
      <div>
        <input
          type={"text"}
          onChange={(e) => {
            search(e.target.value);
          }}
          style={styles.searchInput}
        />
      </div>
      {output.length === 0 ? (
        <div>No User Found</div>
      ) : (
        output.map((userData, index) => {
          return <UserCard userData={userData} key={index} />;
        })
      )}
    </div>
  );
  */
  return (
    <div style={styles.background}>
      <div style={styles.navbar}>
        <Link style={styles.team} to={Team}>
          <p>team</p>
        </Link>
      </div>
    </div>
  );
};

export default Home;
