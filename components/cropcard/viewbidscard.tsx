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

const AllBids = () => {

    const classes = useStyles();

    return(
        <Card className={classes.card}>
            <CardHeader
                className={classes.cardHeader}
                title="All Bids"
            />

            <CardContent className={classes.cardContent}>
                <SingleBid/>
                <SingleBid/> 
                <SingleBid/>
                <SingleBid/>
                <SingleBid/>
                <SingleBid/>
                <SingleBid/>
                <SingleBid/>
                <SingleBid/>
                <SingleBid/>
                <SingleBid/>
            </CardContent>

        </Card>
    );
}

export default AllBids;