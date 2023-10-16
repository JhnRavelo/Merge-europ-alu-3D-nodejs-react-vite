import { useEffect, useState } from "react";
import useButtonContext from "../../hooks/useButtonContext";
import handleLastMessage from "../../lib/utils/handleLastMessage";
import handleClassNewMessage from "../../lib/utils/handleClassNewMessage";

const Chats = () => {
  const { commercials, lastMessage, setCommercialChat, onMessage, notif } =
    useButtonContext();
  const [lastMessageDisplay, setLastMessageDisplay] = useState([]);
  const [classNewMessage, setClassNewMessage] = useState([])

  useEffect(() => {
    handleLastMessage(commercials, lastMessage, setLastMessageDisplay);
    handleClassNewMessage(setClassNewMessage, commercials, notif)
  }, [lastMessage, commercials, onMessage, notif]);

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
                  <p className={classNewMessage[index]}>
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

