import * as React from "react";
import "./styles.css";
import profileimg from "../../profileimg.jpg";
import axios from "axios";

export interface PostCardValues {
  title: string;
  desc: string;
  userid: number;
  id: number;
}

export const PostCard = (props: PostCardValues) => {
  const [username, setUsername] = React.useState("hello");

  axios
    .post("http://localhost:5000/get_user", {
      userid: props.userid
    })
    .then(function(response) {
      setUsername(response.data.username);
    });

  // console.log('..............................................');
  // console.log(props);
  // console.log('..............................................');

  return (
    <section className="PostCardMain">
      <div className="PostCardUserDiv">
        <img src={profileimg} alt="user image" className="UserImg" />
        <div className="ColumnCenter">
          <li className="PostCardUserName">{username}</li>
        </div>
      </div>
      <div className="PostCardTitleBox">
        <li className="PostCardTitle">{props.title}</li>
      </div>
      <div className="PostCardDescBox">
        <li className="PostCardDesc">{props.desc}</li>
      </div>
    </section>
  );
};
