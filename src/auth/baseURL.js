import axios from "axios";

const LOCALSTORAGE_KEY = "token";

// Create a re-useable axios object, with our API as the baseURL
const base = axios.create({
  baseURL: "https://project-3-manga-backend-2d7dcb1090ee.herokuapp.com/",
});

// Interceptors are axios functionality, that allows you to intercept requests and responses
// Here we're setting the token in localstorage to the Authorization header
base.interceptors.request.use((config) => {
  const token = localStorage.getItem(LOCALSTORAGE_KEY);
  config.headers.Authorization = token;
  return config;
});

export default base;
