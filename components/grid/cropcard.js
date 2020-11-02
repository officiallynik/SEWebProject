import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import { Button } from "@material-ui/core";
import CardHeader from '@material-ui/core/CardHeader';
import Avatar from '@material-ui/core/Avatar';
import { red } from '@material-ui/core/colors';

const contentStyle = {
  maxWidth: "700px",
  width: "90%",
  backgroundColor:'#000000',
  borderRadius:10
};

const useStyles = makeStyles({
  card: {
    maxWidth: 345,
    //textAlign: "center",
    backgroundColor: "#E6FBE9"
  },
  cropPhoto: {
    width: '100%',
    height: 130,
  },
  cardContent:{
    //textAlign:'center',
   // paddingBottom:20
  },
  text: {
    fontFamily: "Monserrat",
    fontWeight:"bold",
    fontSize: 18,
    textAlign:'center'
  },
  textInfo: {
    fontFamily: "Monserrat",
    
    fontSize: 12,
    paddingBottom: 6,
    textAlign:'center'
  },
  placeBid: {
    fontFamily: "Montserrat",
    fontSize: 12,
    paddingLeft: 20,
    paddingRight: 20,
    borderRadius: 20,
  },
  warper:{
    width:'100%',
    padding:'20px 5%',
    display:'flex',
    justifyContent:'space-around',
    flexWrap:'wrap',
    border:'1px #cfcece dashed',
   },
    content:{
        width:'100%'
    },
   header:{
      display: 'flex',
      padding: '6px',
      textAlign:'start'

   },
   cardbid:{
       width:'100%',
       
   },
   actions:{
        float:'left',
        width:'50%',
        boxSizing:'border-box',
        padding:10,
        textAlign:'center'
   },
   actionTextField:{
        marginTop:'33%',
        width:'80%',
        backgroundColor:'#ffffff',
        borderRadius:3,
        
        
   },
   actionButton:{
       marginTop:30,
       width:'80%',
       borderRadius:40,
       
   },
   avatar: {
    backgroundColor: red[500],
  },
});

export default function CropCard({ cropData }) {
  const classes = useStyles();
  const { title, date, imageSrc, cropName, est, price, avatarSrc} = cropData
  const priceTag = `Rs.${price}/q  Estimated Qty: ${est} q `
  return (
    <Card className={classes.card} variant="outlined">
      <CardHeader className={classes.header}
       avatar={
        <Avatar aria-label="recipe" className={classes.avatar} src={avatarSrc}>
        </Avatar>
      }
        title={title}
        subheader={date}
      />
      <CardMedia>
        <img
          className={classes.cropPhoto}
          src={imageSrc}
          alt="loading"
        ></img>
      </CardMedia>
      <CardContent className={classes.cardContent}>
        <Typography variant="h6" className={classes.text}>
          {cropName}
        </Typography>
        <Typography variant="h6" className={classes.textInfo}>
        {priceTag}
        </Typography>
        <Button
              variant="contained"
              color="secondary"
              className={classes.placeBid}
              >
             View All bids
            </Button>
        
      </CardContent>
    </Card>
  );
}
