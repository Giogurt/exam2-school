import React, { Fragment } from "react";
import "./App.css";
import CssBaseline from "@material-ui/core/CssBaseline";
import PostList from "./containers/PostList/PostList";
import User from "./types/User";
import UserModal from "./containers/UserModal/UserModal";
import PostService from "./services/PostService";
import UserListHelper from "./tools/UserListHelper";

interface AppState {
  detailsOpen: boolean;
  users: User[];
  user: User;
  userHelper: UserListHelper;
}
class App extends React.Component<{}, AppState> {
  state = {
    detailsOpen: false,
    users: [] as User[],
    user: {} as User,
    userHelper: {} as UserListHelper,
  };

  render() {
    return (
      <Fragment>
        <CssBaseline />
        <PostList openDetails={this.handleOpenDetails} userHelper={this.state.userHelper} users={this.state.users} />
        <UserModal
          isDetailsVisible={this.state.detailsOpen}
          closeUserDetails={this.handleCloseDetails}
          user={this.state.user}
        />
      </Fragment>
    );
  }

  componentDidMount = () => {
    PostService.getAllUsers().then((response) => {
      const users = response.data as User[];
      console.log(users);
      const userHelper = new UserListHelper(users);
      this.setState({ users, userHelper });
    });
  };

  handleCloseDetails = (event: any) => {
    this.setState({ detailsOpen: false });
  };

  handleOpenDetails = (event: any, authorId: number) => {
    PostService.getUser(authorId).then((response) => {
      const user = response.data as User;
      console.log(user);
      this.setState({ detailsOpen: true, user });
    });
  };
}

export default App;
