import React, { Component } from "react";
import PostInfo from "../../components/PostInfo/PostInfo";
import PostService from "../../services/PostService";
import UserListHelper from "../../tools/UserListHelper";
import Post from "../../types/Post";
import User from "../../types/User";

interface ListState {
  posts: Post[];
}

interface ListProps {
  openDetails(event: any, authorId: number): void;
  userHelper: UserListHelper;
}

/**
 * Post List Container
 * @extends {Component<Props, State>}
 */
class PostList extends Component<ListProps, ListState> {
  state = {
    posts: [] as Post[],
  };

  /**
   * Renders the container.
   * @return {string} - HTML markup for the container
   */
  render() {
    let postList: any[] = [];
    this.state.posts.forEach((post) => {
      let user= {} as User;
      if (this.props.userHelper !== undefined && this.props.userHelper.getUser !== undefined) {
        user = this.props.userHelper.getUser(post.userId)
      }
      postList.push(
        <PostInfo
          post={post}
          user={user}
          openDetails={this.props.openDetails}
        />
      );
    });
    return postList;
  }

  /**
   * The logic that runs when the container is mounted
   */
  componentDidMount() {
    PostService.getAllPosts().then((response) => {
      const posts = response.data as Post[];
      console.log(posts);
      this.setState({ posts });
    });
  }
}

export default PostList;
