import React, { useEffect, useState } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { CircularProgress, createStyles, FormControl, InputBase, InputLabel, MenuItem, NativeSelect, Select, Theme, withStyles } from '@material-ui/core';

import { authUpdateProfile, authClearErrors } from '../../store/actions/authAction';
import { connect } from 'react-redux';
import { Alert } from '@material-ui/lab';

function Copyright() {
    return (
        <Typography variant="body2" color="textSecondary" align="center">
            {'Copyright © '}
            <Link color="inherit" href="#">
                Farmer Portal
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

const BootstrapInput = withStyles((theme: Theme) =>
    createStyles({
        root: {
            'label + &': {
                marginTop: theme.spacing(1),
            },
        },
        input: {
            borderRadius: 4,
            position: 'relative',
            backgroundColor: theme.palette.background.paper,
            border: '1px solid #ced4da',
            fontSize: 16,
            padding: '5px 3px',
            transition: theme.transitions.create(['border-color', 'box-shadow']),
            // Use the system font instead of the default Roboto font.
            '&:focus': {
                borderRadius: 4,
                borderColor: '#80bdff',
                boxShadow: '0 0 0 0.2rem rgba(0,123,255,.25)',
            },
            display: 'flex',
            alignItems: 'center'
        },
    }),
)(InputBase);

const UpdateProfile = (props) => {

    const userType = props.userType;

    const [phoneNumber, setPhoneNumber] = useState<null|Number>(null);
    const [fullName, setFullName] = useState<null|String>(null);
    const [age, setAge] = useState<null|Number>(null);
    const [landSize, setLandSize] = useState<null|Number>(null);
    const [pincode, setPincode] = useState<null|Number>(null);
    const [location, setLocation] = useState<null|string>(null);
    const [dealerType, setDealerType] = useState<null|string>(null);

    const [successfull, setSucessfull] = useState([false, false]);

    useEffect(() => {
        if(props.loading){
            setSucessfull([true, false]);
        }
        if(!props.loading && successfull[0]){
            setSucessfull([true, true]);
        }
    }, [props.loading])

    const handleSignUp = (event) => {
        event.preventDefault();

        const fields = {
            name: fullName,
            phone: phoneNumber,
            age: age,
            land_acres: landSize,
            pincode: pincode,
            location: location,
            dealertype: dealerType
        }
        const reqBody = {};
        for(let k in fields){
            console.log(k, fields[k]);
            if(fields[k]){
                reqBody[k] = fields[k];
            }
        }
        props.dispatchUpdateProfile(userType, reqBody, props.token);
    }

    useEffect(() => {
        return () => {
            props.clearErrors();
        }
    }, []);

    let signUpForm = (
        <form style={{ width: '100%', marginTop: "5px" }}>
            <Grid container spacing={2}>
                <Grid item xs={9} sm={8}>
                    <TextField
                        disabled={props.loading}
                        autoComplete="fname"
                        name="fullName"
                        variant="outlined"
                        fullWidth
                        id="fullName"
                        label="Full Name"
                        onChange={(e) => setFullName(e.target.value)}
                    />
                </Grid>
                <Grid item xs={3} sm={4}>
                    <TextField
                        disabled={props.loading}
                        variant="outlined"
                        fullWidth
                        id="age"
                        label="Age"
                        name="age"
                        autoComplete="age"
                        type="number"
                        onChange={(e) => setAge(+e.target.value)}
                    />
                </Grid>
                <Grid item xs={6} sm={6}>
                    <TextField
                        disabled={props.loading}
                        variant="outlined"
                        fullWidth
                        id="pincode"
                        label="Pincode"
                        name="pincode"
                        autoComplete="pincode"
                        type="number"
                        onChange={(e) => setPincode(+e.target.value)}
                    />
                </Grid>
                <Grid item xs={6} sm={6}>
                    <TextField
                        disabled={props.loading}
                        variant="outlined"
                        fullWidth
                        id="land"
                        label="Land (acres)"
                        name="land"
                        autoComplete="land"
                        type="number"
                        onChange={(e) => setLandSize(+e.target.value)}
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        disabled={props.loading}
                        variant="outlined"
                        fullWidth
                        id="phone"
                        label="Phone Number"
                        name="phone"
                        type="tel"
                        datatype="number"
                        onChange={(e) => setPhoneNumber(+e.target.value)}
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        disabled={props.loading}
                        variant="outlined"
                        fullWidth
                        id="location"
                        label="Location"
                        name="location"
                        autoComplete="location"
                        onChange={(e) => setLocation(e.target.value)}
                    />
                </Grid>
            </Grid>
            <Button
                    disabled={props.loading}
                    fullWidth
                    variant="contained"
                    color="primary"
                    style={{ margin: "15px 0 10px" }}
                    onClick={handleSignUp}
                >
                    Update Profile
                </Button>
        </form>
    );

    if (userType === "dealer") {
        signUpForm = (
            <form style={{ width: '100%', marginTop: "5px" }}>
                <Grid container spacing={2}>
                    <Grid item xs={9} sm={8}>
                        <TextField
                            disabled={props.loading}
                            autoComplete="fname"
                            name="fullName"
                            variant="outlined"
                            fullWidth
                            id="fullName"
                            label="Full Name"
                            onChange={(e) => setFullName(e.target.value)}
                        />
                    </Grid>
                    <Grid item xs={3} sm={4}>
                        <TextField
                            disabled={props.loading}
                            variant="outlined"
                            fullWidth
                            id="age"
                            label="Age"
                            name="age"
                            autoComplete="age"
                            type="number"
                            onChange={(e) => setAge(+e.target.value)}
                        />
                    </Grid>
                    <Grid item xs={6} sm={6}>
                        <TextField
                            disabled={props.loading}
                            variant="outlined"
                            fullWidth
                            id="pincode"
                            label="Pincode"
                            name="pincode"
                            autoComplete="pincode"
                            type="number"
                            onChange={(e) => setPincode(+e.target.value)}
                        />
                    </Grid>
                    <Grid item xs={6} sm={6}>
                        <FormControl fullWidth>
                            <InputLabel variant="outlined" id="demo-simple-select-required-label">Dealer Type</InputLabel>
                            <Select
                                labelId="demo-simple-select-required-label"
                                id="demo-simple-select-required"
                                variant="outlined"
                                label="Dealer Type"
                                onChange={(e) => console.log(e.target)}
                            >
                                <MenuItem value="">
                                    <em>None</em>
                                </MenuItem>
                                <MenuItem value={10}>Private</MenuItem>
                                <MenuItem value={20}>Govn. Mandis</MenuItem>
                                <MenuItem value={30}>Agro Company</MenuItem>
                                </Select>
                        </FormControl>
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            disabled={props.loading}
                            variant="outlined"
                            fullWidth
                            id="phone"
                            label="Phone Number"
                            name="phone"
                            type="tel"
                            datatype="number"
                            onChange={(e) => setPhoneNumber(+e.target.value)}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            disabled={props.loading}
                            variant="outlined"
                            fullWidth
                            id="location"
                            label="Location"
                            name="location"
                            autoComplete="location"
                            onChange={(e) => setLocation(e.target.value)}
                        />
                    </Grid>
                </Grid>
                <Button
                    disabled={props.loading}
                    fullWidth
                    variant="contained"
                    color="primary"
                    style={{ margin: "15px 0 10px" }}
                    onClick={handleSignUp}
                >
                    Update Profile
                </Button>
            </form>
        )
    }

    let signUpIcon = (
        <Avatar style={{ margin: "5px", color: "white", backgroundColor: "#3BB78F" }}>
            <LockOutlinedIcon />
        </Avatar>
    );

    if(props.loading){
            signUpIcon = (
                <Avatar style={{ margin: "5px" }}>
                    <CircularProgress/>
                </Avatar>
            );
    }
    else if(successfull[1] && !props.error){
        signUpIcon = <Alert severity="success" style={{margin: "10px 0"}}>Update Successfull</Alert>
    }
    else if(!props.loading && props.error){
        signUpIcon = <Alert severity="error" style={{margin: "10px 0"}}>{props.error}</Alert>
    }
    else{
        signUpIcon = (
            <Avatar style={{ margin: "5px", color: "white", backgroundColor: "#3BB78F" }}>
                <LockOutlinedIcon />
            </Avatar>
        );
    }


    return (
        <Container component="main" maxWidth="xs" style={{padding: "0 30px"}}>
            <CssBaseline />
            <div style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center'
            }}>
                {signUpIcon}
                <Typography component="h1" variant="h5" style={{ width: "100%", display: "flex", justifyContent: "center", alignItems: "center", marginBottom: "10px" }}>
                    <div style={{ marginRight: "7px" }}>
                        Signed up as
                    </div>
                    <FormControl disabled={props.loading}>
                        <NativeSelect
                            id="demo-customized-select-native"
                            value={userType.toLowerCase()}
                            input={<BootstrapInput />}
                            disabled
                        >
                            <option value="farmer">Farmer</option>
                            <option value="dealer">Dealer</option>
                            <option value="expert">Expert</option>
                        </NativeSelect>
                    </FormControl>
                </Typography>
                {signUpForm}
            </div>
            <Box mt={5}>
                <Copyright />
            </Box>
        </Container>
    );
}

const mapStateToProps = ({ authReducer }) => {
    return {
        loading: authReducer.loading,
        error: authReducer.error,
        userType: authReducer.userType,
        token: authReducer.token
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        dispatchUpdateProfile: (userType: string, reqBody:any, token:string) => dispatch(authUpdateProfile(userType, reqBody, token)),
        clearErrors: () => dispatch(authClearErrors())
    }
}


export default React.memo(connect(mapStateToProps, mapDispatchToProps)(UpdateProfile));