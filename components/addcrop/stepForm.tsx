import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Paper from '@material-ui/core/Paper';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import DetailsForm from './detailsform';
import UploadThumbnail from '../utils/thumbnail';
import UploadImages from './gallery';
import Axios from '../../helpers/axios';
import { CircularProgress } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    appBar: {
        position: 'relative',
    },
    layout: {
        width: 'auto',
        marginLeft: theme.spacing(2),
        marginRight: theme.spacing(2),
        [theme.breakpoints.up(600 + theme.spacing(2) * 2)]: {
            width: 600,
            marginLeft: 'auto',
            marginRight: 'auto',
        },
    },
    paper: {
        padding: theme.spacing(2),
        [theme.breakpoints.up(600 + theme.spacing(3) * 2)]: {
            padding: theme.spacing(3),
        },
    },
    stepper: {
        padding: theme.spacing(3, 0, 5),
    },
    buttons: {
        display: 'flex',
        justifyContent: 'flex-end',
    },
    button: {
        marginTop: theme.spacing(3),
        marginLeft: theme.spacing(1),
    },
}));


const StepForm = (props) => {
    const classes = useStyles();
    const [activeStep, setActiveStep] = useState(0);

    const steps = ['Crop Details', 'Add Thumbnail', 'Add Photos'];

    const initialCropDetails = {
        name: null,
        MSP: null,
        quantity: null,
        type: null,
        variety: null
    }

    const [thumbnail, setThumbnail] = useState<File | null>(null);
    const [gallery, setGallery] = useState<FileList | null>(null);
    const [cropDetails, setCropDetails] = useState(initialCropDetails);

    let [statusHeader, setStatusHeader] = useState(null);
    let [statusMsg, setStatusMsg] = useState(null);

    const getStepContent = (step) => {
        switch (step) {
            case 0:
                return <DetailsForm cropDetails={cropDetails} setCropDetails={setCropDetails} />;
            case 1:
                return <UploadThumbnail thumbnail={thumbnail} setThumbnail={setThumbnail} />;
            case 2:
                return <UploadImages gallery={gallery} setGallery={setGallery} loading={props.loading} />;
            default:
                throw new Error('Unknown step');
        }
    }

    const handleNext = () => {
        setActiveStep(activeStep + 1);
    };

    const handleBack = () => {
        setActiveStep(activeStep - 1);
    };

    const handlePlaceSellOrder = () => {
        props.setLoading(true);

        let reqBody = new FormData();
        for(let key in cropDetails){
            console.log(key, cropDetails[key]);
            reqBody.append(key, cropDetails[key]);
        }
        reqBody.append("thumbnail", thumbnail);
        
        !!gallery && 
        Array.from(gallery).map((file: any) => {
            reqBody.append("gallery", file);
        });

        console.log(reqBody, props.token);
        Axios.post('/crops/sell', reqBody, {
            headers: {
                'Authorization': `Bearer ${props.token}`,
                "Content-Type": "multipart/form-data"
            }
        })
        .then(res => {
            console.log(res)
            
            if(res.status === 200){
                setStatusHeader("Sucessfully added crop to listing :)");
                setStatusMsg("You can manage your listings and view bids in the farmers dashboard.");
            }
            else{
                setStatusHeader("Failed to add crop to listing :(");
                setStatusMsg("Please try again later.");
            }
        })
        .catch(err => {
            console.log(err);
            
            setStatusHeader("Failed to add crop to listing :(");
            setStatusMsg("Please provide all the required details.");
        })
        .finally(() => {
            props.setLoading(false);
            setActiveStep(activeStep + 1);
        })
    }

    return (
        <React.Fragment>
            <CssBaseline />
            <main className={classes.layout}>
                <Paper className={classes.paper}>
                    <Typography component="h1" variant="h4" align="center">
                        {
                            !props.loading? "Add Crop to Sell" : <CircularProgress />
                        }
                    </Typography>
                    <Stepper activeStep={activeStep} className={classes.stepper}>
                        {steps.map((label) => (
                            <Step key={label}>
                                <StepLabel>{label}</StepLabel>
                            </Step>
                        ))}
                    </Stepper>
                    <React.Fragment>
                        {activeStep === steps.length ? (
                        <React.Fragment>
                            <Typography variant="h5" gutterBottom>
                                {statusHeader}
                            </Typography>
                            <Typography variant="subtitle1">
                                {statusMsg}
                                Thank you.
                            </Typography>
                        </React.Fragment>
                        ) : (
                        <React.Fragment>
                            {getStepContent(activeStep)}
                            <div className={classes.buttons}>
                                {activeStep !== 0 && (
                                    <Button onClick={handleBack} className={classes.button} disabled={props.loading}>
                                        Back
                                    </Button>
                                )}
                                <Button
                                    variant="contained"
                                    color="primary"
                                    onClick={activeStep === steps.length - 1 ? handlePlaceSellOrder : handleNext}
                                    className={classes.button}
                                    disabled={props.loading}
                                >
                                    {activeStep === steps.length - 1 ? 'Sell Crop' : 'Next'}
                                </Button>
                            </div>
                        </React.Fragment> )}
                    </React.Fragment>
                </Paper>
            </main>
        </React.Fragment>
    );
}

export default StepForm;