import axios from "axios";

const instance = axios.create({
  // baseURL: "https://35.154.86.59/api/admin",
  baseURL: `https://15.207.117.200:9000`,
});

export default instance;
