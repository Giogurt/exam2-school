import React, { Component } from "react";
import PostInfo from "../../components/PostInfo/PostInfo";
import PostService from "../../services/PostService";
import Post from "../../types/Post";

interface ListState {
  posts: Post[];
}

class PostList extends Component<{}, ListState> {
  state = {
    posts: [] as Post[],
  };

  render() {
    return <PostInfo />;
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
