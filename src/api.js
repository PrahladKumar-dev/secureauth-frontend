import axios from "axios";

const API = axios.create({
  baseURL: "https://secureauth-backend-eczc.onrender.com/api",
  withCredentials: true,
});

export default API;
