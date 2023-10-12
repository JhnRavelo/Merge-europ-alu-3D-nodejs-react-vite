import { useEffect } from "react";
import useButtonContext from "../../../hooks/useButtonContext";
import Message from "./Message";
import { useState } from "react";

const Messages = () => {
  const { messages, onMessage } = useButtonContext();
  const [m, setM] = useState([]);

  useEffect(() => {
    if (messages) {
      console.log(messages);
      setM(messages);
    }
  }, [messages, onMessage]);

  return (
    <div className="messages">
      {m.length > 0 &&
        m.map((item, index) => <Message message={item} key={index} />)}
    </div>
  );
};

export default Messages;

// import React, { useContext, useEffect, useState } from "react";
// import Message from "./Message";
// import { ChatContext } from "../context/ChatContext";
// import { doc, onSnapshot } from "firebase/firestore";
// import { db } from "../firebase";

// const Messages = () => {
//   const [messages, setMessages] = useState([]);
//   const { data } = useContext(ChatContext);

//   useEffect(() => {
//     const unSub = onSnapshot(doc(db, "chats", data.chatId), (doc) => {
//       doc.exists() && setMessages(doc.data().messages);
//     });

//     return () => {
//       unSub();
//     };
//   }, [data.chatId]);

//   // console.log(messages);
//   return (
//     <div className="messages">
//       {messages.map((m) => (
//         <Message message={m} key={m.id} />
//       ))}
//     </div>
//   );
// };

// export default Messages;
