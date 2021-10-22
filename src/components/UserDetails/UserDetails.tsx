import "./UserDetails.css";
import { Box, Button, Grid, Modal, Paper, Typography } from "@material-ui/core";
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
  width: 700,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

/**
 * User Detail elements
 * @param props open status, a function to close the modal, the user
 * @returns UserDetails UI elements
 */
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
    <Modal
      className="detailsModal"
      open={props.open}
      onClose={props.handleClose}
    >
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
            <Typography className="text" variant="body1">
              {`Username: ${userName}`}
            </Typography>
          </Grid>
          <Grid item md={12}>
            <Typography className="text" variant="body1">
              {`Nombre: ${userRealName}`}
            </Typography>
          </Grid>
          <Grid item md={12}>
            <Typography className="text" variant="body1">
              {`Correo: ${userMail}`}
            </Typography>
          </Grid>
          <Grid item md={12}>
            <Typography className="text" variant="body1">
              {`Ciudad: ${userCity}`}
            </Typography>
          </Grid>
          <Grid item md={12}>
            <Typography className="text" variant="body1">
              {`Compania: ${userCompanyName}`}
            </Typography>
          </Grid>
        </Grid>
      </Box>
    </Modal>
  );
};

export default UserDetails;
