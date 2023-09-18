import axios from "axios";
import { useState } from "react";

const useRefresh = () => {
  const [token, setToken] = useState();
  const refresh = async () => {
    const response = await axios.get("/api/refresh", { withCredentials: true });
    console.log(response.data);

    setToken(response.data);

    return token
  };
  return refresh;
};

export default useRefresh;
