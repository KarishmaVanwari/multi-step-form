import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
}));

export default function FormPersonalDetails(props) {
  const classes = useStyles();


  const {values, handleChange} = props;



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
            Enter Personal Details
          </Typography>
        </Toolbar>
      </AppBar>
      <br />
      <div style={{ textAlign: "center" }}>
        <form className={classes.root} noValidate autoComplete="off">
          <TextField
            id="first-name"
            label="Occupation"
            style={{ width: "16rem" }}
            defaultValue={values.occupation}
            onChange={props.handleChange("occupation")}
          />{" "}
          <br /> <br />
          <TextField
            id="last-name"
            label="City"
            style={{ width: "16rem" }}
            defaultValue={values.city}
            onChange={props.handleChange("city")}
          />{" "}
          <br /> <br />
          <TextField
            id="email"
            label="Bio"
            style={{ width: "16rem" }}
            defaultValue={values.bio}
            onChange={props.handleChange("bio")}
          />{" "}
          <br /> <br />
        </form>

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
          Continue
        </Button>
      </div>
    </div>
  );
}
