import PostAPI from "./PostAPI";

/**
 * PostService Class
 */
class PostService {
  /**
   * gets all the post in the database
   * @returns An array of all the posts
   */
  getAllPosts() {
    return PostAPI.get("/posts");
  }

  /**
   * Gets all the users in the database
   * @returns An array of all the users
   */
  getAllUsers() {
    return PostAPI.get("/users/");
  } 

  /**
   * Gets a single user that matches the id given
   * @param id The id used to search a user
   * @returns The user that matched the id given
   */
  getUser(id: number) {
    return PostAPI.get(`/users/${id}`);
  } 
}

export default new PostService();
