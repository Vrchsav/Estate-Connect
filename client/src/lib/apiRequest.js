import axios from "axios";

const apiRequest = axios.create({
  baseURL: "https://estate-connect-api.onrender.com/api",
  withCredentials: true,
});

export default apiRequest;
