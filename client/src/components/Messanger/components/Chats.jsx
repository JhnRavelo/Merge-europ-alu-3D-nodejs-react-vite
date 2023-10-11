import useButtonContext from "../../../hooks/useButtonContext";
// import userPhoto from "../img/avatar/homme.png";

const Chats = () => {
  const { commercials, lastMessage, setCommercialChat } = useButtonContext();

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
                <p>{handleLastMessage(item)}</p>
              </div>
            </div>
          </div>
        ))}
    </>
  );
};

export default Chats;

// import { doc, onSnapshot } from "firebase/firestore";
// import { useContext, useEffect, useState } from "react";
// import { AuthContext } from "../context/AuthContext";
// import { db } from "../firebase";
// import { ChatContext } from "../context/ChatContext";

// const Chats = () => {
//   const [chats, setChats] = useState([]);

//   const { currentUser } = useContext(AuthContext);
//   const { dispatch } = useContext(ChatContext);

//   useEffect(() => {
//     const getChats = () => {
//       const unsub = onSnapshot(doc(db, "userChats", currentUser.uid), (doc) => {
//         setChats(doc.data());
//       });

//       return () => {
//         unsub();
//       };
//     };

//     currentUser.uid && getChats();

//   }, [currentUser.uid]);

//   // console.log(Object.entries(chats));

//   const handleSelect = (u) => {
//     dispatch({type: "CHANGE_USER", payload: u })
//   }

//   return (
//     <div className="chats">
//       {Object.entries(chats)?.sort((a,b)=>b[1].data - a[1].date).map((chat) => (
//         <div className="userChat" key={chat[0]} onClick={()=>handleSelect(chat[1].userInfo)}>
//           <img src={chat[1].userInfo.photoURL} alt="" />
//           <div className="userChatInfo">
//             <span>{chat[1].userInfo.displayName}</span>
//             <p>{chat[1].userInfo.lastMessage?.text}</p>
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default Chats;
