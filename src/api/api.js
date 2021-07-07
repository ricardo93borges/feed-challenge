import axios from "axios";

const api = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com",
  timeout: 20000,
  headers: { "Content-Type": "application/json" },
});

export default api;
