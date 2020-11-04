import { CircularProgress, IconButton, Table, TableBody, TableCell, TableContainer, TableRow } from '@material-ui/core';
import { Done } from '@material-ui/icons';
import React, { useEffect, useState } from 'react';
import Axios from '../../helpers/axios';
import CustomLinearProgress from '../linearprogress';

const BidInfo = (props) => {

    const [bidData, setBidData] = useState(null);
    const [error, setError] = useState(null);

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


    return (
        <div style={{ overflow: "auto", maxHeight: "400px", height: "auto" }}>
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
            
                    {
                        !bidData? (error? <div style={{textAlign: "center"}}>{error}</div>: <CustomLinearProgress />):
                        <TableContainer>
                        <Table aria-label="collapsible table">
                        <TableBody>
                        <TableRow>
                            <TableCell align="left">Dealer</TableCell>
                            <TableCell align="left">Phone</TableCell>
                            <TableCell align="left">Pincode</TableCell>
                            <TableCell align="left">Location</TableCell>
                            <TableCell align="left">Bid (Rs.)</TableCell>
                        </TableRow>
                        {bidData.map(bid => {
                            console.log(bid);
                            return (
                                
                                    <TableRow>
                                        <TableCell align="left">{bid.name}</TableCell>
                                        <TableCell align="left">{bid.phone}</TableCell>
                                        <TableCell align="left">{bid.pincode}</TableCell>
                                        <TableCell align="left">{bid.location}</TableCell>
                                        <TableCell align="left">{bid.bid}</TableCell>
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

export default BidInfo;