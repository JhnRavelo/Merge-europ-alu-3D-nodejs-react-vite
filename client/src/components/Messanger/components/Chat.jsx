import Messages from "./Messages";
import Input from "./Input";
import menuIcon from "../img/bar.png";
import "../style.scss";
import { useLocation } from "react-router-dom";
import ChevronGauche from "../img/chevron-gauche.png";
import useButtonContext from "../../../hooks/useButtonContext";
import { useEffect } from "react";

const Chat = () => {
  const location = useLocation();
  const { commercialChat, setSender, setReceiver, dataPage } =
    useButtonContext();

  const handleOpenMenu = () => {
    const sidebar = document.querySelector(".sidebar");
    sidebar.classList.toggle("visible");
  };

  useEffect(() => {
    if (commercialChat?.name) {
      setReceiver(commercialChat.ID_user);
      setSender(dataPage?.userRead[0]?.ID_user);
    }
  }, [commercialChat, location, dataPage]);

  return (
    <div className="chat">
      <div className="chatInfo">
        <img src={commercialChat?.avatar} alt="" />
        <span>{commercialChat?.name}</span>

        <button className="menuIcon" onClick={handleOpenMenu}>
          <img
            src={
              location.pathname.includes("commercial")
                ? menuIcon
                : ChevronGauche
            }
            alt=""
          />
        </button>
      </div>
      <Messages />
      <Input />
    </div>
  );
};

export default Chat;
