import * as React from "react";
import "./styles.css";
import axios from "axios";
import { PostCardValues, PostCard } from "../PostCard";
import { PopularQuestionBox } from "../PopularQuestionBox";

interface SearchPageValues{
    searchText: string;
}

export const SearchPage = (props: SearchPageValues) => {
    const [posts, setPosts] = React.useState<PostCardValues[]>([]);

    axios.post("http://localhost:5000/search_posts", {
        'text': props.searchText
    }).then(function (response) {
        setPosts(response.data);
    })

    return(
        <main className="HomePageMain" data-testid="home">
      <div className="MainPageContents">
        <div className="AllPostContainer">
            {posts.map((post: PostCardValues) => (
                <PostCard
                    title={post.title}
                    desc={post.desc}
                    userid={post.userid}
                    id={post.id}
                />
        ))}
        </div>
      </div>
      <aside className="MainPageAside">
        <PopularQuestionBox />
      </aside>
    </main>
        
    )
}