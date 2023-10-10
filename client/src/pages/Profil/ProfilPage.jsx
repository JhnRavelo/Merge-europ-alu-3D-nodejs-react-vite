import "./ProfilPage.css";
import "./ProfilPage.scss";
import { useEffect, useState } from "react";
import UserProfileCard from "../../components/Profils/UserProfileCard/UserProfileCard";
import Cart from "../../components/Profils/Cart/Cart";
import useButtonContext from "../../hooks/useButtonContext";
import Chat from "../../components/Messanger/components/Chat";
import ChevronDroite from "../../components/Messanger/img/chevron-droit.png";
import userPhoto from "../../components/Messanger/img/avatar/homme.png";
import useAdminContext from "../../hooks/useAdminContext";

const Vide = () => {
  return <></>;
};

const ProfilPage = () => {
  const [chatOrCart, setChatOrCart] = useState("vide");
  const { dataPage, commercials } = useButtonContext();
  const handleSetCart = () => {
    setChatOrCart("cart");
  };
  const handleSetChat = () => {
    setChatOrCart("chat");
  };
  useEffect(()=>{
    console.log(commercials);
  })

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
                    <span>{"Commerciales"}</span>
                  </div>
                  <button className="x" onClick={handleOpenMenu}>
                    <img src={ChevronDroite} alt="" />
                  </button>
                </div>
                
                <div className="listeComm">
                  {commercials.length > 0 && commercials.map((item, index)=>(
                  <div className="chats" key={index}>
                    <div className="userChat">
                      <img src={item?.avatar} alt="" />
                      <div className="userChatInfo">
                        <span>{item?.name}</span>
                        <p>{"Holla senorita"}</p>
                      </div>
                    </div>
                  </div>
                  ))}

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
