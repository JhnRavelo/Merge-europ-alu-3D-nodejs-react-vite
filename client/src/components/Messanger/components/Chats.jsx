import { useEffect, useState } from "react";
import useButtonContext from "../../../hooks/useButtonContext";
import handleLastMessage from "../../../lib/utils/handleLastMessage";

const Chats = () => {
  const { commercials, lastMessage, setCommercialChat, onMessage } = useButtonContext();
  const [lastMessageDisplay, setLastMessageDisplay] = useState([]);

  useEffect(() => {
    handleLastMessage(commercials, lastMessage, setLastMessageDisplay);
  }, [lastMessage, commercials, onMessage]);

  return (
    <>
      {commercials.length > 0 &&
        commercials.map((item, index) => (
          <div
            className="chats"
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
                  {lastMessageDisplay?.length > 0 && lastMessageDisplay[index]}
                </p>
              </div>
            </div>
          </div>
        ))}
    </>
  );
};

export default Chats;

