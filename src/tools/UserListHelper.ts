import User from "../types/User";

class UserListHelper {
  users: User[];

  constructor(users: User[]) {
    this.users = users;
  }

  getUser(id: number): User {
    const foundUsers = this.users.filter((us) => us.id === id);
    console.log(foundUsers);
    return foundUsers[0];
  }
}

export default UserListHelper;
