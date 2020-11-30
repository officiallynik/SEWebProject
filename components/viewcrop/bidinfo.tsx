import { Button, CircularProgress, IconButton, Table, TableBody, TableCell, TableContainer, TableRow } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import Axios from '../../helpers/axios';
import { notifyAction } from '../../store/actions/notifyAction';
import CustomLinearProgress from '../linearprogress';

const BidInfo = (props) => {

    const [bidData, setBidData] = useState(null);
    const [error, setError] = useState(null);

    const [loadingBidAccept, setLoadingBidAccept] = useState(false);

    const handleBiddings = async () => {
        const promises = props.data.biddings.map(async bid => {
            try {
                const res = await Axios.get(`/dealer/view/public/${bid.dealer}`);
                if(res.status === 200){
                    return {
                        name: `${res.data.name} (${res.data.dealertype})`,
                        phone: res.data.phone,
                        pincode: res.data.pincode,
                        location: res.data.location,
                        bid: bid.bid_val
                    }
                }
                else{
                    setError("Something went wrong, please try again later");
                }
            } catch (error) {
                setError("Something went wrong, please try again later");
            }
        })

         Promise.all(promises).then((val) => {
            !val.includes(undefined) && setBidData(val);
        });
    }

    useEffect(() => {
        setBidData(null);
        setError(null);
        handleBiddings();
    }, []);

    const handleBidAccept = (cropId, bidId) => {
        setLoadingBidAccept(true);
        Axios.post(`/crops/bid/accept/${cropId}/${bidId}`, {}, {
            headers: {
                'Authorization': `Bearer ${props.token}`
            }
        })
        .then(res => {
            console.log(res);
            props.dispatchNotify("Bid accepted successfully!", 3, "success");
            props.refresh();
        })
        .catch(err => {
            console.log(err);
            props.dispatchNotify("Bid was not accepted, try again later!", 3, "error");
        })
        .finally(() => {
            setLoadingBidAccept(false);
        })
    } 


    return (
        <div style={{ overflow: "auto", maxHeight: "400px", height: "auto" }}>
            {
                props.data.imgs.length === 0? null:
                <div style={{display: "flex", overflow: "auto", height: "150px"}}>
                    {
                        props.data.imgs.map(img => {
                            <img src={`https://fathomless-tundra-87077.herokuapp.com/images/${img}`} 
                                key={img}
                                style={{width: "50%", paddingRight: "5px"}} 
                            />
                        })
                    }
                </div>
            }
            
                    {
                        loadingBidAccept? <CustomLinearProgress />:
                        !bidData? (error? <div style={{textAlign: "center"}}>{error}</div>: <CustomLinearProgress />):
                        <TableContainer>
                        <Table aria-label="collapsible table">
                        <TableBody>
                        {bidData.length === 0? <div style={{padding: "10px"}}>No bids yet, we will notify when someone bids!</div>:
                        <TableRow>
                            <TableCell align="left">Dealer</TableCell>
                            <TableCell align="left">Phone</TableCell>
                            <TableCell align="left">Pincode</TableCell>
                            <TableCell align="left">Location</TableCell>
                            <TableCell align="left">Bid (Rs.)</TableCell>
                            <TableCell></TableCell>
                        </TableRow>
                        }
                        {bidData.map((bid, idx) => {
                            console.log(bid);
                            console.log(props.data)
                            return (
                                    // "/bid/accept/:crop_id/:bid_id"
                                    <TableRow>
                                        <TableCell align="left">{bid.name}</TableCell>
                                        <TableCell align="left">{bid.phone}</TableCell>
                                        <TableCell align="left">{bid.pincode}</TableCell>
                                        <TableCell align="left">{bid.location}</TableCell>
                                        <TableCell align="left">{bid.bid}</TableCell>
                                        <TableCell>
                                            {
                                                props.data.sold? null:
                                                <Button variant="outlined" style={props.data.biddings[idx].status === "active"? {backgroundColor: "lightblue", fontSize: "12px"}:
                                                    {backgroundColor: "lightgreen", fontSize: "12px"}}
                                                    onClick={() => handleBidAccept(props.data._id, props.data.biddings[idx]._id)}
                                                    disabled={props.data.biddings[idx].status === "accepted"}
                                                >
                                                    {props.data.biddings[idx].status === "accepted"? "Accepted": "Accept"}
                                                </Button>
                                            }
                                        </TableCell>
                                    </TableRow>
                            )
                        })}
                        </TableBody>
                        </Table>
                    </TableContainer>
                    }
        </div>
    );
};

const mapStateToProps = ({ authReducer }) => {
    return {
        token: authReducer.token
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        dispatchNotify: (msg: string, exp: number, notifyType: string) => dispatch(notifyAction(msg, exp, notifyType)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(BidInfo);