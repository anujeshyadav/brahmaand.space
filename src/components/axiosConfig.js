import axios from "axios";

const instance = axios.create({
  // baseURL: "http://35.154.86.59/api/admin",
  baseURL: `http://3.7.173.138:9000`,
});

export default instance;
