import React, { useContext } from "react";
import Messages from "./Messages";
import Input from "./Input";
import { ChatContext } from "../context/ChatContext";
import menuIcon from "../img/bar.png";

const Chat = () => {
  const { data } = useContext(ChatContext);
  
  
  const handleOpenMenu = () => {
    const sidebar = document.querySelector(".sidebar")
    sidebar.classList.toggle("visible")
  };

  return (
    <div className="chat">
      <div className="chatInfo">
        <img src={data.user?.photoURL} alt="" />
        <span>{data.user?.displayName}</span>

        <button className="menuIcon" onClick={handleOpenMenu}>
          <img src={menuIcon} alt="" />
        </button>
      </div>
      <Messages />
      <Input />
    </div>
  );
};
export default Chat;
