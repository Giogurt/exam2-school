import "./UserDetails.css";
import { Box, Button, Grid, Modal, Paper } from "@material-ui/core";
import React from "react";
import User from "../../types/User";

interface UserDetailsProps {
  open: boolean;
  handleClose(event: any): void;
  user: User;
}

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 900,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};
const UserDetails: React.FC<UserDetailsProps> = (props) => {
  let userName = "";
  if (props.user !== undefined && props.user.username !== undefined) {
    userName = props.user.username;
  }

  let userRealName = "";
  if (props.user !== undefined && props.user.name !== undefined) {
    userRealName = props.user.name;
  }

  let userMail = "";
  if (props.user !== undefined && props.user.email !== undefined) {
    userMail = props.user.email;
  }

  let userCity = "";
  if (
    props.user !== undefined &&
    props.user.address !== undefined &&
    props.user.address.city !== undefined
  ) {
    userCity = props.user.address.city;
  }

  let userCompanyName = "";
  if (
    props.user !== undefined &&
    props.user.company !== undefined &&
    props.user.company.name !== undefined
  ) {
    userCompanyName = props.user.company.name;
  }

  let authorPhoto = "";
  if (props.user !== undefined && props.user.id !== undefined) {
    authorPhoto = `https://picsum.photos/100?${props.user.id}`;
  }

  return (
    <Modal open={props.open} onClose={props.handleClose}>
      <Box sx={style}>
        <Grid container className="userGrid" spacing={2}>
          <Grid item md={12} container justifyContent="flex-end">
            <Grid item md={2}>
              <Button onClick={props.handleClose}>X</Button>
            </Grid>
          </Grid>
          <Grid item md={12} container justifyContent="center">
            <Paper className="largeImage">
              <img className="largeImage" src={authorPhoto} alt={userName} />
            </Paper>
          </Grid>
          <Grid item md={12}>
            {`Username: ${userName}`}
          </Grid>
          <Grid item md={12}>
            {`Nombre: ${userRealName}`}
          </Grid>
          <Grid item md={12}>
            {`Correo: ${userMail}`}
          </Grid>
          <Grid item md={12}>
            {`Ciudad: ${userCity}`}
          </Grid>
          <Grid item md={12}>
            {`Compania: ${userCompanyName}`}
          </Grid>
        </Grid>
      </Box>
    </Modal>
  );
};

export default UserDetails;
