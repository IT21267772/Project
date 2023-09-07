import axios from "axios";
import Cookies from "js-cookie";

const BASE_URL = "http://localhost:4000/api/";


// const user = JSON.parse(localStorage.getItem("user"));
// const token = user && user.token;

// const token = Cookies.get('token');

export const publicRequest = axios.create({
  baseURL: BASE_URL,
});

export const userRequest = axios.create({
  baseURL: BASE_URL,
  // headers: { Authorization: `Bearer ${token}` }
});


userRequest.interceptors.request.use(
  (config) => {
    const token = Cookies.get("token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);