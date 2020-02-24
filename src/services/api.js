import axios from "axios";

const api = axios.create({
  baseURL: "https://placement.really.education/"
});

export default api;
