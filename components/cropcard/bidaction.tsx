import React from 'react';
import {TextField,Button} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
    bidActions:{
        textAlign:'center',
    },
    txtPlaceBid:{
        marginTop:20,
        width:'50%',
        
    },

    btnPlaceBid:{
        fontFamily: "Montserrat",
        fontSize: 15,
        paddingLeft: 60,
        paddingRight: 60,
        borderRadius: 40,
        marginTop:20,
        marginBottom:20,
        fontWeight:'bold',
    },
  });


const BidActions = () => {

    const classes = useStyles();

    return(
        <div className={classes.bidActions}>
            <div>
                <TextField
                    variant="outlined"
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
    );
}

export default BidActions;