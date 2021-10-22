import User from "../types/User";

/**
 * UserListHelper Class
 */
class UserListHelper {
  users: User[];

  /**
   * Class Constructor
   * @param users The array of users to be used
   */
  constructor(users: User[]) {
    this.users = users;
  }

  /**
   * Gets a user from the user array that matches the id
   * @param id The id to search a user
   * @returns The user that was found
   */
  getUser(id: number): User {
    const foundUsers = this.users.filter((us) => us.id === id);
    console.log(foundUsers);
    return foundUsers[0];
  }
}

export default UserListHelper;
