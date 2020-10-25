import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import { Button } from "@material-ui/core";

const useStyles = makeStyles({
  card: {
    maxWidth: 345,
    textAlign: "center",
    backgroundColor: "#E6FBE9"
  },
  cropPhoto: {
    width: 345,
    height: 200
  },
  text: {
    fontFamily: "Montserrat",
    fontWeight:"bold",
    fontSize: 20,
    paddingBottom: 6
  },
  placeBid: {
    fontFamily: "Montserrat",
    fontSize: 15,
    paddingLeft: 20,
    paddingRight: 20,
    borderRadius: 20
  }
});

export default function CropCard() {
  const classes = useStyles();

  return (
    <Card className={classes.card} variant="outlined">
      <CardMedia>
        <img
          className={classes.cropPhoto}
          src="https://media.nationalgeographic.org/assets/photos/120/983/091a0e2f-b93d-481b-9a60-db520c87ec33.jpg"
          alt="loading"
        ></img>
      </CardMedia>
      <CardContent>
        <Typography variant="h4" className={classes.text}>
          Crop Name
        </Typography>
        <Typography variant="h5" className={classes.text}>
          Farmer Contact
        </Typography>
        <Button
          variant="contained"
          color="primary"
          className={classes.placeBid}
        >
          Place bid
        </Button>
      </CardContent>
    </Card>
  );
}
