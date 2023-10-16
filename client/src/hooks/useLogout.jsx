import { useNavigate } from "react-router-dom";
import useAxiosPrivate from "./useAxiosPrivate";
import useButtonContext from "./useButtonContext";
import useAuth from "./useAuth";

const prime = import.meta.env.VITE_PRIME.split(" ");

const useLogout = () => {
  const {
    setBody,
    setData,
    setDataPage,
    setSelectedProduct,
    setCommercialChat,
    socket,
    setMessages,
    setReceiver,
    setSender,
    setShow
  } = useButtonContext();
  const navigate = useNavigate()
  const {setAuth} = useAuth()

  const logout = async () => {
    try {
      const res = await useAxiosPrivate.get("/auth/logout");

      if (res.data == "SUCCESS") {
        const randomId = Math.floor(Math.random() * 999999);
        socket.emit("logoutUser", { id: randomId, room: prime[0] });
      }
    } catch (error) {
      console.log(error);
    }

    setBody({ name: "", email: "", phone: "" });
    setData([]);
    setDataPage({
      traker: [],
      userRead: [],
    });
    setSelectedProduct("");
    setCommercialChat({});
    setAuth({})
    setMessages([])
    setReceiver(null)
    setSender(null)
    setShow(false)
    navigate("/")
    
  };
  return logout;
};

export default useLogout;
