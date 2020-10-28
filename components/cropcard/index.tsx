import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import { Button } from "@material-ui/core";
import Popup from "reactjs-popup";
import TextField from '@material-ui/core/TextField'
import CardBid from '../cropcard/card'
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
    maxWidth: 250,
    //textAlign: "center",
    backgroundColor: "#E6FBE9"
  },
  cropPhoto: {
    width: '100%',
    height: 130,
  },
  cardContent:{
    textAlign:'center',
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
    cardHead:{
      display: 'flex',
      padding: '6px',
      alignItems: 'center',

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

export default function CropCard() {
  const classes = useStyles();

  return (
    <Card className={classes.card} variant="outlined">
      <CardHeader className={classes.cardHead}
        avatar={
          <Avatar aria-label="recipe" className={classes.avatar}>
            
          </Avatar>
        }
        title="Farmer's name"
        subheader="September 14, 2016"
      />
      <CardMedia>
        <img
          className={classes.cropPhoto}
          src="https://www.syngenta.co.in/sites/g/files/zhg496/f/2016/08/26/13_rice_800x507_640x406.jpg"
          alt="loading"
        ></img>
      </CardMedia>
      <CardContent className={classes.cardContent}>
        <Typography variant="h6" className={classes.text}>
          Crop Name 
        </Typography>
        <Typography variant="h6" className={classes.textInfo}>
          Rs.1100/q | Estimated Qty: 30 q 
        </Typography>
        <Popup
            trigger={<Button
              variant="contained"
              color="secondary"
              className={classes.placeBid}
              >
              Place bid
            </Button>
        }
            modal
            contentStyle={contentStyle}
        >
            {close => (
            <div>
            
                {/* <div className={classes.header}> BID </div> */}

                <div className={classes.content}>
                    <div className={[classes.actions,classes.cardbid].join(' ')}>
                        <CardBid/>
                    </div>
                    <div className={classes.actions}>
                        <TextField
                                className={classes.actionTextField}
                                variant="filled"
                                color="secondary"
                                label="Enter bid price per quintal"
                                
                            />
                        <Button
                            className={classes.actionButton}
                            variant="contained"
                            color="secondary"
                            >
                            Place bid
                        </Button>
                    </div>
                
                </div>
               
            </div>
            )}
            </Popup>
      </CardContent>
    </Card>
  );
}