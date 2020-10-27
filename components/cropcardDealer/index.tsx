import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import { Button } from "@material-ui/core";
import Popup from "reactjs-popup";
import TextField from '@material-ui/core/TextField'
import CardBid from './cardbid'

const contentStyle = {
  maxWidth: "700px",
  width: "90%",
  backgroundColor:'#000000',
  borderRadius:10
};

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
    fontFamily: "Monserrat",
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
       fontSize:40,
       fontFamily:'Lucida Console", Courier, monospace',
       textAlign:'center'

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
        borderRadius:3
        
   },
   actionButton:{
       marginTop:30,
       width:'80%',
       borderRadius:40
       
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
        
        <Popup
            trigger={<Button
              variant="contained"
              color="primary"
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
