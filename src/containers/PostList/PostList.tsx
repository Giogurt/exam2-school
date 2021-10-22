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
  users: User[];
  userHelper: UserListHelper;
}

class PostList extends Component<ListProps, ListState> {
  state = {
    posts: [] as Post[],
  };

  render() {
    let postList: any[] = [];
    this.state.posts.forEach((post) => {
      const user = this.props.userHelper.getUser(post.userId)
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

  componentDidMount() {
    PostService.getAllPosts().then((response) => {
      const posts = response.data as Post[];
      console.log(posts);
      this.setState({ posts });
    });
  }
}

export default PostList;
