import { useEffect } from "react";
import { privateAxios } from "../api/axios";
import useRefresh from "./useRefresh";

const useAxiosPrivate = () => {
  const refresh = useRefresh();

  useEffect(() => {
const requestIntercept = privateAxios.interceptors.request.use(
    config => {
        if(!config.headers['Authorization']){
            config.headers['Authorization'] = ``
        }
    }
)

    const responseIntercept = privateAxios.interceptors.response.use(
      (response) => response,
      async (err) => {
        const prevRequest = err?.config;
        if(err?.response?.status === 403 && !prevRequest?.sent){
            prevRequest.sent = true
            const newAccessToken = await refresh()
            prevRequest.headers['Authorization'] = `Bearer ${newAccessToken}`
            return privateAxios(prevRequest)
        }
        return Promise.reject(err)
        
      }
    );

    return ()=> {
        privateAxios.interceptors.response.eject(responseIntercept)
    }
  },[refresh]);
};
