import React, { useEffect, useState } from 'react';
import {TextField,Button, CircularProgress} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { notifyAction } from '../../store/actions/notifyAction';
import { connect } from 'react-redux';
import Axios from '../../helpers/axios';

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


const BidActions = (props) => {

    const classes = useStyles();

    const [bid, setBid] = useState(null);
    const [bidded, setBidded] = useState(false);

    const [placingBid, setPlacingBid] = useState(false);

    useEffect(() => {
        props.biddings.forEach(bid => {
            if(bid.dealer === props.userId){
                setBidded(true);
                setBid(bid.bid_val);
            }
        })
    }, []);

    return(
        <div className={classes.bidActions}>
           
            <div>
                    <Button
                        variant="contained"
                        color="secondary"
                        className={classes.btnPlaceBid}
                        disabled
                    >
                        Request Sample, Coming Soon   
                    </Button>
            </div>

            {
                placingBid? <CircularProgress />: 
        
            <div className={classes.btns}>
                <div>
                    <TextField
                        variant="outlined"
                        label="Enter your bid here (Rs/Q)..."
                        color="secondary"
                        className={classes.txtPlaceBid}
                        type="number"
                        onChange={(e) => {
                            setBid(+e.target.value === 0? null: +e.target.value);
                        }}
                        value={bidded? bid: bid === null? '': bid}
                        disabled={bidded}
                    />
                </div>

                <div>
                    <Button
                        variant="contained"
                        color="secondary"
                        className={classes.btnPlaceBid}
                        onClick={() => {
                            if(bid){
                                // props.dispatchNotification("Processing your bid", 3, "info")
                                setPlacingBid(true);
                                Axios.post(`/crops/bid/${props._id}`, {
                                    value: bid
                                }, {
                                    headers: {
                                        "Authorization": `Bearer ${props.token}`
                                    }
                                })
                                .then(res => {
                                    console.log(res)
                                    if(res.status === 200){
                                        props.dispatchNotification("Bid successfull", 4, "success")
                                        setBidded(true);
                                        setBid(bid);
                                        props.refresh();
                                    }
                                    else{
                                        props.dispatchNotification("Bid could not be processed, try again", 3, "error")
                                    }
                                })
                                .catch(err => {
                                    console.log(err)
                                    props.dispatchNotification("Bid could not be processed, try again", 3, "error")
                                })
                                .finally(() => {
                                    setPlacingBid(false);
                                })
                            }
                        
                        }}
                        disabled={bidded}
                    >
                        {
                            bidded? "Already Bidded": "Place Bid"
                        }
                    </Button>
                </div>
               
            </div>
            }
        </div>
    );
}

const mapStateToProps = ({ authReducer }) => {
    return {
        token: authReducer.token,
        userId: authReducer._id
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        dispatchNotification: (msg, exp, type) => dispatch(notifyAction(msg, exp, type)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(BidActions);