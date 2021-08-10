// import React, { Component } from "react";
// // import moduleName from '@material-ui/core';
// import {
//   ThemeProvider,
//   unstable_createMuiStrictModeTheme,
// } from "@material-ui/core/styles";
// import Button from "@material-ui/core/Button";
// import AppBar from "@material-ui/core/AppBar";
// import TextField from "@material-ui/core/TextField";
// import { makeStyles } from '@material-ui/core/styles';
// import Toolbar from '@material-ui/core/Toolbar';
// import Typography from '@material-ui/core/Typography';
// import IconButton from '@material-ui/core/IconButton';
// // import MenuIcon from '@material-ui/icons/Menu';

// const theme = unstable_createMuiStrictModeTheme();
// const useStyles = makeStyles((theme) => ({
//     root: {
//       flexGrow: 1,
//     },
//     menuButton: {
//       marginRight: theme.spacing(2),
//     },
//   }));

//   const classes = useStyles();

// class FormUserDetails extends Component {
//   continue = (e) => {
//     e.preventDefault();
//     this.props.nextStep();
//   };

//   // state = {  }
//   render() {
//     const { values } = this.props;

//     return (
//       <ThemeProvider theme={theme}>
//         <React.Fragment>
//         <AppBar position="static">
//         <Toolbar variant="dense">
//           <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
//             {/* <MenuIcon /> */}
//           </IconButton>
//           <Typography variant="h6" color="inherit">
//             Photos
//           </Typography>
//         </Toolbar>
//       </AppBar>
//         </React.Fragment>
//       </ThemeProvider>
//     );
//   }
// }

// export default FormUserDetails;

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

export default function FormUserDetails(props) {
  const classes = useStyles();

  const {values, handleChange} = props;


  function nextForm(e) {
    e.preventDefault();
    props.nextStep();
    console.log("ok");
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
            Enter User Details
          </Typography>
        </Toolbar>
      </AppBar>
      <br />
      <div style={{ textAlign: "center" }}>
        <form className={classes.root} noValidate autoComplete="off">
          <TextField
            id="first-name"
            label="First Name"
            style={{ width: "16rem" }}
            defaultValue={values.firstName}                            //**************************************** */
            onChange={handleChange("firstName")}
          />
          <br /> <br />
          <TextField
            id="last-name"
            label="Last Name"
            defaultValue={values.lastName}                              //**************************************** */
            style={{ width: "16rem" }}
            onChange={handleChange("lastName")}
          />
          <br /> <br />
          <TextField
            id="email"
            label="Email"
            style={{ width: "16rem" }}
            defaultValue={values.email}                                  //**************************************** */
            onChange={handleChange("email")}
          />
          <br /> <br />
        </form>

        <Button variant="contained" color="primary" onClick={nextForm}>
          Continue
        </Button>
      </div>
    </div>
  );
}
