import React from 'react';
import Card from "@material-ui/core/Card";
import { CardContent, CardHeader } from '@material-ui/core';
import { makeStyles } from "@material-ui/core/styles";
import SingleBid from './singlebid';

const useStyles = makeStyles({
    card: {
         backgroundColor: "#ffffff",
         maxWidth:280,
         width:'100%',
         maxHeight:320,
         overflowY: 'scroll',
    },
    cardHeader:{
        paddingBottom:0,
    },
    cardContent:{
        textAlign:'center',
        padding:30,
        paddingTop:0,
    },
  });

const AllBids = (props) => {

    const classes = useStyles();

    return(
        <Card className={classes.card}>
            <CardHeader
                className={classes.cardHeader}
                title="All Bids"
            />

            <CardContent className={classes.cardContent}>
                <div>Total Bids Currently: {props.data.length}</div>
                {
                    props.data.map((bid, i) => {
                        console.log(bid, i);
                        return (
                            <SingleBid 
                                bidDetail={(<div>{i+1}. Rs. {bid.bid_val}</div>)}
                            /> 
                        )
                    })
                }
            </CardContent>

        </Card>
    );
}

export default AllBids;