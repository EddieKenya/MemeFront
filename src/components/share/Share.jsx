import {
  Close,
  EmojiEmotions,
  PermMedia,
  VideoCameraFront,
} from "@mui/icons-material";
import React, { useState } from "react";
import "./share.scss";
import axios from "axios";
import bgImg from '../../assets/img1.jpg'




const Share = () => {
  const [bio, setBio] = useState("");
  const [file, setFile] = useState(null);
  const [isPosting, setIsPosting] = useState(false);
 


  const handleSubmit = async (e) => {
      e.preventDefault();
      setIsPosting(true);  
      const formData = new FormData();
      formData.append('bio', bio);
      formData.append('file', file);

    
  
      try {
        await axios.post('http://127.0.0.1:8000/api/upload/', formData, {
          headers: {
            'Content-Type': 'multipart/form-data'
          }
        });
        // Request successful, do something
         window.location.reload();
         setIsPosting(false);
      } catch (error) {
        console.log(error.message)
      }

    
    
  };


  const removeImage = () => {
    setFile(null);
  };
  return (

    <div className="share">

      <form action="" onSubmit={handleSubmit}>
        <div className="shareWrapper">
          <div className="shareTop">
          
            <img
              src={bgImg}
              alt=""
              className="shareProfileImg"
            />
            <input
              type="text"
              name="bio"
              placeholder=" Caption your post with a bio..."
              className="shareInput"
              value={bio}
              onChange={(e)=> setBio(e.target.value)}
            />
          </div>
          <hr className="shareHr" />
          {file && (
            <div className="shareImgContainer">
              <img src={URL.createObjectURL(file)} alt="" className="shareImg" />
              <button type="submit" onClick={handleSubmit} disabled={isPosting}>
                {isPosting ? 'Posting Data...' : 'Post Data'}
              </button>
              
              <Close className="shareCancelImg" onClick={removeImage} />
            </div>
          )}
          <div className="shareBottom">
            <div className="shareOptions">
              <label htmlFor="file" className="shareOption">
                <PermMedia className="shareIcon" style={{ color: "#2e0196f1" }} />
                <span className="shareOptionText">Photo</span>
                <input
                  type="file"
                  name="file"
                  id="file"
                  accept=".png,.jpeg,.jpg"
                  style={{ display: "none" }}
                  onChange={(e) => setFile(e.target.files[0])}
                />
              </label>
          
            </div>
          </div>
        </div>
      </form>   
    </div>
  );
};

export default Share;
