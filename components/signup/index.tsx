import React, { useState } from 'react';
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
import { createStyles, FormControl, InputBase, InputLabel, MenuItem, NativeSelect, Select, Theme, withStyles } from '@material-ui/core';

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

const SignUp = () => {

    const [userType, setUserType] = useState("farmer");

    const handleUserTypeChange = (event: React.ChangeEvent<{ value: unknown }>) => {
        setUserType(event.target.value as string);
    };

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

    if (userType === "dealer") {
        signUpForm = (
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
                        <FormControl required fullWidth>
                            <InputLabel variant="outlined" id="demo-simple-select-required-label">Dealer Type</InputLabel>
                            <Select
                                labelId="demo-simple-select-required-label"
                                id="demo-simple-select-required"
                                variant="outlined"
                                label="Dealer Type"
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
        )
    }


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
                <Typography component="h1" variant="h5" style={{ width: "100%", display: "flex", justifyContent: "center", alignItems: "center" }}>
                    <div style={{ marginRight: "7px" }}>
                        Sign up as
                    </div>
                    <FormControl style={{}}>
                        <NativeSelect
                            id="demo-customized-select-native"
                            value={userType}
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

export default SignUp;