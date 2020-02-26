import axios from "axios";

const baseURL = "http://localhost:8000/api/";

const api = axios.create({
  baseURL,
  crossdomain: true,
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
  }
});

export default api;
