import React from 'react';
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import { Button } from "@material-ui/core";
import CardHeader from '@material-ui/core/CardHeader';
import Avatar from '@material-ui/core/Avatar';
import { red } from '@material-ui/core/colors';

const useStyles = makeStyles({
    card: {
    
        backgroundColor: "#ffffff",
        maxWidth:250,
         width:'100%',
    },
    cardHeader:{
        display: 'flex',
        padding: '6px',
    },
    avatar: {
        backgroundColor: red[500],
    },
    cropPhoto: {
        width: '100%',
        height: 130,
    },
    cardContent:{
        textAlign:'center',
    },
    textCropName:{
        fontFamily: "Monserrat",
        fontWeight:"bold",
        fontSize: 18,

    },
    textOther:{
        fontFamily: "Monserrat",
        fontSize: 12,
        paddingBottom: 6,
       
    }
  });

const DetailCropCard = () => {

    const classes = useStyles();

    return(
        <Card className={classes.card} variant="outlined">
            <CardHeader className={classes.cardHeader}
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
                <Typography variant="h6" className={classes.textCropName}>
                Crop Name 
                </Typography>
                <Typography variant="h6" className={classes.textOther}>
                Rs.1100/q | Estimated Qty: 30 q 
                </Typography>
                <Typography variant="h6" className={classes.textOther}>
                MSP = Rs. 1200/q
                </Typography>
                <Typography variant="h6" className={classes.textOther}>
                Croptype | CropVariety
                </Typography>
            </CardContent>
        </Card>
    );
   
}

export default DetailCropCard

