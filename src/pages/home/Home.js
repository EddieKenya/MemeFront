import Navbar from "../../components/navbar/Navbar";
import Sidebar from '../../components/sidebar/Sidebar';
import Feed from '../../components/feed/Feed';
import Rightbar from "../../components/rightbar/Rightbar";
import { useState, useEffect } from "react";

import './home.scss'

const Home = () => {
  
  
    return (
      <div className="home">
        <Navbar />
        <div className="homeContainer">
          
          <Sidebar/>
          <Feed/>
          <Rightbar/>
        </div>
      </div>
    );
  };
  
  export default Home;