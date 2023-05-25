import React from "react";
import { Link } from "react-router-dom";
import "./profileRightBar.scss";

const ProfileRightBar = () => {
  return (
    <div className="profileRightBar">
      <div className="profileRightBarHeading">
        <span className="profileRightBarTitle"> User Information</span>
        {/* <Link to="/profile/userId/edit" style={{ textDecoration: "none" }}>
          <span className="editButton">Edit Profile</span>
        </Link> */}
      </div>

      <div className="profileRightBarInfo">
        <div className="profileRightBarInfoItem">
          <span className="profileRightBarInfoKey">Email: </span>
          <span className="profileRightBarInfoValue">edwinmakhanu630@gmail.com</span>
        </div>
        <div className="profileRightBarInfoItem">
          <span className="profileRightBarInfoKey">Phone Number: </span>
          <span className="profileRightBarInfoValue">+254 704 761 890</span>
        </div>
        <div className="profileRightBarInfoItem">
          <span className="profileRightBarInfoKey">Country: </span>
          <span className="profileRightBarInfoValue">Kenya</span>
        </div>
        <div className="profileRightBarInfoItem">
          <span className="profileRightBarInfoKey">About: </span>
          <span className="profileRightBarInfoValue">
          FullStack Developer
          </span>
        </div>
        <div className="profileRightBarInfoItem">
          <span className="profileRightBarInfoKey">Github: </span>
          <span className="profileRightBarInfoValue">EddieKenya</span>
        </div>
      </div>
      
      
    </div>
  );
};

export default ProfileRightBar;
