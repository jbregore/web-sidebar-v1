import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

//link
import { Link } from "react-router-dom";

//nav
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';

//button
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

//icon
import IconButton from '@material-ui/core/IconButton';
import StorefrontIcon from '@material-ui/icons/Storefront';


const useStyles = makeStyles((theme) => ({
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  button: {
    fontWeight: 500,
  },
  link:{
    color: "white",
    textDecoration: "none"
  },
}));

export default function ButtonAppBar() {
  const classes = useStyles();

  return (
      <div>
        <AppBar position="static" style={{backgroundColor:"#1976d2"}}>
            <Toolbar >
            <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                <p style={{fontSize: 18, lineHeight: 0}}>AoT</p>
            </IconButton>
            <Typography className={classes.title}></Typography>
            <Button color="inherit" className={classes.button}>
              <Link className={classes.link} to="/home"> Home </Link>
            </Button>
            <Button color="inherit" className={classes.button}>
              <Link className={classes.link} to="/cart"> Cart </Link>
            </Button>
            <Button color="inherit" className={classes.button}>
               <Link className={classes.link} to="/login"> Logout </Link>
            </Button>

            </Toolbar>
        </AppBar>

      </div>
  );
}
