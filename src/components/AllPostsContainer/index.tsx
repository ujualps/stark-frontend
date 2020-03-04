import * as React from "react";
import "./styles.css";
import axios from "axios";
import { PostCardValues, PostCard } from "../PostCard";

export const AllPostContainer = () => {
  const [posts, setPosts] = React.useState<PostCardValues[]>([]);

  axios.get("http://localhost:5000/get_all_posts").then(function(response) {
    setPosts(response.data);
  });
  return (
    <div className='AllPostContainer'>
      {posts.map((post: PostCardValues) => (
        <PostCard
          title={post.title}
          desc={post.desc}
          postedUserId={post.postedUserId}
          postId={post.postId}
        />
      ))}
    </div>
  );
};
