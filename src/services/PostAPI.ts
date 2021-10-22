import axios from "axios";

/**
 * The conection to the backend
 */
const PostAPI = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com/",
  responseType: "json",
});

export default PostAPI;
