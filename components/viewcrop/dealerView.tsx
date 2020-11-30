import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Paper from '@material-ui/core/Paper';
import FixedBar from './fixedbar';
import FarmerInfo from './farmerInfo';

const useStyles = makeStyles((theme) => ({
    layout: {
        width: 'auto',
        marginLeft: theme.spacing(2),
        marginRight: theme.spacing(2),
        [theme.breakpoints.up(600 + theme.spacing(2) * 2)]: {
            width: 600,
            marginLeft: 'auto',
            marginRight: 'auto',
        },
        paddingTop: "37px"
    },
    paper: {
        // padding: theme.spacing(2),
        [theme.breakpoints.up(600 + theme.spacing(3) * 2)]: {
            // padding: theme.spacing(3),
        },
    },
}));


const DealerView = (props) => {
    const classes = useStyles();
    const handlePlaceSellOrder = () => {
        // props.setLoading(true);

        // let reqBody = new FormData();
        // for(let key in cropDetails){
        //     console.log(key, cropDetails[key]);
        //     reqBody.append(key, cropDetails[key]);
        // }
        // reqBody.append("thumbnail", thumbnail);
        
        // !!gallery && 
        // Array.from(gallery).map((file: any) => {
        //     reqBody.append("gallery", file);
        // });

        // console.log(reqBody, props.token);
        // Axios.post('/crops/sell', reqBody, {
        //     headers: {
        //         'Authorization': `Bearer ${props.token}`,
        //         "Content-Type": "multipart/form-data"
        //     }
        // })
        // .then(res => {
        //     console.log(res)
            
        //     if(res.status === 200){
        //         setStatusHeader("Sucessfully added crop to listing :)");
        //         setStatusMsg("You can manage your listings and view bids in the farmers dashboard.");
        //     }
        //     else{
        //         setStatusHeader("Failed to add crop to listing :(");
        //         setStatusMsg("Please try again later.");
        //     }
        // })
        // .catch(err => {
        //     console.log(err);
            
        //     setStatusHeader("Failed to add crop to listing :(");
        //     setStatusMsg("Please provide all the required details.");
        // })
        // .finally(() => {
        //     props.setLoading(false);
        //     setActiveStep(activeStep + 1);
        // })
    }

    console.log("[daeler view]", props.data);

    return (
        <React.Fragment>
            <CssBaseline />
            <main className={classes.layout}>
                <Paper className={classes.paper}>
                    <FixedBar data={props.data} refresh={props.refresh} userType="dealer" />
                    <FarmerInfo data={props.data} />
                </Paper>
            </main>
        </React.Fragment>
    );
}

export default DealerView;