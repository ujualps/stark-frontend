import * as React from "react";
import "./styles.css";
import axios from "axios";
import { PostCardValues, PostCard } from "../PostCard";

export const AllPostContainer = () => {
  const [posts, setPosts] = React.useState<PostCardValues[]>([]);

  axios.get("http://localhost:5000/get_all_posts").then(function(response) {
    setPosts(response.data);
  });

    // console.log(posts)
  
  return (
    <div className='AllPostContainer'>
        <div className="RecentlyAskedHeading">
            <li className="AllPostsHeading">Recently Asked</li>
        </div>
        {posts.map((post: PostCardValues) => (
            <PostCard
                title={post.title}
                desc={post.desc}
                userid={post.userid}
                id={post.id}
            />
      ))}
    </div>
  );
};
