import React, { useState } from "react";

import { makeStyles, Paper, Grid, Button, TextField } from "@material-ui/core";
import firebase from "../../firebase";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    width: "100%",
  },
  content: {
    padding: theme.spacing(4),
    width: 400,
  },
}));

const db = firebase.firestore();

const PetModal = ({ setOpen }) => {
  const classes = useStyles();
  const [state, setState] = useState({
    type: "",
    breed: "",
    name: "",
  });

  const handleClose = () => {
      setOpen(false);
  }

  const handleChange = (prop) => (e) => {
    setState({ ...state, [prop]: e.target.value });
  };

  const addPet = (e) => {
    e.preventDefault();
    db.collection("pets")
      .add(state)
      .then((doc) => {
        //success
      })
      .catch((err) => {
        //error
      });
    setOpen(false);
  };

  return (
    <div className={classes.root}>
      <Paper className={classes.content}>
        <Grid container direction="column" spacing={2}>
          <Grid item container direction="column" spacing={1}>
            <Grid item>
              <TextField
                value={state.type}
                onChange={handleChange("type")}
                variant="outlined"
                placeholder="Type"
                label="Type"
                fullWidth
              />
            </Grid>

            <Grid item>
              <TextField
                value={state.breed}
                onChange={handleChange("breed")}
                variant="outlined"
                placeholder="Breed"
                label="Breed"
                fullWidth
              />
            </Grid>

            <Grid item>
              <TextField
                value={state.name}
                onChange={handleChange("name")}
                variant="outlined"
                placeholder="Name"
                label="Name"
                fullWidth
              />
            </Grid>
          </Grid>

          <Grid item container spacing={2} justify="flex-end">
            <Grid item onClick={addPet}>
              <Button variant="contained" color="primary">
                Save
              </Button>
            </Grid>
            <Grid item>
              <Button
                variant="contained"
                color="secondary"
                onClick={handleClose}
              >
                Discard
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
};

export default PetModal;
