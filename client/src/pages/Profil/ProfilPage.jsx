import "./ProfilPage.css";
import "./ProfilPage.scss";
import { useState } from "react";
import UserProfileCard from "../../components/Profils/UserProfileCard/UserProfileCard";
import Cart from "../../components/Profils/Cart/Cart";
import useButtonContext from "../../hooks/useButtonContext";
import Chat from "../../components/Messanger/components/Chat";
import ChevronDroite from "../../components/Messanger/img/chevron-droit.png";
import userPhoto from "../../components/Messanger/img/avatar/homme.png";

const Vide = () => {
  return <></>;
};

const ProfilPage = () => {
  const [chatOrCart, setChatOrCart] = useState("vide");
  const { dataPage } = useButtonContext();

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

  return (
    <>
      <div className="profile__page">
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
                    {/* <img src={userPhoto} alt="photos" /> */}
                    <span>{"Commerciales"}</span>
                  </div>
                  <button className="x" onClick={handleOpenMenu}>
                    <img src={ChevronDroite} alt="" />
                  </button>
                </div>
                <div className="listeComm">
                  <div className="chats">
                    <div className="userChat">
                      <img src={userPhoto} alt="" />
                      <div className="userChatInfo">
                        <span>{"Hardy"}</span>
                        <p>{"Holla senorita"}</p>
                      </div>
                    </div>
                  </div>
                  <div className="chats">
                    <div className="userChat">
                      <img src={userPhoto} alt="" />
                      <div className="userChatInfo">
                        <span>{"Hardy"}</span>
                        <p>{"Holla senorita"}</p>
                      </div>
                    </div>
                  </div>
                  <div className="chats">
                    <div className="userChat">
                      <img src={userPhoto} alt="" />
                      <div className="userChatInfo">
                        <span>{"Hardy"}</span>
                        <p>{"Holla senorita"}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <Vide />
          )}
        </div>
      </div>
    </>
  );
};

export default ProfilPage;
