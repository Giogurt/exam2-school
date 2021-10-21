import axios from "axios";

const PostAPI = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com/",
  responseType: "json",
});

export default PostAPI;
