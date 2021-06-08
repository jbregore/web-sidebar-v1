import React from "react";
import { makeStyles } from '@material-ui/core/styles';

//nav
import Nav from "../navigation/Nav";

//table
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

import Grid from '@material-ui/core/Grid';

//button
import Button from '@material-ui/core/Button';

//images
import myImage from "../constants/images";

const useStyles = makeStyles({
  table: {
    margin: "auto",
    width: "80%",
  },
});

function createData(image, name, quantity, subtotal) {
  return { image, name, quantity, subtotal};
}

const rows = [
  createData(myImage.prod_1, "prod-1", 6, 300),
];

export default function Cart() {
  const styles = {
    header: {
      paddingTop: 100,
      paddingBottom: 100,
      margin: 0,
      width: "100%",
      textAlign: "center",
    },

    titleBig: {
      textAlign: "center",
      fontWeight: 400,
      fontSize: 34,
      color: "#555",
      position: "relative",
    },

    modalBody: {
      paddingTop: 10,
      fontSize: 14,
      border: "1px solid black",
    },

  };

  const classes = useStyles();

  return (
    <div >
      <Nav />

      <div style={styles.header}>
        <div style={{ maxWidth: 1080, margin: "auto" }}>
          <h2 style={styles.titleBig}>My Cart</h2>
        </div>

        <div style={{textAlign: "center"}}>
        <TableContainer>
          <Table className={classes.table} aria-label="simple table">

            <TableHead>
              <TableRow>
                <TableCell style={{fontSize: 18}}>Product</TableCell>
                <TableCell style={{fontSize: 18}}>Quantity</TableCell>
                <TableCell align="right" style={{fontSize: 18}}>Subtotal</TableCell>
              </TableRow>
            </TableHead>

            <TableBody>
              {rows.map((row) => (
                <TableRow key={row.name}>
                  <TableCell> 
                    <div>
                      <img src={row.image} width="100" height="100"/>
                      <p style={{fontSize: 18}}>{row.name}</p>
                    </div>
                  </TableCell>
                  <TableCell style={{fontSize: 18}}>
                  <Grid container spacing={0}>

                    <Grid item xs={3}>
                     {row.quantity}
                    </Grid>

                    <Grid item xs={2} >
                      <button style={{
                        backgroundColor: "#1976d2",
                        width: 30,
                        height: 30,
                        border: "none",
                        cursor: "pointer",
                        color: "white"
                      }}>+</button>
                    </Grid>

                    <Grid item xs={2}>
                      <button style={{
                          backgroundColor: "#ff4d4d",
                          width: 30,
                          height: 30,
                          border: "none",
                          cursor: "pointer",
                          color: "white"
                      }}>-</button>
                    </Grid>
                  </Grid>
                    
                  

                  </TableCell>
                  <TableCell align="right" style={{fontSize: 18}}>{row.subtotal}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        </div>

      </div>
    </div>
  );
}
