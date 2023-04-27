import React from "react";
import { Posts } from "../../data";
import Post from "../post/Post";
import Share from "../share/Share";
import "./feed.scss";
import { useEffect, useState } from "react";
import PostLoading from "../Postloading/Postloading";

const Feed = () => {
  const PostLoadingComponent = PostLoading(Post);
  const [appState, setAppState] = useState({
    loading : false,
    posts : null,
  })

  return (
    <div className="feed">
      <div className="feedWrapper">
        <Share />
        {Posts.map((p) => (
          <Post key={p.id} post={p} />
        ))}
      </div>
    </div>
  );
};

export default Feed;
