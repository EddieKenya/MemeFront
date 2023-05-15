import React, { useContext } from "react";
import RssFeedIcon from "@mui/icons-material/RssFeed";
import ChatIcon from "@mui/icons-material/Chat";
import VideocamIcon from "@mui/icons-material/Videocam";
import GroupsIcon from "@mui/icons-material/Groups";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import EventIcon from "@mui/icons-material/Event";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import ExitToAppOutlinedIcon from "@mui/icons-material/ExitToAppOutlined";
import "./sidebar.scss";
import MenuLink from "../menuLink/MenuLink";
import Friends from "../friends/Friends";
import { Users } from "../../data";
import { DarkModeContext } from "./../../context/darkModeContext";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const { dispatch } = useContext(DarkModeContext);
  const  LinkStyle = {
    margin : "1rem",
    textDecoration: "none",
    color: 'blue'
  }
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <MenuLink Icon={<RssFeedIcon />} text="Feed" />
        <MenuLink Icon={<ChatIcon />} text="Chats" />
        <MenuLink Icon={<VideocamIcon />} text="Videos" />
        <MenuLink Icon={<GroupsIcon />} text="Friends" />
        <MenuLink Icon={<BookmarkIcon />} text="Bookmarks" />
        <MenuLink Icon={<ShoppingCartIcon />} text="Marketplace" />
        <MenuLink Icon={<EventIcon />} text="Events" />
        <span onClick={() => dispatch({ type: "TOGGLE" })}>
          <MenuLink Icon={<Brightness4Icon />} text="Theme" />
        </span>
        <Link
         to="/logout"
         style={LinkStyle}>
          <MenuLink Icon={<ExitToAppOutlinedIcon />} text="Logout" />
        </Link>

        
      </div>
    </div>
  );
};

export default Sidebar;
