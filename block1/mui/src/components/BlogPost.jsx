import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import useRoute from "react";
import { BlogCard } from "./Card";

export const BlogPost = () => {
  //const route = useRoute();
  //console.log(route.params.data);
  return (
    <div>
      <Header></Header>
      <BlogCard></BlogCard>
    </div>
  );
};
