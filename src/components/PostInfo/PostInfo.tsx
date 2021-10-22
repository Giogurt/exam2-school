import "./PostInfo.css";
import { Avatar, Button, Divider, Grid, Typography } from "@material-ui/core";
import React from "react";
import Post from "../../types/Post";
import User from "../../types/User";

interface PostInfoProps {
  post: Post;
  user: User;
  openDetails(event: any, authorId: number): void;
}

const PostInfo: React.FC<PostInfoProps> = (props) => {
  let postTitle = "";
  if (props.post !== undefined && props.post.title !== undefined) {
    postTitle = props.post.title;
  }

  let postBody = "";
  if (props.post !== undefined && props.post.body !== undefined) {
    postBody = props.post.body;
  }

  let authorPhoto = "";
  if (props.post !== undefined && props.post.userId !== undefined) {
    authorPhoto = `https://picsum.photos/100?${props.post.userId}`;
  }

  let authorUsername = "";
  if (props.user !== undefined && props.user.username !== undefined) {
    authorUsername = props.user.username;
  }

  return (
    <Grid container className="postGrid" spacing={2}>
      <Grid className="avatarGrid" item md={1} container>
        <Grid item md={12}>
          <Avatar className="authorAvatar" alt="avatar" src={authorPhoto} />
        </Grid>
      </Grid>
      <Grid item md={9} container spacing={1}>
        <Grid item md={12}>
          <Typography className="postTitle" variant="h5">
            {postTitle}
          </Typography>
        </Grid>
        <Grid item md={12}>
          <Typography className="postBody" variant="body1">
            {postBody}
          </Typography>
        </Grid>
        <Grid item md={12}>
          <Button
            variant="text"
            onClick={(e) => props.openDetails(e, props.post.userId)}
          >
            <Typography className="postAuthor">{authorUsername}</Typography>
          </Button>
        </Grid>
      </Grid>
      <Grid item md={12}>
        <Divider />
      </Grid>
    </Grid>
  );
};

export default PostInfo;
