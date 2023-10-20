/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import "./App.css";
import AppRouter from "./routers/AppRouter";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { io } from "socket.io-client";
import useButtonContext from "./hooks/useButtonContext";
const server = import.meta.env.VITE_SERVER_PATH
function App() {
  const { setSocket } = useButtonContext();

  useEffect(() => {
    console.log(server)
    const socket = io(`${server}`);
    setSocket(socket);
  }, []);
  return (
    <>
      <AppRouter />
      <ToastContainer theme="dark" />
    </>
  );
}

export default App;
