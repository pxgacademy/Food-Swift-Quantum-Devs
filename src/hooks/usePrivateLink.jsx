import axios from "axios";
import useContextValue from "./useContextValue";
import { useEffect } from "react";

const instance = axios.create({
  baseURL: import.meta.env.VITE_API_LINK,
  withCredentials: true,
});

const usePrivateLink = () => {
  const { signOutUser } = useContextValue();

  useEffect(() => {
    instance.interceptors.response.use(
      (response) => {
        return response;
      },
      (error) => {
        const status = error.status;
        if (status === 401 || status === 403) signOutUser();

        return Promise.reject(error);
      }
    );
  }, []);

  return instance;
};

export default usePrivateLink;
