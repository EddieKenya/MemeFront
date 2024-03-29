import React from "react";
import Post from "../post/Post";
import Share from "../share/Share";
import "./feed.scss";
import PostLoading from "../Postloading/Postloading";
import useFetch from "../../useFetch";

const Feed = () => {
  const{data :posts, pending, error} = useFetch('http://127.0.0.1:8000/api/posts/')
  

  return (
    <div className="feed">
      <div className="feedWrapper">
        <Share />
        {error && <>{error}</>}
        {pending && <PostLoading/>}
        {posts && <Post posts={posts}/>}
        
      </div>
    </div>
  );
};

export default Feed;
