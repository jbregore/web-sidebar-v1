import React from "react";
import { makeStyles } from "@material-ui/core/styles";

//link
import { Link } from "react-router-dom";

//grid and paper
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";

//textfield
import TextField from "@material-ui/core/TextField";

//button
import Button from "@material-ui/core/Button";

import myImage from "../constants/images";

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
  },

  paper: {
    textAlign: "center",
    height: "100vh",
  },

  paperContainer: {
    backgroundImage: `url(${myImage.main_img})`,
  },

  textField: {
    width: "80%",
    marginBottom: 25,
  },

  main_title: {
    fontWeight: 400,
    paddingBottom: 20,
  },

  button_primary: {
    width: "80%",
    marginTop: 25,
    backgroundColor: "#1976d2",
    marginBottom: 10
  },

  link : {
    color: "#1976d2"
  },

  copyright: {
    position: "absolute",
    bottom: 10,
    width: 500,
    textAlign: "center",
    marginLeft: 30,
  },

});


export default function Signup() {
  const classes = useStyles();

  const [state, setState] = React.useState({
    checkedB: false,
  });

  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };

  return (
    <div className={classes.root}>
      <Grid container>
        <Grid item xs={12} sm={7}>
          <Paper
            className={[classes.paper, classes.paperContainer]}
          >
          </Paper>
        </Grid>
        <Grid item xs={12} sm={5}>
          <Paper className={classes.paper}>
            <div style={{ paddingTop: 100 }}>
              <img src={myImage.logo} width="120" height="90" />
              <h1 className={classes.main_title}>Sign Up</h1>
            </div>
            <TextField
              id="outlined-basic"
              label="Username or Email * "
              variant="outlined"
              className={classes.textField}
            />{" "}
            <br />
            <TextField
              id="outlined-password"
              label="Password * "
              type="password"
              variant="outlined"
              className={classes.textField}
            /><br />

            <TextField
              id="outlined-password"
              label="Confirm Password * "
              type="password"
              variant="outlined"
              className={classes.textField}
            /><br />
            
            <Button variant="contained" color="primary"
                className={classes.button_primary}
            >SIGN UP</Button> <br />
            
            <div style={{textAlign: "center"}}>
                <p><Link className={classes.link} to="/login">Back to Login</Link></p>
            </div> 

             <div className={classes.copyright}>
                <p>Copyright 2021 by Group 1</p>
            </div> 


          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}
