import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

//grid
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';

//icons
import AddCircleIcon from '@material-ui/icons/AddCircle';
import IconButton from '@material-ui/core/IconButton';

//images
import myImage from "../constants/images";

//nav
import Nav from "../navigation/Nav";


const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    height: "100%",
    display: 'flex',
    flexWrap: 'wrap',
    paddingTop: 20,
    paddingBottom: 100,
    justifyContent: 'space-around',
    backgroundColor: "#f5f5ef",
  },

  titleBig : {
    textAlign: "center",
    fontWeight: 400,
    fontSize: 34,
    color: "#555",
    position: "relative",
    paddingTop: 100,
  },

  gridList: {
    width: "70%",
  },
  icon: {
    color: 'rgba(255, 255, 255, 0.54)',
  },

  gridList1: {
    flexWrap: 'nowrap',
    width: "70%",
  },
  title: {
    color: "white",
  },
  titleBar: {
    background:
      'linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
  },

}));


const tileData = [
  {
    img: myImage.prod_1,
    title: "prod-1",
    cols: 1,
  },

  {
    img: myImage.prod_2,
    title: "prod-2",
    cols: 1,
  },

  {
    img: myImage.prod_3,
    title: "prod-3",
    cols: 1,
  },

  {
    img: myImage.prod_4,
    title: "prod-4",
    author: "Lirra",
    cols: 2,
  },

  {
    img: myImage.prod_5,
    title: "prod-5",
    cols: 1,
  },

  {
    img: myImage.prod_6,
    title: "prod-6",
    cols: 1,
  },

  {
    img: myImage.prod_7,
    title: "prod-7",
    cols: 2,
  },

  {
    img: myImage.prod_8,
    title: "prod-8",
    cols: 1,
  },

  {
    img: myImage.prod_9,
    title: "prod-9",
    cols: 2,
  },
];

export default function Home() {
  const classes = useStyles();

  return (
    <div>
      <Nav />
      <div style={{maxWidth: 1080, margin: "auto"}}>
        <h2 className={classes.titleBig}>Our Merch</h2>
      </div> 

      <div className={classes.root}>

        <GridList cellHeight={350} className={classes.gridList} cols={3}>
        {tileData.map((tile) => (
          <GridListTile key={tile.img}>
            <img src={tile.img} alt={tile.title} />
            <GridListTileBar 
              title={tile.title}
              subtitle={<span>by: {tile.author}</span>}
              actionIcon={
                <IconButton aria-label={`info about ${tile.title}`} className={classes.icon}>
                  <AddCircleIcon style={{ color: "#ff9900", width: 30, height: 30 }}/>
                </IconButton>
              }
            />
          </GridListTile>
        ))}
      </GridList>
      </div>

    </div>
  );
}
