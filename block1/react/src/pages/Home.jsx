import React, { useState } from "react";
import { Link } from "react-router-dom";
import Image from "../images/back.jpeg";
import { Team } from "./Team";

const styles = {
  background: {
    width: "100vw",
    height: "100vh",
    display: "flex",
    alignItems: "center",
    backgroundImage: `url(${Image})`,
    backgroundSize: "cover",
    flexDirection: "column",
  },
  navbar: {
    width: "87.5%",
    height: "5%",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    marginTop: "0.2%",
  },
  team: {
    width: "9%",
    height: "100%",
    display: "flex",
    alignItems: "center",
    fontSize: "190%",
    fontWeight: "bold",
    color: "white",
    textDecoration: "none",
  },
  other: {
    width: "91%",
    height: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
  },
  sqr: {
    width: "35px",
    height: "25px",
    display: "flex",
    alignItems: "flex-end",
  },
  rl: {
    width: "10px",
    height: "10px",
    backgroundColor: "#0BBEF2",
  },
  one: {
    width: "8%",
    height: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    color: "white",
    fontSize: "16px",
    textDecoration: "none",
  },
  get: {
    width: "9%",
    height: "100%",
    border: "2px solid grey",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    color: "grey",
    marginTop: "0.2%",
    borderRadius: "4%",
  },

  center: {
    width: "87.5%",
    height: "30%",
  },
  low: {
    width: "87.5%",
    height: "36%",
  },
  ins: {
    width: "38%",
    height: "100%",
  },
  header: {
    width: "100%",
    height: "48%",
    fontSize: "66px",
    color: "white",
  },
  lead: {
    width: "49%",
    height: "35%",
    fontSize: "20px",
    color: "white",
  },
  tail: {
    width: "100%",
    height: "17%",

    display: "flex",
    flexDirection: "row",
  },
  mail: {
    width: "50%",
    height: "100%",
    backgroundColor: "white",
    placeHolder: "Email",
    fontSize: "20px",
    outline: "none",
    border: "none",
  },
  earl: {
    width: "4%",
    height: "100%",
  },
  last: {
    width: "30%",
    height: "100%",
    backgroundColor: "#0BBEF2",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    color: "white",
    borderRadius: "4px",
    border: "none",
  },
};

export const Home = () => {
  return (
    <div style={styles.background}>
      <div style={styles.navbar}>
        <Link style={styles.team} to="Team">
          <p>team</p>
          <div style={styles.sqr}>
            <div style={styles.rl}></div>
          </div>
        </Link>

        <div style={styles.other}>
          <Link style={styles.one} to="Products">
            Products
          </Link>

          <Link style={styles.one} to="Services">
            Services
          </Link>

          <Link style={styles.one} to="Contact">
            Contact
          </Link>
          <Link style={styles.one} to="Login">
            Log in
          </Link>
        </div>

        <div style={styles.get}>Get Access</div>
      </div>

      <div style={styles.center}></div>
      <div style={styles.low}>
        <div style={styles.ins}>
          <div style={styles.header}>
            Instant Collaborations for remote teams
          </div>

          <div style={styles.lead}>
            All in one for your remote team chats, collaboration and track
            projects
          </div>

          <div style={styles.tail}>
            <input style={styles.mail} placeholder="Email"></input>
            <div style={styles.earl}></div>
            <button style={styles.last}>Get early access</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
