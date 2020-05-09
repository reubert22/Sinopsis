import axios from "axios";

const instance = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json"
  }
});

export default instance;
