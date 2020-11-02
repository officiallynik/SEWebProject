import React from 'react';
import {TextField,Button} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
    bidActions:{
        textAlign:'center',
    },
    txtPlaceBid:{
        marginTop:20,
        width:'100%',
        backgroundColor:'#ffffff'
    },
    btns:{
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        paddingBottom:20,
    },
    btnPlaceBid:{
        fontFamily: "Montserrat",
        fontSize: 15,
        paddingLeft: 40,
        paddingRight: 40,
        borderRadius: 40,
        marginTop:20,
        fontWeight:'bold',
        margin:5,
        marginLeft:20,
    },
  });


const BidActions = () => {

    const classes = useStyles();

    return(
        <div className={classes.bidActions}>
           
            <div>
                    <Button
                        variant="contained"
                        color="secondary"
                        className={classes.btnPlaceBid}
                    >
                        Request Sample  
                    </Button>
            </div>

            <div className={classes.btns}>
                <div>
                    <TextField
                        variant="filled"
                        label="Enter your bid here..."
                        color="secondary"

                        className={classes.txtPlaceBid}
                    />
                </div>

                <div>
                    <Button
                        variant="contained"
                        color="secondary"
                        className={classes.btnPlaceBid}
                    >
                        Place Bid
                    </Button>
                </div>
               
            </div>
            
        </div>
    );
}

export default BidActions;