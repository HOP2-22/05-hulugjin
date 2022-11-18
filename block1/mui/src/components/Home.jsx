import React, { useContext } from "react";
import { BlogCard } from "./Card";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import axios from "axios";
import { ColorModeContext } from "../context/ThemeContext";
import Header from "../components/Header";
import Tail from "./Tail";
export const Home = () => {
  const [posts, setPost] = React.useState();
  const instance = axios.create({
    baseURL: "https://dummyapi.io/data/v1/post",
    headers: { "app-id": "636e0d6642c1f665f684f489" },
  });
  const { theme, changeTheme, isDark } = useContext(ColorModeContext);
  React.useEffect(() => {
    const fetchPosts = async () => {
      try {
        const res = await instance.get("/");
        setPost(res.data.data);
        console.log(res.data.data);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchPosts();
  }, []);

  return (
    <div style={{ backgroundColor: theme.backgroundColor }}>
      <Header></Header>
      <Box sx={{ marginBottom: "60px" }}></Box>
      <Container maxWidth="xl">
        <Grid container spacing={3}>
          <Grid item xs={12} md={6} lg={3} color={theme.color}>
            <h1>Blog posts</h1>
          </Grid>
        </Grid>
        <Grid item xs={1} md={6} lg={3} color={theme.color}>
          <p> Our latest updates and blogs about managing your team </p>
        </Grid>
        <Grid container spacing={4}>
          {posts?.map((data, ind) => {
            return (
              <Grid item xs={12} md={6} lg={3} key={ind}>
                <BlogCard num={ind} post={data} id={data.id} />
              </Grid>
            );
          })}
        </Grid>
      </Container>
      <Box sx={{ marginBottom: "90px" }}></Box>
      <Tail />
    </div>
  );
};
