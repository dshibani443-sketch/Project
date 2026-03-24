import axios from "axios";

const API = axios.create({
  baseURL: "https://smartspend-ai-68ou.onrender.com", // change according to backend
});

// attach token automatically
// API.interceptors.request.use((req) => {
//   const token = localStorage.getItem("token");
//   if (token) {
//     req.headers.Authorization = `Bearer ${token}`;
//   }
//   return req;
// });

export default API;