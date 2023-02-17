import axios from "axios";

const instance = axios.create({
  // baseURL: "https://35.154.86.59/api/admin",
  baseURL: `http://13.233.99.196:9000`,
});

export default instance;
