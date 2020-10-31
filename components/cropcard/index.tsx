import React, { useState } from 'react';
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import { Button } from "@material-ui/core";
import CardHeader from '@material-ui/core/CardHeader';
import Avatar from '@material-ui/core/Avatar';
import { red } from '@material-ui/core/colors';
import Modal from 'react-modal';
import DetailCropCard from '../cropcard/detailcropcard'
import AllBids from '../cropcard/viewbidscard'
import BidActions from '../cropcard/bidaction'

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
    cardHead:{
      display: 'flex',
      padding: '6px',
      alignItems: 'center',

   },
  avatar: {
    backgroundColor: red[500],
  },
  modal:{
    backgroundColor:"#E6FBE9",
    maxWidth:600,
    width:'95%',
    borderRadius:20,
    //height:'60%',
    margin:'auto',
    marginTop:'5%',
    
    
  },
  test:{
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
  },

  modalCards:{
      marginTop:'4%',
      marginLeft:'3%',
      marginRight:'3%',
  },
 
 
});

export default function CropCard() {
  const classes = useStyles();

  const [modalState,setModalState] = useState(false);

  const openModal = () => {
  setModalState(true);
  };

  const closeModal = () => {
      setModalState(false);
  };

  

  return (
    <div>
    
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
        <Button
              variant="contained"
              color="secondary"
              className={classes.placeBid}
               onClick={openModal}
              >
              Place bid
        </Button>

       
       
      </CardContent>
    </Card>

    <Modal isOpen={modalState} onRequestClose={closeModal} className={classes.modal}>
          
          <div className={classes.test}>
            <div className={classes.modalCards}><DetailCropCard /></div>
            <div className={classes.modalCards}><AllBids/></div>
          </div>
         

          <div ><BidActions/></div>

    </Modal>  


    </div>
  );
}
