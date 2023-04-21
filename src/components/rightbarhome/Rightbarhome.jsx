import React from "react";
import Safaricom from '../../assets/safaricom.png'
import "./rightbarhome.scss";
import Betika from '../../assets/Betika.png'

const Rightbarhome = () => {
  return (
    <div className="rightbarhome">
      <div className="birthdayContainer">
        <img
          src={Betika}
          alt=""
          className="birthdayImg"
        />
        <span className="birthdayText">
          <b>Jackpot </b> for only 15/= 
        </span>
      </div>
      <img src={Betika} alt="" className="rightbarAdvert" />

      <img src={Safaricom} alt="" className="rightbarAdvert" />

    </div>
  );
};

export default Rightbarhome;
