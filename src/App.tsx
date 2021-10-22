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

/**
 * The main component of the app.
 */
class App extends React.Component<{}, AppState> {
  state = {
    detailsOpen: false,
    users: [] as User[],
    user: {} as User,
    userHelper: {} as UserListHelper,
  };

  /**
   * Renders the App elements
   * @returns The app UI elements
   */
  render() {
    return (
      <Fragment>
        <CssBaseline />
        <PostList
          openDetails={this.handleOpenDetails}
          userHelper={this.state.userHelper}
        />
        <UserModal
          isDetailsVisible={this.state.detailsOpen}
          closeUserDetails={this.handleCloseDetails}
          user={this.state.user}
        />
      </Fragment>
    );
  }

  /**
   * The logic that runs when the container is mounted
   */
  componentDidMount = () => {
    PostService.getAllUsers().then((response) => {
      const users = response.data as User[];
      console.log(users);
      const userHelper = new UserListHelper(users);
      this.setState({ users, userHelper });
    });
  };

  /**
   * Logic to close the details modal
   * @param event information of the event that triggered the function
   */
  handleCloseDetails = (event: any) => {
    this.setState({ detailsOpen: false });
  };

  /**
   * Logic to open the Details modal
   * @param event information of the event that triggered the function
   * @param authorId id of the user that is going to be used in the modal
   */
  handleOpenDetails = (event: any, authorId: number) => {
    PostService.getUser(authorId).then((response) => {
      const user = response.data as User;
      console.log(user);
      this.setState({ detailsOpen: true, user });
    });
  };
}

export default App;
