import React, { useEffect , useState} from "react";
import "./post.scss";
import { Users } from "./../../data";
import { IconButton } from "@mui/material";
import Picture from '../../assets/prof.jpg'
import PostLoading from "../Postloading/Postloading";
import axios from 'axios'

import {
  ChatBubbleOutline,
  MoreVert,
  Favorite,
  ThumbUp,
  ThumbUpAltOutlined,
  ShareOutlined,
} from "@mui/icons-material";
import { Link } from "react-router-dom";

const Post = ({ posts }) => {


   
  return (

    <>
      {posts.map((post) =>(
        <div className="post" key={post.id}>
          <div className="postWrapper">
            <div className="postTop">
              <div className="postTopLeft">
                <Link to="/profile/userId">
                  <img
                    src={
                      Picture
                    }
                    alt=""
                    className= "postProfileImg"
                  />
                </Link>
                <span className="postUsername">
                    {post.user.user_name}
                  {/* {Users.filter((u) => u.id === post.user)[0].user_name} */}
                </span>
                <span className="postDate">{post.date_created}</span>
              </div>
              <div className="postTopRight">
                <IconButton>
                  <MoreVert className="postVertButton" />
                </IconButton>
              </div>
            </div>
            <div className="postCenter">
              <span className="postText">{post.bio}</span>
              <img src={post.posts_image} alt="" className="postImg" />
            </div>
            <div className="postBottom">
              <div className="postBottomLeft">
                <Favorite className="bottomLeftIcon" style={{ color: "red" }} />
                <ThumbUp className="bottomLeftIcon" style={{ color: "#011631" }} />
                <span className="postLikeCounter">{post.like}</span>
              </div>
              <div className="postBottomRight">
                <span className="postCommentText">
                  {post.comment} · comments · share
                </span>
              </div>
            </div>

            <hr className="footerHr" />
            <div className="postBottomFooter">
              <div className="postBottomFooterItem">
                <ThumbUpAltOutlined className="footerIcon" />
                <span className="footerText">Like</span>
              </div>
              <div className="postBottomFooterItem">
                <ChatBubbleOutline className="footerIcon" />
                <span className="footerText">Comment</span>
              </div>
              <div className="postBottomFooterItem">
                <ShareOutlined className="footerIcon" />
                <span className="footerText">Share</span>
              </div>
            </div>
          </div>
        </div>

      ))}
    </>
  
  );
};

export default Post;
