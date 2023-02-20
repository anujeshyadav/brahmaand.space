import axios from "axios";

const instance = axios.create({
  // baseURL: "https://35.154.86.59/api/admin",
  baseURL: `http://65.1.135.77:9000//`,
});

export default instance;
