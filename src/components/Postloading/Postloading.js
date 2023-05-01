import React from "react";
import "./PostLoading.css";

const PostLoading = () => {
    return (
      <div className="post-loading-container">
        <div className="post-loading-spinner"></div>
        <div className="post-loading-text">
          <p>Loading post...</p>
        </div>
      </div>
    );
  };



  export default PostLoading;
