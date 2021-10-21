import PostAPI from "./PostAPI";

class PostService {
  getAllPosts() {
    return PostAPI.get("/posts");
  }

  getUser(id: number) {
    return PostAPI.get(`/users/${id}`);
  } 
}

export default new PostService();
