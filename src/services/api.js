import axios from "axios";

const baseURL = "https://ur.really.education/api/";

const api = axios.create({
  baseURL
});

export default api;
