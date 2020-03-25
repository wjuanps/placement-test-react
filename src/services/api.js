import axios from "axios";

const baseURL = `${document.location.origin}/api/`;

const api = axios.create({
  baseURL
});

export default api;
