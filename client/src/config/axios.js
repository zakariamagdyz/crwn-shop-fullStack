import axios from "axios";

const baseURL =
  process.env.NODE_ENV === "production"
    ? "url"
    : "http://localhost:5000/crwn-shop/v1";

const axiosApp = axios.create({
  baseURL,
  withCredentials: true,
  headers: {
    "Content-type": "application/json",
  },
});

export default axiosApp;
