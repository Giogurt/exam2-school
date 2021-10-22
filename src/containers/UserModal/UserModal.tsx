import React, { Component } from "react";
import UserDetails from "../../components/UserDetails/UserDetails";
import User from "../../types/User";

interface UserProps {
  isDetailsVisible: boolean;
  closeUserDetails(event: any): void;
  user: User;
}

/**
 * User Modal Container
 * @extends {Component<Props>}
 */
class UserModal extends Component<UserProps, {}> {
  /**
   * Renders the container.
   * @return {string} - HTML markup for the container
   */
  render() {
    return (
      <UserDetails
        open={this.props.isDetailsVisible}
        handleClose={this.props.closeUserDetails}
        user={this.props.user}
      />
    );
  }
}

export default UserModal;
