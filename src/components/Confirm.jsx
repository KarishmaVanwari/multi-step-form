import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { List, ListItem, ListItemText } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
}));

export default function FormUserDetails(props) {
  const classes = useStyles();

  const {
    values: { firstName, lastName, city, occupation, email, bio },
  } = props;
  // console.log(props)

  function nextForm(e) {
    e.preventDefault();
    props.nextStep();
    console.log("ok");
  }

  function prevForm(e) {
    e.preventDefault();
    props.prevStep();
  }

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar variant="dense">
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" color="inherit">
            Confirm User Data
          </Typography>
        </Toolbar>
      </AppBar>
      <br />
      <div style={{ textAlign: "center" }}>
        <List>
          <ListItem style={{textAlign: "center"}}>
            <ListItemText primary="First Name" secondary={firstName} />
          </ListItem>
          <ListItem style={{textAlign: "center"}}>
            <ListItemText primary="Last Name" secondary={lastName} />
          </ListItem>
          <ListItem style={{textAlign: "center"}}>
            <ListItemText primary="Email" secondary={email} />
          </ListItem>
          <ListItem style={{textAlign: "center"}}>
            <ListItemText primary="Occupation" secondary={occupation} />
          </ListItem>
          <ListItem style={{textAlign: "center"}}>
            <ListItemText primary="City" secondary={city} />
          </ListItem>
          <ListItem style={{textAlign: "center"}}>
            <ListItemText primary="Bio" secondary={bio} />
          </ListItem>
        </List>

        <Button
          variant="contained"
          color="primary"
          onClick={prevForm}
          style={{ marginLeft: 5, marginRight: 10 }}
        >
          Back
        </Button>
        <Button
          variant="contained"
          color="primary"
          onClick={nextForm}
          style={{ marginLeft: 5, marginRight: 10 }}
        >
          Confirm
        </Button>
      </div>
    </div>
  );
}
