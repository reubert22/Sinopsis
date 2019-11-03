import axios from "axios";

const instance = axios.create({
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json"
  }
});

export default instance;
