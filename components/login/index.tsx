import React, { useEffect, useState } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

import { authLogin, authClearErrors } from '../../store/actions/authAction';
import { connect } from 'react-redux';
import { Alert } from '@material-ui/lab';
import { CircularProgress } from '@material-ui/core';
import Router from 'next/router';

function Copyright() {
    return (
        <Typography variant="body2" color="textSecondary" align="center">
            {'Copyright © '}
            <Link color="inherit" href="#">
                Farmers Portal
      </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

const SignIn = (props) => {

    const [phoneNumber, setPhoneNumber] = useState<null|number>(null);
    const [password, setPassword] = useState<null|string>(null);
    const [remember, setRemember] = useState(false);

    useEffect(() => {
        return () => {
            setPhoneNumber(null);
            setPassword(null);
            setRemember(null);
            props.clearErrors();
        }
    }, []);

    const handleSignIn = (event) => {
        event.preventDefault();
        console.log(phoneNumber, password, remember);
        props.dispatchLogin(phoneNumber, password, remember);
    }

    let signInIcon = (
        <Avatar style={{ margin: "5px", color: "white", backgroundColor: "#3BB78F" }}>
            <LockOutlinedIcon />
        </Avatar>
    );

    if(props.loading){
            signInIcon = (
                <Avatar style={{ margin: "5px" }}>
                    <CircularProgress/>
                </Avatar>
            );
    }
    else if(!props.loading && props.token){
        signInIcon = <Alert severity="success" style={{margin: "10px 0"}}>Login Successfull</Alert>;
        Router.push(props.redirectPath);
    }
    else if(!props.loading && props.error){
        signInIcon = <Alert severity="error" style={{margin: "10px 0"}}>{props.error}</Alert>
    }
    else{
        signInIcon = (
            <Avatar style={{ margin: "5px", color: "white", backgroundColor: "#3BB78F" }}>
                <LockOutlinedIcon />
            </Avatar>
        );
    }

    return (
        <Container component="main" maxWidth="xs" style={{padding: "0 30px"}}>
            <CssBaseline />
            <div style={{display: "flex", flexDirection: "column", alignItems: "center", marginBottom: "25px"}} >
                {signInIcon}
                <Typography component="h1" variant="h5">
                    Sign In
                </Typography>
                <form style={{width: '100%', marginTop: "5px"}} noValidate>
                    <TextField
                        disabled={props.loading}
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        id="phone"
                        label="Phone Number"
                        name="phone"
                        autoComplete="phone"
                        autoFocus
                        type="tel"
                        onChange={(e) => {
                            setPhoneNumber(+e.target.value);
                        }}
                    />
                    <TextField
                        disabled={props.loading}
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        name="password"
                        label="Password"
                        type="password"
                        id="password"
                        autoComplete="current-password"
                        onChange={(e) => {
                            setPassword(e.target.value);
                        }}
                    />
                    <FormControlLabel
                        disabled={props.loading}
                        control={
                            <Checkbox value="remember" color="primary" 
                                onClick={(e) => {
                                    
                                    setRemember((prevState) => {
                                        return !prevState;
                                    })
                                }}
                            />
                        }
                        label="Remember me"
                    />
                    <Button
                        disabled={props.loading}
                        fullWidth
                        variant="contained"
                        color="primary"
                        style={{margin: "15px 0 10px"}}
                        onClick={handleSignIn}
                    >
                        Sign In
                    </Button>
                    <Grid container>
                        <Grid item style={!props.loading? {}:{display: "none"}}>
                            <Link href="#" variant="body2" onClick={props.handleSignUpOpen}>
                                {"Don't have an account? Sign Up"}
                            </Link>
                        </Grid>
                    </Grid>
                </form>
            </div>
            <Box mt={8}>
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
        dispatchLogin: (phone: number, password: string, remember: boolean) => dispatch(authLogin(phone, password, remember)),
        clearErrors: () => dispatch(authClearErrors())
    }
}

export default React.memo(connect(mapStateToProps, mapDispatchToProps)(SignIn));