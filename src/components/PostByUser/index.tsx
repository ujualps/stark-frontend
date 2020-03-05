import * as React from "react";
import "./styles.css";
import axios from "axios";
import { PostCardValues, PostCard } from "../PostCard";

interface PostByUserValues{
    userid: number
}

export const PostByUserContainer = (props: PostByUserValues) => {
  const [posts, setPosts] = React.useState<PostCardValues[]>([]);

  axios.post("http://localhost:5000/get_posts_by_user",
  {
      userid: props.userid
  }).then(function(response) {
    setPosts(response.data);
  });

    // console.log(posts)
  
  return (
    <div className='AllPostContainer'>
        <div className="RecentlyAskedHeading">
            <li className="AllPostsHeading">Posts</li>
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
