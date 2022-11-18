import React, { useContext } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea, Stack } from "@mui/material";
import Box from "@mui/material/Box";
import { useNavigate } from "react-router-dom";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import { ColorModeContext } from "../context/ThemeContext";
import Tail from "./Tail";
export const Blog = (props) => {
  const { post } = props;
  const { theme, changeTheme, isDark } = useContext(ColorModeContext);
  console.log(post);
  return (
    <div style={{ backgroundColor: theme.backgroundColor, color: theme.color }}>
      <Container maxWidth="lg" fontFamily="Mulish">
        <Typography fontFamily="Mulish" fontSize="35px">
          {post.text}
        </Typography>
        <Grid container item xs={12} sx={{ mt: 3 }}>
          <Grid item xs={0.5}>
            <Box
              xs={5}
              component="img"
              sx={{ height: 40, width: 40 }}
              src={post?.owner.picture}
              borderRadius={5}
            />
          </Grid>
          <Grid item xs={1.4}>
            <Typography fontFamily="Mulish" color="#6D7D8B">
              {post.owner.firstName} {post.owner.lastName}
            </Typography>
          </Grid>
          <Grid item xs={0.2} color="#6D7D8B">
            <Typography color="#6D7D8B">|</Typography>
          </Grid>

          <Typography fontFamily="Mulish" color="#6D7D8B">
            2nd January 2022
          </Typography>
        </Grid>

        <Grid container item xs={12} sx={{ mt: 4 }}>
          <Box
            component="img"
            sx={{ height: "40", width: "90%" }}
            src={post?.image}
          />
        </Grid>

        <Grid container item xs={12} sx={{ mt: 5 }}>
          <Grid item xs={0.6}>
            <Box
              component="img"
              sx={{ height: 45, width: 45 }}
              src={post?.owner.picture}
              borderRadius={6}
            />
          </Grid>
          <Grid>
            <Box sx={{ height: 20, width: 75, fontSize: 13 }}>Written by</Box>
            <Typography fontFamily="Mulish">
              {post.owner.firstName} {post.owner.lastName}
            </Typography>
            <Typography
              fontFamily="Mulish"
              color="#6D7D8B"
              sx={{ fontSize: 11 }}
            >
              CEO Team App
            </Typography>
          </Grid>
        </Grid>

        <Grid container item xs={12} sx={{ mt: 7 }}>
          <Box
            sx={{ height: 2, width: "90%" }}
            style={{ backgroundColor: "#6D7D8B" }}
          ></Box>
        </Grid>

        <Typography
          fontFamily="Mulish"
          color="#6D7D8B"
          fontSize="24px"
          sx={{ mt: 5 }}
        >
          Join the conversation
        </Typography>
        <Grid container item xs={12} sx={{ mt: 1 }}>
          <Grid item xs={0.6}>
            <Box
              component="img"
              sx={{ height: 45, width: 45 }}
              src={post?.owner.picture}
              borderRadius={6}
            />
          </Grid>

          <Box
            sx={{
              height: 160,
              width: "85%",
              border: 2,
              borderColor: "#6D7D8B",
            }}
          >
            <Typography sx={{ m: 1 }} style={{ color: "#6D7D8B" }}>
              Comments
            </Typography>
          </Box>
        </Grid>
      </Container>

      <Box sx={{ marginBottom: "190px" }}></Box>

      <Tail />
    </div>
  );
};

export default Blog;
