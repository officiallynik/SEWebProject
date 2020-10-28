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
import UploadThumbnail from './thumbnail';
import UploadImages from './gallery';
import Axios from '../../helpers/axios';

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

    const [thumbail, setThumbnail] = useState<File | null>(null);
    const [gallery, setGallery] = useState<FileList | null>(null);
    const [cropDetails, setCropDetails] = useState(initialCropDetails);

    const getStepContent = (step) => {
        switch (step) {
            case 0:
                return <DetailsForm cropDetails={cropDetails} setCropDetails={setCropDetails} />;
            case 1:
                return <UploadThumbnail thumbnail={thumbail} setThumbnail={setThumbnail} />;
            case 2:
                return <UploadImages gallery={gallery} setGallery={setGallery} />;
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
        const reqBody = {
            ...cropDetails,
            thumbnail: thumbail
        }
        console.log(reqBody);
        Axios.post('/crops/sell', reqBody, {
            headers: {
                'Authorization': `Bearer ${props.token}`
            }
        })
        .then(res => {
            console.log(res)
        })
        .catch(err => {
            console.log(err)
        })
    }

    return (
        <React.Fragment>
            <CssBaseline />
            <main className={classes.layout}>
                <Paper className={classes.paper}>
                    <Typography component="h1" variant="h4" align="center">
                        Add Crop to Sell
                    </Typography>
                    <Stepper activeStep={activeStep} className={classes.stepper}>
                        {steps.map((label) => (
                            <Step key={label}>
                                <StepLabel>{label}</StepLabel>
                            </Step>
                        ))}
                    </Stepper>
                    <React.Fragment>
                        <React.Fragment>
                            {getStepContent(activeStep)}
                            <div className={classes.buttons}>
                                {activeStep !== 0 && (
                                    <Button onClick={handleBack} className={classes.button}>
                                        Back
                                    </Button>
                                )}
                                <Button
                                    variant="contained"
                                    color="primary"
                                    onClick={activeStep === steps.length - 1 ? handlePlaceSellOrder : handleNext}
                                    className={classes.button}
                                >
                                    {activeStep === steps.length - 1 ? 'Sell Crop' : 'Next'}
                                </Button>
                            </div>
                        </React.Fragment>
                    </React.Fragment>
                </Paper>
            </main>
        </React.Fragment>
    );
}

export default StepForm;