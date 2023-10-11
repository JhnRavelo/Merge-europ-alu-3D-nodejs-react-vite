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
  } = useButtonContext();
  const axiosPrivate = useAxiosPrivate();

  useEffect(() => {
    fetchData();
  }, [show, sender, receiver, sendMessage]);

  const fetchData = async () => {
    try {
      const page = await axiosPrivate.get("/traker");
      setDataPage(page.data);
      const lastmessage = await axiosPrivate.get("/message/getlast");
      setLastMessage(lastmessage.data);
      const user = await axiosPrivate.get("/message/getUsers")
      console.log(page.data);
      setCommercials(user.data)
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
