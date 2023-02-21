import axios from "axios";

const instance = axios.create({
  // baseURL: "https://35.154.86.59/api/admin",
  baseURL: `https://backend.brahmaand.space//`,
});

export default instance;
