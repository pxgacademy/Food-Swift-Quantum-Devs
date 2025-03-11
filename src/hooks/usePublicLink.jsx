import axios from "axios";

const instance = axios.create({
  baseURL: import.meta.env.VITE_API_LINK,
});

const usePublicLink = () => {
  return instance;
};

export default usePublicLink;
 