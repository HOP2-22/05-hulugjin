import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea, Stack } from "@mui/material";
import Box from "@mui/material/Box";
import { useNavigate } from "react-router-dom";
import { BlogPost } from "./BlogPost";
export const BlogCard = (props) => {
  const { post } = props;
  const navigate = useNavigate();

  return (
    <Card
      sx={{ maxWidth: 345 }}
      onClick={() => {
        navigate(`/posts/${post.id}`, {
          data: post,
        });
      }}
    >
      <CardActionArea>
        <CardMedia component="img" height="140" image={post?.image} alt="img" />

        <CardContent>
          <Typography
            variant="body2"
            color="text.secondary"
            fontFamily="Mulish"
          ></Typography>
        </CardContent>
      </CardActionArea>
      <Stack
        flexDirection={"row"}
        gap={2}
        justifyContent={"center"}
        color="#6D7D8B"
      >
        <Box
          component="img"
          sx={{ height: 35, width: 35 }}
          src={post?.owner.picture}
        />
        <Typography fontFamily="Mulish">
          {post?.tags[1]},{post?.tags[2]}{" "}
        </Typography>
        <Typography>|</Typography>
        <Typography fontFamily="Mulish" color="#6D7D8B">
          2nd January 2022
        </Typography>
      </Stack>
    </Card>
  );
};

export default BlogCard;

// 1.
// export const Component;

// import { Component } from './'
// 2.
// export default Component;

// import Component from './'
