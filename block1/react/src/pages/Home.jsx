import React, { useState } from "react";
import { Link } from "react-router-dom";
import Image from "../images/back.jpeg";
import Arr from "../images/arrow.png";
import meet from "../images/meet.svg";
import woman from "../images/women.png";
import { Team } from "./Team";
import Text from "../component/text";
import calen from "../images/cal.png";
import Card from "../component/Card";
import Amy from "../images/Ellipse.svg";
import Jane from "../images/Jane.svg";
import Pena from "../images/Pena.svg";
import Ins from "../images/ins.png";
import tweet from "../images/Twit.png";
import face from "../images/face.png";
const styles = {
  body: {
    width: "100vw",
    height: "540vh",
    display: "flex",
    flexDirection: "column",
  },
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
const two = {
  bod: {
    width: "100vw",
    height: "100vh",
    backgroundColor: "white",
    display: "flex",
    alignItems: "center",
  },
  side: {
    height: "100%",
    width: "18%",
    backgroundColor: "white",
  },
  teamwork: {
    height: "55%",
    width: "45%",
    backgroundColor: "white",
  },
  inblock: {
    width: "67%",
    height: "100%",
    backgroundColor: "white",
  },
  meeting: {
    height: "78%",
    width: "50%",
    backgroundImage: `url(${meet})`,
  },
};
const third = {
  back: {
    width: "100vw",
    height: "100vh",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  left: {
    width: "23%",
    height: "56%",
    backgroundImage: `url(${woman})`,
  },
  cen: {
    width: "25%",
    height: "100%",
  },
  right: {
    width: "25%",
    height: "100%",
    backgroundColor: "white",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
  },
};
const four = {
  back: {
    width: "100vw",
    height: "100vh",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  far: {
    height: "100%",
    width: "13%",
  },
  line: {
    width: "17%",
    height: "100%",
  },
  r: {
    width: "27%",
    height: "54%",
    backgroundColor: "white",
    backgroundImage: `url(${calen})`,
  },
};

const fifth = {
  body: {
    width: "100vw",
    height: "100vh",
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    backgroundColor: "whitesmoke",
  },
  lever: {
    width: "100%",
    height: "14%",
  },
  container: {
    width: "80%",
    height: "30%",
    backgroundColor: "grey",
  },
};
const struct = {
  body: {
    width: "100vw",
    height: "40vh",

    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  ins: {
    width: "84%",
    height: "78%",
    backgroundColor: "#252B3B",
    display: "flex",
    flexDirection: "row",
  },
  team: {
    width: "10%",
    height: "100%",

    display: "flex",
    flexDirection: "column",
  },
  cont: {
    width: "100%",
    height: "20%",

    fontWeight: "bold",
    color: "white",
    fontSize: "30px",
    display: "flex",

    alignItems: "center",
    flexDirection: "row",
  },
  space: {
    width: "100%",
    height: "10%",
  },
  main: {
    width: "100%",
    height: "70%",

    display: "flex",
    flexDirection: "column",
  },
  in: {
    width: "13%",
    height: "58%",
    backgroundImage: `url(${Ins})`,
    marginRight: "4%",
  },
  inst: {
    height: "12%",
    width: "100%",
    display: "flex",
    alignItems: "center",
  },
  face: {
    height: "12%",
    width: "100%",
    display: "flex",
    alignItems: "center",
  },
  fa: {
    width: "13%",
    height: "58%",
    backgroundImage: `url(${face})`,
    marginRight: "4%",
  },
  T: {
    width: "9%",
    height: "49%",
    backgroundImage: `url(${tweet})`,
    marginRight: "4%",
  },
  Twit: {
    height: "12%",
    width: "100%",
    display: "flex",
    alignItems: "center",
  },
  sa: {
    height: "100%",
    width: "15%",
  },
  text: {
    height: "100%",
    width: "40%",

    display: "flex",
    flexDirection: "row",
  },
  case: {
    height: "100%",
    width: "33%",

    display: "flex",
    flexDirection: "column",
  },
  title: {
    width: "100%",
    height: "10%",

    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  s: {
    width: "100%",
    height: "10%",
  },
  res: {
    width: "100%",
    height: "10%",

    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  e: {
    width: "30%",
    height: "100%",
  },
  email: {
    width: "70%",
    height: "30%",
  },
  first: {
    width: "100%",
    height: "50%",

    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  sec: {
    width: "100%",
    height: "50%",
  },
  design: {
    width: "100%",
    height: "100%",
  },
  lol: {
    width: "30%",
    height: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
    marginTop: "4%",
    marginLeft: "24%",
  },
};

export const Home = () => {
  return (
    <div style={styles.body}>
      <div style={styles.background}>
        <div style={styles.navbar}>
          <Link style={styles.team} to="Team">
            team
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
      <div style={two.bod}>
        <div style={two.side}></div>
        <div style={two.teamwork}>
          <h1 style={{ fontSize: "50px" }}>Your Hub for teamwork</h1>
          <Text></Text>
        </div>
        <div style={two.inblock}></div>
        <div style={two.meeting}></div>
      </div>

      <div style={third.back}>
        <div style={third.left}></div>
        <div style={third.cen}></div>
        <div style={third.right}>
          <h1 style={{ fontSize: "50px" }}>Simple task management</h1>
          <Text />
        </div>
      </div>

      <div style={four.back}>
        <div style={four.far}></div>
        <div style={third.right}>
          <h1 style={{ fontSize: "50px" }}>Scheduling that actually works</h1>
          <Text />
        </div>
        <div style={four.line}></div>
        <div style={four.r}></div>
      </div>

      <div style={fifth.body}>
        <h1 style={{ fontSize: "40px" }}>What people say about us</h1>
        <div style={fifth.lever}></div>
        <div style={{ display: "flex", flexDirection: "row", gap: "2%" }}>
          {cardData.map((data, index) => {
            return (
              <div key={index}>
                <Card
                  starNumber={data.star}
                  comment={data.comment}
                  avatar={data.avatar}
                  name={data.name}
                />
              </div>
            );
          })}
        </div>
      </div>

      <div style={struct.body}>
        <div style={struct.ins}>
          <div style={struct.team}>
            <div style={struct.cont}>
              team
              <div style={styles.sqr}>
                <div style={styles.rl}></div>
              </div>
            </div>
            <div style={struct.space}></div>
            <div style={struct.main}>
              <div style={struct.inst}>
                <div style={struct.in}></div>
                <p> Instagram </p>
              </div>
              <div style={struct.face}>
                <div style={struct.fa}></div>
                <p> Facebook </p>
              </div>

              <div style={struct.Twit}>
                <div style={struct.T}></div>
                <p>Twitter </p>
              </div>
              <div style={struct.inst}>
                <div style={struct.in}></div>
                <p> Instagram </p>
              </div>
              <div style={struct.face}>
                <div style={struct.fa}></div>
                <p> Facebook </p>
              </div>

              <div style={struct.Twit}>
                <div style={struct.T}></div>
                <p>Twitter </p>
              </div>
            </div>
          </div>
          <div style={struct.sa}></div>
          <div style={struct.text}>
            <div style={struct.case}>
              <div style={struct.title}>Use Cases</div>
              <div style={struct.s}></div>
              <div style={struct.res}>UI Design</div>
              <div style={struct.res}>UX Design</div>
              <div style={struct.res}>Prototyping</div>
              <div style={struct.res}>UI Design</div>
              <div style={struct.res}>UX Design</div>
              <div style={struct.res}>Prototyping</div>
            </div>
            <div style={struct.case}>
              <div style={struct.title}>Explore</div>
              <div style={struct.s}></div>
              <div style={struct.res}>Figma</div>
              <div style={struct.res}>Customers</div>
              <div style={struct.res}>Why I love Figma</div>
              <div style={struct.res}>Figma</div>
              <div style={struct.res}>Customers</div>
              <div style={struct.res}>Why I love Figma</div>
            </div>
            <div style={struct.case}>
              <div style={struct.title}>Resources</div>
              <div style={struct.s}></div>
              <div style={struct.res}>Community Resources Hub</div>
              <div style={struct.res}>Support</div>
              <div style={struct.res}>Education</div>
              <div style={struct.res}>Community Resources Hub</div>
              <div style={struct.res}>Support</div>
              <div style={struct.res}>Education</div>
            </div>
          </div>
          <div style={struct.e}>
            <div style={struct.email}>
              <div style={struct.first}>Subscribe to our newsletter</div>
              <div style={struct.second}>
                <div style={struct.design}>
                  <div style={struct.lol}>Email</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const cardData = [
  {
    star: 5,
    comment:
      "Give everyone you work with—inside and outside your emoji, keep conversations focused in channels, and simplify all your communication into one place.",
    avatar: Amy,
    name: "Amy Klassen",
  },
  {
    star: 5,
    comment:
      "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
    avatar: Jane,
    name: "Jane Cooper",
  },
  {
    star: 5,
    comment:
      "Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco cillum dolor. Voluptate exercitation incididunt aliquip deserunt reprehenderit elit laborum. ",
    avatar: Pena,
    name: "Eleanor Pena",
  },
];

export default Home;
