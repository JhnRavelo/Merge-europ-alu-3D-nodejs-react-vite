import Messages from "./Messages";
import Input from "./Input";
import menuIcon from "../img/bar.png";
import userPhoto from "../img/avatar/homme.png"
import "../style.scss"
import { useLocation } from "react-router-dom";
import ChevronGauche from "../img/chevron-gauche.png"
import { useState } from "react";


const Chat = () => {
  const [commercialChat, setCommercialChat] = useState("")
  const location = useLocation();

  const handleOpenMenu = () => {
    const sidebar = document.querySelector(".sidebar")
    sidebar.classList.toggle("visible")
  };

  return (
    <div className="chat">
      <div className="chatInfo">
        <img src={userPhoto} alt="" />
        <span>{'Hardy'}</span>

        <button className="menuIcon" onClick={handleOpenMenu}>
          <img src={ location.pathname.includes("commercial") ? menuIcon : ChevronGauche} alt="" />
        </button>
      </div>
      <Messages />
      <Input />
    </div>
  );
};

export default Chat;



// export default Chat;
// import { useContext } from "react";
// import Messages from "./Messages";
// import Input from "./Input";
// import { ChatContext } from "../context/ChatContext";
// import menuIcon from "../img/bar.png";

// const Chat = () => {
//   const { data } = useContext(ChatContext);
  
  
//   const handleOpenMenu = () => {
//     const sidebar = document.querySelector(".sidebar")
//     sidebar.classList.toggle("visible")
//   };

//   return (
//     <div className="chat">
//       <div className="chatInfo">
//         <img src={data.user?.photoURL} alt="" />
//         <span>{data.user?.displayName}</span>

//         <button className="menuIcon" onClick={handleOpenMenu}>
//           <img src={menuIcon} alt="" />
//         </button>
//       </div>
//       <Messages />
//       <Input />
//     </div>
//   );
// };
// export default Chat;
