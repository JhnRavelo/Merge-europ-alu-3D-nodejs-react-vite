import { useEffect, useState } from "react";
import useButtonContext from "../../hooks/useButtonContext";
import handleLastMessage from "../../lib/utils/handleLastMessage";

const Chats = () => {
  const { commercials, lastMessage, setCommercialChat, onMessage } =
    useButtonContext();
  const [lastMessageDisplay, setLastMessageDisplay] = useState([]);

  useEffect(() => {
    handleLastMessage(commercials, lastMessage, setLastMessageDisplay);
  }, [lastMessage, commercials, onMessage]);

  return (
    <>
      <div className="chats">
        {commercials.length > 0 &&
          commercials.map((item, index) => (
            <div
              key={index}
              onClick={() => {
                setCommercialChat(item);
              }}
            >
              <div className="userChat">
                <img src={item?.avatar} alt="" />
                <div className="userChatInfo">
                  <span>{item?.name}</span>
                  <p>
                    {lastMessageDisplay?.length > 0 &&
                      lastMessageDisplay[index]}
                  </p>
                </div>
                <span className="notif newMessage">1</span>
              </div>
            </div>
          ))}
      </div>
     
    </>
  );
};

export default Chats;

