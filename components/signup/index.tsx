import React from 'react';
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
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { InputLabel } from '@material-ui/core';

function Copyright() {
    return (
        <Typography variant="body2" color="textSecondary" align="center">
            {'Copyright © '}
            <Link color="inherit" href="https://material-ui.com/">
                Farmer Portal
      </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

const SignUp = () => {

    let signUpForm = (
        <form style={{ width: '100%', marginTop: "5px" }} noValidate>
            <Grid container spacing={2}>
                <Grid item xs={9} sm={8}>
                    <TextField
                        autoComplete="fname"
                        name="fullName"
                        variant="outlined"
                        required
                        fullWidth
                        id="fullName"
                        label="Full Name"
                        autoFocus
                    />
                </Grid>
                <Grid item xs={3} sm={4}>
                    <TextField
                        variant="outlined"
                        required
                        fullWidth
                        id="age"
                        label="Age"
                        name="age"
                        autoComplete="age"
                        type="number"
                    />
                </Grid>
                <Grid item xs={6} sm={6}>
                    <TextField
                        variant="outlined"
                        required
                        fullWidth
                        id="pincode"
                        label="Pincode"
                        name="pincode"
                        autoComplete="pincode"
                        type="number"
                    />
                </Grid>
                <Grid item xs={6} sm={6}>
                    <TextField
                        variant="outlined"
                        required
                        fullWidth
                        id="land"
                        label="Land (acres)"
                        name="land"
                        autoComplete="land"
                        type="number"
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        variant="outlined"
                        required
                        fullWidth
                        id="phone"
                        label="Phone Number"
                        name="phone"
                        autoComplete="phone"
                        type="tel"
                        datatype="number"
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        variant="outlined"
                        required
                        fullWidth
                        id="location"
                        label="Location"
                        name="location"
                        autoComplete="location"
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        variant="outlined"
                        required
                        fullWidth
                        name="password"
                        label="Password"
                        type="password"
                        id="password"
                        autoComplete="current-password"
                    />
                </Grid>
            </Grid>
            <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                style={{ margin: "15px 0 10px" }}
            >
                Sign Up
                    </Button>
            <Grid container justify="flex-end">
                <Grid item>
                    <Link href="#" variant="body2">
                        Already have an account? Sign in
                            </Link>
                </Grid>
            </Grid>
        </form>
    );

    return (
        <Container component="main" maxWidth="xs">
            <CssBaseline />
            <div style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center'
            }}>
                <Avatar style={{ margin: "5px", color: "white", backgroundColor: "#3BB78F" }}>
                    <LockOutlinedIcon />
                </Avatar>
                <Typography component="h1" variant="h5">
                    Sign up
                </Typography>
                {signUpForm}
            </div>
            <Box mt={5}>
                <Copyright />
            </Box>
        </Container>
    );
}

export default SignUp;