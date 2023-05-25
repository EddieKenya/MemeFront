import React, { useState } from 'react';
import axios from 'axios';

const LikeButton = ({ postId, initialLikes }) => {
  const [likes, setLikes] = useState(initialLikes);
  const [isLiked, setIsLiked] = useState(false);

  const handleLike = () => {
    axios.post(`/api/posts/${postId}/like/`)
      .then(response => {
        setLikes(response.data.likes);
        setIsLiked(true);
      })
      .catch(error => {
        console.error('Error liking the post:', error);
      });
  };

  const handleUnlike = () => {
    axios.post(`/api/posts/${postId}/unlike/`)
      .then(response => {
        setLikes(response.data.likes);
        setIsLiked(false);
      })
      .catch(error => {
        console.error('Error unliking the post:', error);
      });
  };

  return (
    <div>
      <button onClick={isLiked ? handleUnlike : handleLike}>
        {isLiked ? 'Unlike' : 'Like'}
      </button>
      <span>{likes} likes</span>
    </div>
  );
};

export default LikeButton;
