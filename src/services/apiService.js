import axios from "axios";

const API = axios.create({ baseURL: "http://localhost:3011" });

// Add a token to requests when logged in
API.interceptors.request.use((req) => {
  const token = localStorage.getItem("token");
  if (token) {
    req.headers.Authorization = `Bearer ${token}`;
  }
  return req;
});

export const login = (formData) => API.post("/login", formData);
export const register = (formData) => API.post("/register", formData);
