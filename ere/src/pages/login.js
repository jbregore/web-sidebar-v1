import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { useHistory } from "react-router-dom";

//link
import { Link } from "react-router-dom";

//grid and paper
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";

//textfield
import TextField from "@material-ui/core/TextField";

//checkbox
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";

//button
import Button from "@material-ui/core/Button";

//images
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

  checkbox: {
    width: "80%",
    marginTop: -20,
  },

  button_primary: {
    width: "80%",
    marginTop: 25,
    backgroundColor: "#1976d2",
  },

  signup_link : {
    marginTop: 10,
    cursor: "pointer"
  },

  link : {
    marginTop: 10,
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


const styles = {
  paperContainer: {
    backgroundImage: `url(${myImage.main_img})`,
    textAlign: "center",
    height: "100vh",
  },
}

export default function Login() {
  const classes = useStyles();

  const [state, setState] = React.useState({
    checkedB: false,
  });

  const handleChangeCheck = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };

  const history = useHistory();
  const [payload, setPayload] = React.useState({
    username: "",
    password: "",
  });

  const login = (e) => {
    e.preventDefault();
    if (payload.username === "admin" && payload.password === "admin") {
      history.push("/home");
    } else {
      alert("Wrong");
    }
  };

  const handleChange  = (event) =>{
    const {name, value} = event.target;
    setPayload({ ...payload, [name]: value });
  }

  console.log(payload);
  return (
    <div className={classes.root}>
      <Grid container>
        <Grid item xs={12} sm={7}>
          <Paper
            style={styles.paperContainer}
          ></Paper>
        </Grid>
        <Grid item xs={12} sm={5}>
          <Paper className={classes.paper}>
            <div style={{ paddingTop: 100 }}>
              <img src={myImage.logo} width="120" height="90" />
              <h1 className={classes.main_title}>Login</h1>
            </div>
            <TextField
              id="outlined-basic"
              label="Username or Email * "
              variant="outlined"
              name="username"
              onChange={handleChange}
              value={payload.username}
              className={classes.textField}
            />{" "}
            <br />
            <TextField
              id="outlined-password"
              label="Password * "
              name="password"
              onChange={handleChange}
              value={payload.password}
              type="password"
              variant="outlined"
              className={classes.textField}
            />
            <br />
            <FormControlLabel
              className={classes.checkbox}
              control={
                <Checkbox
                  checked={state.checkedB}
                  onChange={handleChangeCheck}
                  name="checkedB"
                  color="primary"
                />
              }
              label="Remember me"
            />
            <br />
            <Button
              variant="contained"
              color="primary"
              className={classes.button_primary}
              onClick={login}
            >
              LOG IN
            </Button>{" "}
            <br />
            <div style={{ textAlign: "center" }}>
              <p className={classes.link}>Forgot password ? </p>
              <p className={classes.signup_link}>
                <Link className={classes.link} to="/signup">
                  Didn't have an account?. Sign Up{" "}
                </Link>
              </p>
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
