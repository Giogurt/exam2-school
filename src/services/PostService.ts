import PostAPI from "./PostAPI";

class PostService {
  getAllPosts() {
    return PostAPI.get("/posts");
  }

  getAllUsers() {
    return PostAPI.get("/users/");
  } 

  getUser(id: number) {
    return PostAPI.get(`/users/${id}`);
  } 
}

export default new PostService();
