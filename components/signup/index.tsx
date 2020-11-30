import React, { useEffect, useState } from 'react';
import Avatar from '@material-ui/core/Avatar';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { Button, CircularProgress, createStyles, FormControl, Input, InputBase, InputLabel, MenuItem, NativeSelect, Select, Theme, withStyles } from '@material-ui/core';

import { authSignUp, authClearErrors } from '../../store/actions/authAction';
import { connect } from 'react-redux';
import { Alert } from '@material-ui/lab';
import Router from 'next/router';
import { CloudUploadOutlined } from '@material-ui/icons';
import { message, Upload } from 'antd';

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

const SignUp = (props) => {

    const [userType, setUserType] = useState("farmer");

    const [phoneNumber, setPhoneNumber] = useState<null|Number>(null);
    const [fullName, setFullName] = useState<null|String>(null);
    const [age, setAge] = useState<null|Number>(null);
    const [landSize, setLandSize] = useState<null|Number>(null);
    const [pincode, setPincode] = useState<null|Number>(null);
    const [location, setLocation] = useState<null|string>(null);
    const [password, setPassword] = useState<null|string>(null);
    const [dealerType, setDealerType] = useState<null|string>(null);
    const [verifyDoc, setVerifyDoc] = useState<File|null>(null);

    const handleUserTypeChange = (event: React.ChangeEvent<{ value: unknown }>) => {
        setUserType(event.target.value as string);
    };

    const handleSignUp = (event) => {
        event.preventDefault();
        let userUrl = userType === "expert"? "editor": userType;

        var reqBody: any = {
            name: fullName,
            phone: phoneNumber,
            age: age,
            land_acres: landSize,
            pincode: pincode,
            location: location,
            password: password,
            dealertype: dealerType
        }

        if(userUrl === "editor"){
            reqBody = new FormData();
            reqBody.append("name", fullName);
            reqBody.append("phone", phoneNumber);
            reqBody.append("age", age);
            reqBody.append("password", password);
            reqBody.append("verification", verifyDoc);
        }

        props.dispatchSignUp(userUrl, reqBody);
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
                        required
                        fullWidth
                        id="fullName"
                        label="Full Name"
                        autoFocus
                        value={fullName === null? '': fullName}
                        onChange={(e) => {
                            setFullName(e.target.value === ''? null: e.target.value)
                        }}
                    />
                </Grid>
                <Grid item xs={3} sm={4}>
                    <TextField
                        disabled={props.loading}
                        variant="outlined"
                        required
                        fullWidth
                        id="age"
                        label="Age"
                        name="age"
                        autoComplete="age"
                        type="number"
                        value={age === null? '': age}
                        onChange={(e) => {
                            setAge(+e.target.value === 0? null: +e.target.value)
                        }}
                    />
                </Grid>
                <Grid item xs={6} sm={6}>
                    <TextField
                        disabled={props.loading}
                        variant="outlined"
                        required
                        fullWidth
                        id="pincode"
                        label="Pincode"
                        name="pincode"
                        autoComplete="pincode"
                        type="number"
                        value={pincode === null? '': pincode}
                        onChange={(e) => {
                            setPincode(+e.target.value === 0? null: +e.target.value)
                        }}
                    />
                </Grid>
                <Grid item xs={6} sm={6}>
                    <TextField
                        disabled={props.loading}
                        variant="outlined"
                        required
                        fullWidth
                        id="land"
                        label="Land (acres)"
                        name="land"
                        autoComplete="land"
                        type="number"
                        value={landSize === null? '': landSize}
                        onChange={(e) => {
                            setLandSize(+e.target.value === 0? null: +e.target.value)
                        }}
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        disabled={props.loading}
                        variant="outlined"
                        required
                        fullWidth
                        id="phone"
                        label="Phone Number"
                        name="phone"
                        type="tel"
                        datatype="number"
                        value={phoneNumber === null? '': phoneNumber}
                        onChange={(e) => {
                            setPhoneNumber(+e.target.value === 0? null: +e.target.value)
                        }}
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        disabled={props.loading}
                        variant="outlined"
                        required
                        fullWidth
                        id="location"
                        label="Location"
                        name="location"
                        autoComplete="location"
                        value={location === null? '': location}
                        onChange={(e) => {
                            setLocation(e.target.value === ''? null: e.target.value)
                        }}
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        disabled={props.loading}
                        variant="outlined"
                        required
                        fullWidth
                        name="password"
                        label="Password"
                        type="password"
                        id="password"
                        autoComplete="current-password"
                        value={password === null? '': password}
                        onChange={(e) => {
                            setPassword(e.target.value === ''? null: e.target.value)
                        }}
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
                    Sign Up
                </Button>
                <Grid container justify="flex-end">
                    <Grid item style={!props.loading? {}:{display: "none"}}>
                        <Link href="#" variant="body2" onClick={props.handleSignInOpen}>
                            Already have an account? Sign in
                        </Link>
                    </Grid>
                </Grid>
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
                        required
                        fullWidth
                        id="fullName"
                        label="Full Name"
                        autoFocus
                        value={fullName === null? '': fullName}
                        onChange={(e) => {
                            setFullName(e.target.value === ''? null: e.target.value)
                        }}
                    />
                </Grid>
                <Grid item xs={3} sm={4}>
                    <TextField
                        disabled={props.loading}
                        variant="outlined"
                        required
                        fullWidth
                        id="age"
                        label="Age"
                        name="age"
                        autoComplete="age"
                        type="number"
                        value={age === null? '': age}
                        onChange={(e) => {
                            setAge(+e.target.value === 0? null: +e.target.value)
                        }}
                    />
                </Grid>
                <Grid item xs={6} sm={6}>
                    <TextField
                        disabled={props.loading}
                        variant="outlined"
                        required
                        fullWidth
                        id="pincode"
                        label="Pincode"
                        name="pincode"
                        autoComplete="pincode"
                        type="number"
                        value={pincode === null? '': pincode}
                        onChange={(e) => {
                            setPincode(+e.target.value === 0? null: +e.target.value)
                        }}
                    />
                </Grid>
                <Grid item xs={6} sm={6}>
                        <FormControl required fullWidth>
                            <InputLabel variant="outlined" id="demo-simple-select-required-label">Dealer Type</InputLabel>
                            <Select
                                labelId="demo-simple-select-required-label"
                                id="demo-simple-select-required"
                                variant="outlined"
                                label="Dealer Type"
                                onChange={(e) => {
                                    switch(e.target.value){
                                        case 10:
                                            setDealerType("Private");
                                            return;
                                        case 20:
                                            setDealerType("Govn. Mandis");
                                            return;
                                        case 30:
                                            setDealerType("Agro Company");
                                            return;
                                        default:
                                            setDealerType("null");
                                    }
                                }}
                                value={dealerType === "Private"? 10: dealerType === "Govn. Mandis"? 20: dealerType === "Agro Company"? 30: ''}
                            >
                                <MenuItem value={``}>
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
                        required
                        fullWidth
                        id="phone"
                        label="Phone Number"
                        name="phone"
                        type="tel"
                        datatype="number"
                        value={phoneNumber === null? '': phoneNumber}
                        onChange={(e) => {
                            setPhoneNumber(+e.target.value === 0? null: +e.target.value)
                        }}
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        disabled={props.loading}
                        variant="outlined"
                        required
                        fullWidth
                        id="location"
                        label="Location"
                        name="location"
                        autoComplete="location"
                        value={location === null? '': location}
                        onChange={(e) => {
                            setLocation(e.target.value === ''? null: e.target.value)
                        }}
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        disabled={props.loading}
                        variant="outlined"
                        required
                        fullWidth
                        name="password"
                        label="Password"
                        type="password"
                        id="password"
                        autoComplete="current-password"
                        value={password === null? '': password}
                        onChange={(e) => {
                            setPassword(e.target.value === ''? null: e.target.value)
                        }}
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
                    Sign Up
                </Button>
                <Grid container justify="flex-end">
                    <Grid item style={!props.loading? {}:{display: "none"}}>
                        <Link href="#" variant="body2" onClick={props.handleSignInOpen}>
                            Already have an account? Sign in
                        </Link>
                    </Grid>
                </Grid>
        </form>
        )
    }

    if (userType === "expert") {
        signUpForm = (
            <form style={{ width: '100%', marginTop: "5px" }}>
            <Grid container spacing={2}>
                <Grid item xs={9} sm={8}>
                    <TextField
                        disabled={props.loading}
                        autoComplete="fname"
                        name="fullName"
                        variant="outlined"
                        required
                        fullWidth
                        id="fullName"
                        label="Full Name"
                        autoFocus
                        value={fullName === null? '': fullName}
                        onChange={(e) => {
                            setFullName(e.target.value === ''? null: e.target.value)
                        }}
                    />
                </Grid>
                <Grid item xs={3} sm={4}>
                    <TextField
                        disabled={props.loading}
                        variant="outlined"
                        required
                        fullWidth
                        id="age"
                        label="Age"
                        name="age"
                        autoComplete="age"
                        type="number"
                        value={age === null? '': age}
                        onChange={(e) => {
                            setAge(+e.target.value === 0? null: +e.target.value)
                        }}
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        disabled={props.loading}
                        variant="outlined"
                        required
                        fullWidth
                        id="phone"
                        label="Phone Number"
                        name="phone"
                        type="tel"
                        datatype="number"
                        value={phoneNumber === null? '': phoneNumber}
                        onChange={(e) => {
                            setPhoneNumber(+e.target.value === 0? null: +e.target.value)
                        }}
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        disabled={props.loading}
                        variant="outlined"
                        required
                        fullWidth
                        name="password"
                        label="Password"
                        type="password"
                        id="password"
                        autoComplete="current-password"
                        value={password === null? '': password}
                        onChange={(e) => {
                            setPassword(e.target.value === ''? null: e.target.value)
                        }}
                    />
                </Grid>
                <Grid item xs={12}>
                <input
                    style={{ display: 'none' }}
                    id="raised-button-file"
                    type="file"
                    onChange={(e) => {
                        setVerifyDoc(e.target.files[0]);
                    }}
                />
                <label htmlFor="raised-button-file">
                    <Button variant="outlined" component="span">
                        Upload Verification Document
                    </Button>
                </label> 
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
                    Sign Up
                </Button>
                <Grid container justify="flex-end">
                    <Grid item style={!props.loading? {}:{display: "none"}}>
                        <Link href="#" variant="body2" onClick={props.handleSignInOpen}>
                            Already have an account? Sign in
                        </Link>
                    </Grid>
                </Grid>
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
    else if(!props.loading && props.token){
        signUpIcon = <Alert severity="success" style={{margin: "10px 0"}}>SignUp Successfull</Alert>;
        Router.push(props.redirectPath);
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
                        Sign up as
                    </div>
                    <FormControl disabled={props.loading}>
                        <NativeSelect
                            id="demo-customized-select-native"
                            value={userType.toLowerCase()}
                            onChange={handleUserTypeChange}
                            input={<BootstrapInput />}
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
        token: authReducer.token,
        redirectPath: authReducer.authRedirectPath,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        dispatchSignUp: (userType: string, reqBody:any) => dispatch(authSignUp(userType, reqBody)),
        clearErrors: () => dispatch(authClearErrors())
    }
}


export default React.memo(connect(mapStateToProps, mapDispatchToProps)(SignUp));