import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Link from "react";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import { sizing } from "@mui/system";
import Ins from "../images/Insta.png";
import Face from "../images/Facebook.png";
import Twit from "../images/twitter.png";
import { styled } from "@mui/material/styles";

import Paper from "@mui/material/Paper";
function FormRow() {
  return (
    <React.Fragment>
      {/* <Grid container spacing={1} sx={{ ml: 12, mt: 3 }}>
        <Grid container item spacing={2}>
          <Grid item xs={3}>
            instagram
          </Grid>
          <Grid item xs={2}>
            UI Design
          </Grid>
          <Grid item xs={2}>
            Figma
          </Grid>
          <Grid item xs={2}>
            Community Resources Hub
          </Grid>
          <Grid item xs={2}>
            Email
          </Grid>
        </Grid>
      </Grid>

      <Grid container spacing={1} sx={{ ml: 12, mt: 1 }}>
        <Grid container item spacing={2}>
          <Grid item xs={3}>
            Facebook
          </Grid>
          <Grid item xs={2}>
            UX Design
          </Grid>
          <Grid item xs={2}>
            Customers
          </Grid>
          <Grid item xs={2}>
            Support
          </Grid>
        </Grid>
      </Grid>

      <Grid container spacing={1} sx={{ ml: 12, mt: 1 }}>
        <Grid container item spacing={2}>
          <Grid item xs={3}>
            Twitter
          </Grid>
          <Grid item xs={2}>
            Prototyping
          </Grid>
          <Grid item xs={2}>
            Why I love Figma
          </Grid>
          <Grid item xs={2}>
            Education
          </Grid>
        </Grid>
      </Grid> */}
    </React.Fragment>
  );
}

function Tail() {
  return (
    <Container
      spacing={12}
      maxWidth={false}
      margin={12}
      sx={{ backgroundColor: "#252B3B" }}
      style={{
        display: "flex",
        flexDirection: "row",
        fontSize: 17,
        color: "white",
      }}
    >
      <Grid container item xs={2} sx={{ ml: 19, mt: 0 }}>
        <Box gridColumn="span 5" spacing={1} sx={{ ml: 12 }}>
          <Box gridColumn="span 5" item spacing={2}>
            <h1>team.</h1>
            {/* <Box sx={{ width: 7, height: 7, backgroundColor: "red" }}></Box> */}
            <p>
              {" "}
              <img src={Ins} /> Instagram{" "}
            </p>
            <p>
              {" "}
              <img src={Face} /> Facebook
            </p>

            <p>
              {" "}
              <img src={Twit} /> Twitter
            </p>
            <p>
              {" "}
              <img src={Ins} /> Instagram{" "}
            </p>
            <p>
              {" "}
              <img src={Face} /> Facebook
            </p>

            <p>
              {" "}
              <img src={Twit} /> Twitter
            </p>
          </Box>
        </Box>
      </Grid>

      <Box gridColumn="span 5" spacing={1} sx={{ ml: 12, mt: 2 }}>
        <Box gridColumn="span 5" item spacing={2}>
          <p>Use Cases</p>
          <p>UI Design</p>
          <p>UX Design</p>
          <p>Prototyping</p>
          <p>UI Design</p>
          <p>UX Design</p>
          <p>Prototyping</p>
        </Box>
      </Box>
      <Box gridColumn="span 5" spacing={1} sx={{ ml: 12, mt: 2 }}>
        <Box gridColumn="span 5" item spacing={2}>
          <p>Explore</p>
          <p>Figma</p>
          <p>Customers</p>
          <p>Why I love Figma</p>
          <p>Figma</p>
          <p>Customers</p>
          <p>Why I love Figma</p>
        </Box>
      </Box>
      <Grid container item xs={2}>
        <Box gridColumn="span 5" spacing={1} sx={{ ml: 12, mt: 2 }}>
          <Box gridColumn="span 5" item spacing={2}>
            <p>Resources</p>
            <p>Community Resource Hub</p>
            <p>Support</p>
            <p>Education</p>
            <p>Community Resource Hub</p>
            <p>Support</p>
            <p>Education</p>
          </Box>
        </Box>
      </Grid>

      <Box gridColumn="span 2" spacing={1} sx={{ ml: 12, mt: 2 }}>
        <Box gridColumn="span 5" item spacing={2}>
          <p style={{ fontSize: "20px" }}>Subscribe to our newsletter</p>
          <Box
            style={{
              backgroundColor: "white",
              color: "#4DA0FD",
              display: "flex",
              alignItems: "center",
            }}
            sx={{ width: 280, height: 50 }}
          >
            Email
          </Box>
        </Box>
      </Box>
      {/* style={{ backgroundImage: `url(${Ins})` }} */}
    </Container>
  );
}
export default Tail;
