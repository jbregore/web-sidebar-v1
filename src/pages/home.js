import React, { useState, useEffect } from "react";

//firebase
import firebase from "../firebase";

import {
  Grid,
  makeStyles,
  TextField,
  Button,
  Card,
  CardContent,
  Modal,
} from "@material-ui/core";

import { DataGrid } from "@material-ui/data-grid";
import PetModal from "../components/modal/PetModal";

const useStyles = makeStyles((theme) => ({
  tableContainer: {
    width: "100%",
  },
}));

const db = firebase.firestore();

export default function Home() {
  const classes = useStyles();
  const [state, setState] = useState({
    pets: [],
    isLoading: true,
  });
  const [open, setOpen] = useState(false);

  const columns = [
    { field: "id", headerName: "ID", width: 190 },
    { field: "type", headerName: "Type", width: 150 },
    { field: "breed", headerName: "Breed", width: 150 },
    { field: "name", headerName: "Name", width: 150 },
    {
      field: "",
      headerName: "Actions",
      width: 200,
      renderCell: (params) => (
        <React.Fragment>
          <Grid container spacing={1}>
            <Grid item>
              <Button variant="outlined" color="primary">
                Edit
              </Button>
            </Grid>
            <Grid item>
              <Button
                variant="outlined"
                color="secondary"
                onClick={() => deletePet(params.id)}
              >
                Delete
              </Button>
            </Grid>
          </Grid>
        </React.Fragment>
      ),
    },
  ];

  const deletePet = (id) => {
    db.collection("pets")
      .doc(id)
      .delete()
      .then(() => {
        //success
      })
      .catch((err) => {
        //error
      });
  };

  useEffect(() => {
    const fetchData = () => {
      db.collection("pets").onSnapshot((doc) => {
        let petList = [];
        doc.forEach((pet) => {
          petList.push({ ...pet.data(), id: pet.id });
        });
        setState({ pets: petList, isLoading: false });
      });
    };
    fetchData();
  }, []);

  const logout = () => {
    firebase
      .auth()
      .signOut()
      .then(() => {
        alert("Sign-out successful.");
      })
      .catch((error) => {
        // An error happened.
      });
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div style={{ paddingTop: 120 }}>
      <h1>Welcome Home</h1>
      <button
        style={{
          width: 180,
          height: 30,
        }}
        onClick={logout}
      >
        {" "}
        Sign out{" "}
      </button>

      <Grid container justify="center">
        <Grid item className={classes.tableContainer}>
          <Card>
            <CardContent>
              <Grid container direction="column" spacing={2}>
                <Grid item>
                  <DataGrid
                    rows={state.pets}
                    columns={columns}
                    pageSize={5}
                    checkboxSelection
                    autoHeight
                    loading={state.isLoading}
                    disableSelectionOnClick
                  />
                </Grid>
                <Grid item container spacing={2}>
                  <Grid item>
                    <Button
                      variant="contained"
                      color="primary"
                      onClick={() => setOpen(true)}
                    >
                      Add
                    </Button>
                  </Grid>

                  <Grid item>
                    <Button variant="contained" color="secondary">
                      Delete
                    </Button>
                  </Grid>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      <Modal open={open} onClose={handleClose} aria-labelledby="pet-modal">
        <PetModal setOpen={setOpen} />
      </Modal>
    </div>
  );
}
