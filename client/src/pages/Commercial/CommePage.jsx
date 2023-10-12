import "./CommePage.scss";
import "../../components/Messanger/style.scss";
import Home from "../../components/Messanger/pages/Home";
import useButtonContext from "../../hooks/useButtonContext";
import { useEffect } from "react";
import useAxiosPrivate from "../../hooks/useAxiosPrivate";

const CommePage = () => {
  const {
    show,
    setDataPage,
    setCommercials,
    setMessages,
    sender,
    receiver,
    sendMessage,
    setLastMessage,
    commercialChat,
    socket,
    onMessage,
    setOnMessage,
    onAvatar,
    setOnAvatar,
  } = useButtonContext();
  const axiosPrivate = useAxiosPrivate();

  useEffect(() => {
    if (commercialChat?.ID_user && socket) {
      socket.emit("joinRoom", { room: commercialChat.ID_user });
    }
  }, [commercialChat, socket]);

  useEffect(() => {
    if (socket) {
      socket.on("receiveMessage", (data) => {
        setOnMessage(data);
      });
      socket.on("receiveAvatar", (data)=>{
        setOnAvatar(data)
      })
    }
  }, [socket]);

  useEffect(() => {
    fetchData();
  }, [show, sender, receiver, sendMessage, onMessage, onAvatar]);

  const fetchData = async () => {
    try {
      const page = await axiosPrivate.get("/traker");
      setDataPage(page.data);
      const lastmessage = await axiosPrivate.get("/message/getlast");
      setLastMessage(lastmessage.data);
      const user = await axiosPrivate.get("/message/getUsers");
      setCommercials(user.data);
      if (receiver) {
        const message = await axiosPrivate.post("/message/get", { receiver });
        setMessages(message.data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return <Home />;
};

export default CommePage;
