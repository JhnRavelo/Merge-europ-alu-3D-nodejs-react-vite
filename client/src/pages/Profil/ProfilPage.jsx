import "./ProfilPage.css";
import "./ProfilPage.scss";
import { useState } from "react";
import UserProfileCard from "../../components/Profils/UserProfileCard/UserProfileCard";
import Cart from "../../components/Profils/Cart/Cart";
import useButtonContext from "../../hooks/useButtonContext";
import Chat from "../../components/Messanger/components/Chat";
import ChevronDroite from "../../components/Messanger/img/chevron-droit.png";
import Pub from "../../components/Profils/Pub/Pub";

const ProfilPage = () => {
  const [chatOrCart, setChatOrCart] = useState("vide");
  const { dataPage, commercials, setCommercialChat, lastMessage } =
    useButtonContext();

  const handleSetCart = () => {
    setChatOrCart("cart");
  };
  const handleSetChat = () => {
    setChatOrCart("chat");
  };

  const handleOpenMenu = () => {
    const sidebar = document.querySelector(".sidebar");
    sidebar.classList.toggle("visible");
  };

  const handleLastMessage = (item) => {
    const userLastMessage = lastMessage.find(
      (m) => item.ID_user == m.receiver || item.ID_user == m.sender
    );
    if (userLastMessage?.text) {
      return userLastMessage?.text;
    }
  };

  return (
    <>
      <div className="profile__page" style={{ animation: "tonga .6s ease" }}>
        <div className="profile__box">
          <UserProfileCard
            data={dataPage}
            handleSetCart={handleSetCart}
            handleSetChat={handleSetChat}
          />
        </div>
        <div className="card__box">
          {chatOrCart === "cart" ? (
            <Cart data={dataPage} />
          ) : chatOrCart === "chat" ? (
            <div className="chatUser">
              <Chat />
              <div className="sidebar">
                <div className="navbar">
                  <div className="user">
                    <span>{"Commerciales"}</span>
                  </div>
                  <button className="x" onClick={handleOpenMenu}>
                    <img src={ChevronDroite} alt="" />
                  </button>
                </div>

                <div className="listeComm">
                  {commercials.length > 0 &&
                    commercials.map((item, index) => (
                      <div
                        className="chats"
                        key={index}
                        onClick={() => {
                          setCommercialChat(item);
                          handleOpenMenu();
                        }}
                      >
                        <div className="userChat">
                          <img src={item?.avatar} alt="" />
                          <div className="userChatInfo">
                            <span>{item?.name}</span>
                            <p>{handleLastMessage(item)}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                </div>
              </div>
            </div>
          ) : (
            <Pub />
          )}
        </div>
      </div>
    </>
  );
};

export default ProfilPage;
