import React, { useContext } from "react";
import RssFeedIcon from "@mui/icons-material/RssFeed";
import ChatIcon from "@mui/icons-material/Chat";
import VideocamIcon from "@mui/icons-material/Videocam";
import GroupsIcon from "@mui/icons-material/Groups";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import EventIcon from "@mui/icons-material/Event";
import ExitToAppOutlinedIcon from "@mui/icons-material/ExitToAppOutlined";
import "./sidebar.scss";
import MenuLink from "../menuLink/MenuLink";
import { DarkModeContext } from "./../../context/darkModeContext";
import { Link } from "react-router-dom";


const Sidebar = () => {
  const { dispatch } = useContext(DarkModeContext);
  const  LinkStyle = {
    textDecoration: "none",
    color: 'blue'
  }
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        {/* <MenuLink Icon={<RssFeedIcon />} text="Feed" />
        <MenuLink Icon={<ChatIcon />} text="Chats" />
        <MenuLink Icon={<VideocamIcon />} text="Videos" />
        <MenuLink Icon={<GroupsIcon />} text="Friends" />
        <MenuLink Icon={<BookmarkIcon />} text="Bookmarks" />
        <MenuLink Icon={<ShoppingCartIcon />} text="Marketplace" /> */}
  

        
        <Link
         to="/bio"
         style={LinkStyle}>
          <MenuLink Icon={<EventIcon />} text="About App (developement)" />
        </Link>
       
        <Link
         to="/logout"
         style={LinkStyle}>
          <MenuLink Icon={<ExitToAppOutlinedIcon />} text="LogOut" />
        </Link>
       

        
      </div>
    </div>
  );
};

export default Sidebar;
