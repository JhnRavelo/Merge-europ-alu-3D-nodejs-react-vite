
import { useEffect, useRef, useState } from "react";
import propTypes from "prop-types"
import useButtonContext from "../../../hooks/useButtonContext";

const Message = ({message}) => {
  const ref = useRef();
  const {dataPage} = useButtonContext()
  const [Now, setNow] = useState(new Date())
  const [dispalyDate, setDisplayDate] = useState("")

  useEffect(() => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
    handleDate()
  }, [message]);

  useEffect(()=>{
    setInterval(() => {
      setNow(new Date)
      
    }, 60*60*60*1000);
  },[])

  const handleDate = ()=>{
    const date = message?.date.split("-")
    const hour = message?.time.split(":")
    var intervalHour, interDay
    const YearNow = Now.getFullYear()
    const hourNow = Now.getHours()
    const monthNow = Now.getMonth() + 1
    const dayNow = Now.getDate()
    if(date[0] == YearNow && date[1] == monthNow && date[2] == dayNow){
      console.log(hourNow);
      console.log(hour[0]);
      intervalHour = hourNow - hour[0]
      if(intervalHour == 0){
        setDisplayDate("a moment ago")
      }else {
        setDisplayDate(`${intervalHour} hour ago`)
      }
    }
    
  }

  return (
    <>
      <div
    ref={ref}
      className={`message ${message?.send?.ID_user === dataPage?.userRead[0]?.ID_user && "owner"} `}
    >
      <div className="messageInfo">
        <img
          src={
            message?.send?.ID_user === dataPage?.userRead[0]?.ID_user
              ? message?.send?.avatar
              : message?.receive?.avatar
          }
          alt="sary"
        />
        <span>{dispalyDate}</span>
      </div>
      <div className="messageContent">
        <p>{message?.text}</p>
        {message?.img && <img src={message?.img} alt="sary" />}
      </div>
    </div>


      {/* <div className="message">
        <div className="messageInfo">
          <img src={userPhoto} alt="sary" /> */}
          {/* <span>vo zao</span> */}
        {/* </div>
        <div className="messageContent">
          <p>{"Holla !!!"}</p>
          <img src={userPhoto} alt="sary" />
        </div>
      </div>
      <div className="message owner">
        <div className="messageInfo">
          <img src={userPhoto} alt="sary" /> */}
          {/* <span>vo zao</span> */}
        {/* </div>
        <div className="messageContent"> */}
          {/* <p>{"Holla Cedy"}</p> */}
          {/* <img src={userPhoto} alt="sary" /> */}
        {/* </div>
      </div>
      <div className="message">
        <div className="messageInfo">
          <img src={userPhoto} alt="sary" /> */}
          {/* <span>vo zao</span> */}
        {/* </div>
        <div className="messageContent">
          <p>{"Holla !!!"}</p> */}
          {/* <img src={userPhoto} alt="sary" /> */}
        {/* </div>
      </div>
      <div className="message owner">
        <div className="messageInfo">
          <img src={userPhoto} alt="sary" /> */}
          {/* <span>vo zao</span> */}
        {/* </div>
        <div className="messageContent">
          <p>{"Holla !!!"}</p>
          <img src={userPhoto} alt="sary" />
        </div>
      </div> */}
    </>
  );
};

Message.propTypes = {
  message: propTypes.array
}

export default Message;

// import { useContext, useEffect, useRef } from "react";
// import { AuthContext } from "../context/AuthContext";
// import { ChatContext } from "../context/ChatContext";

// const Message = ({ message }) => {
//   const { currentUser } = useContext(AuthContext);
//   const { data } = useContext(ChatContext);

//   const ref = useRef();

//   useEffect(() => {
//     ref.current?.scrollIntoView({ behavior: "smooth" });
//   }, [message]);

//   return (
//     <div
//     ref={ref}
//       className={`message ${message.senderId === currentUser.uid && "owner"} `}
//     >
//       <div className="messageInfo">
//         <img
//           src={
//             message.senderId === currentUser.uid
//               ? currentUser.photoURL
//               : data.user.photoURL
//           }
//           alt="sary"
//         />
//         {/* <span>vo zao</span> */}
//       </div>
//       <div className="messageContent">
//         <p>{message.text}</p>
//         {message.img && <img src={message.img} alt="sary" />}
//       </div>
//     </div>
//   );
// };

// export default Message;
