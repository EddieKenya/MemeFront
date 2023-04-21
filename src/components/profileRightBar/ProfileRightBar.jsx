import React from "react";
import { Link } from "react-router-dom";
import "./profileRightBar.scss";

const ProfileRightBar = () => {
  return (
    <div className="profileRightBar">
      <div className="profileRightBarHeading">
        <span className="profileRightBarTitle"> User Information</span>
        <Link to="/profile/userId/edit" style={{ textDecoration: "none" }}>
          <span className="editButton">Edit Profile</span>
        </Link>
      </div>

      <div className="profileRightBarInfo">
        <div className="profileRightBarInfoItem">
          <span className="profileRightBarInfoKey">Email: </span>
          <span className="profileRightBarInfoValue">amberlogan@gmail.com</span>
        </div>
        <div className="profileRightBarInfoItem">
          <span className="profileRightBarInfoKey">Phone Number: </span>
          <span className="profileRightBarInfoValue">+4 123 456 789</span>
        </div>
        <div className="profileRightBarInfoItem">
          <span className="profileRightBarInfoKey">Address: </span>
          <span className="profileRightBarInfoValue">
            Melwood Str. 72 Liverpool
          </span>
        </div>
        <div className="profileRightBarInfoItem">
          <span className="profileRightBarInfoKey">Country: </span>
          <span className="profileRightBarInfoValue">United Kingdom</span>
        </div>
        <div className="profileRightBarInfoItem">
          <span className="profileRightBarInfoKey">Relationship: </span>
          <span className="profileRightBarInfoValue">Single</span>
        </div>
      </div>
      
      
    </div>
  );
};

export default ProfileRightBar;
