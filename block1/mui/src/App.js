import * as React from "react";
import Button from "@mui/material/Button";
import ButtonAppBar from "./components/Header";
import Header from "./components/Header";
import Card from "./components/Card";
import Box from "@mui/material/Box";
import Link from "react";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import woman from "/Users/22-hop2-/new/block1/mui/src/images/Wade.png";
import bes from "/Users/22-hop2-/new/block1/mui/src/images/Bessie.png";
import hen from "/Users/22-hop2-/new/block1/mui/src/images/Henry.png";
import Les from "/Users/22-hop2-/new/block1/mui/src/images/Les.png";
import Tail from "/Users/22-hop2-/new/block1/mui/src/components/Tail";
export default function MyApp() {
  return (
    <div>
      <Header></Header>
      <Box sx={{ marginBottom: 30 }}></Box>

      <Container maxWidth="xl">
        <Grid container spacing={3}>
          <Grid item xs={12} md={6} lg={3}>
            <h1>Blog posts</h1>
          </Grid>
        </Grid>

        <Grid item xs={1} md={6} lg={3}>
          <p> Our latest updates and blogs about managing your team </p>
        </Grid>

        <Grid container spacing={4}>
          {data.map((data) => {
            return (
              <Grid item xs={12} md={6} lg={3}>
                <Card
                  name={data.CardContentName}
                  image={data.image}
                  header={data.CardContentHeader}
                  body={data.CardContentBody}
                />{" "}
              </Grid>
            );
          })}
        </Grid>
      </Container>
      <Tail />
    </div>
  );
}

const data = [
  {
    CardContentHeader: "The Emotional Toll of Being in UX",
    CardContentBody:
      "There are times when our work impacts us deeply - sometimes in ways we neither acknowledge nor understand",
    CardContentName: "Wade Warren",
    image: woman,
  },
  {
    CardContentHeader: "10 secret tips for managing a team remotely",
    CardContentBody:
      "Our latest updates and blogs about managing your team Our latest updates and blogs about managing your team",
    CardContentName: "Bessie Cooper",
    image: bes,
  },
  {
    CardContentHeader: "What Ever Happened to Steampunk?",
    CardContentBody:
      "How the iPhone popularized steampunk… and how the iPhone killed it off",
    CardContentName: "Bessie Cooper",
    image: hen,
  },
  {
    CardContentHeader: "The 2020 Guide for White Men in Tech",
    CardContentBody:
      "How to use centuries of unfair advantage to make the world a more equal place",
    CardContentName: "Courtney Henry",
    image: Les,
  },
  {
    CardContentHeader: "Why Are Women Still Behind in the Design World?",
    CardContentBody:
      "It’s 2020, but women designers still face lower pay and less opportunity. What gives?",
    CardContentName: "Darlene Robert",
    image: woman,
  },
  {
    CardContentHeader: "The Ultimate Guide to Becoming a Great Designer",
    CardContentBody:
      "Our latest updates and blogs about managing your team Our latest updates and blogs about managing your team",
    CardContentName: "Leslie Alexander",
    image: bes,
  },
  {
    CardContentHeader: "Data-Driven Design is Killing Our Instincts",
    CardContentBody:
      "Our latest updates and blogs about managing your team Our latest updates and blogs about managing your team",
    CardContentName: "Eleanor Pena",
    image: hen,
  },
  {
    CardContentHeader: "Finding the Blank Spots in Big Data",
    CardContentBody:
      "Artists and designers are working to address a major problem for marginalized communities in the data economy: ‘If the data does not exist…",
    CardContentName: "Jane Cooper",
    image: Les,
  },
  {
    CardContentHeader: "3 Lessons We Learned From Rebranding Gusto",
    CardContentBody:
      "You might not know the music, but designers have certainly taken notice of this small but visceral movement from the late ’80s",
    CardContentName: "Jenny Wilson",
    image: woman,
  },
  {
    CardContentHeader: "The Emotional Toll of Being in UX",
    CardContentBody:
      "There are times when our work impacts us deeply - sometimes in ways we neither acknowledge nor understand",
    CardContentName: "Jacob Jones",
    image: Les,
  },
];
/*
   <Grid item xs={12} md={6} lg={3}>
            <Card />
          </Grid>
          <Grid item xs={12} md={6} lg={3}>
            <Card />
          </Grid>
          <Grid item xs={12} md={6} lg={3}>
            <Card />
          </Grid>
          <Grid item xs={12} md={6} lg={3}>
            <Card />
          </Grid>
*/
/*
const data = [
  {
    name: "Wade Warren",
    image: woman,
  },
  {
    name: "Bessie Cooper",
    image: bes,
  },
  {
    name: "Courtney Henry",
    image: hen,
  },
  {
    name: "Leslie Alexander",
    image: Les,
  },
];
*/
