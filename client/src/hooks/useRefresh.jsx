import axios from "axios";
import useAuth from "./useAuth";

const useRefresh = () => {
  const {setAuth} = useAuth()
  const refresh = async () => {
    const response = await axios.get("/api/refresh", { withCredentials: true });
    console.log(response.data);

    setAuth(response.data)
    return response.data
  };
  return refresh;
};

export default useRefresh;
