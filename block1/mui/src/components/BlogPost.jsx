import { useParams } from "react-router-dom";
import Header from "../components/Header";
import axios from "axios";
import React from "react";
import { Blog } from "../components/Blog";
import Box from "@mui/material/Box";
export const BlogPost = () => {
  const { id } = useParams();
  const [posts, setPost] = React.useState();
  const instance = axios.create({
    baseURL: "https://dummyapi.io/data/v1/post",
    headers: { "app-id": "636e0d6642c1f665f684f489" },
  });

  React.useEffect(() => {
    const fetchPosts = async () => {
      try {
        //const res = await instance.get(`/${id}`);
        const res = await instance.get("/");
        //const id = await instance.get(`/${id}`);
        setPost(res.data.data);
        console.log(res.data.data);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchPosts();
  }, []);

  return (
    <div>
      <Header></Header>
      <Box sx={{ marginBottom: "40px" }}></Box>

      {posts?.map((val, ind) => {
        console.log(val.id);
        if (id === val.id) {
          return <Blog post={val} />;
        }
      })}
    </div>
  );
};
