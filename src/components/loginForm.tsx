import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import { Button, makeStyles } from '@material-ui/core'
import '../App.css';

const styles = makeStyles({
    formChangeButton: {
        color: "black",
        backgroundColor: 'white',
        borderRadius: '0px',
        '&:hover': {
            backgroundColor: 'white'
        }
    },
    formChangeButtonModified: {
        color: 'white',
        backgroundColor: 'lightgreen',
        borderRadius: '0px',
    },
    outLine: {
        borderColor: 'black !important',
    },
    label: {
        color: 'blue !important',
    }
});

function LoginForm() {

    const loginHandler = () => {
        setForm(loginForm);
    }

    const signupHandler = () => {
        setForm(signupForm);
    }

    const classes = styles();

    const loginForm = (
        <div className="loginForm">
            <div className="loginButton">
                <Button className={classes.formChangeButton} style={{ width: "100%" }}
                onClick={loginHandler}>Login</Button>
            </div>
            <div className="signupButton">
                <Button className={classes.formChangeButtonModified} style={{ width: "100%" }}
                onClick={signupHandler}>Sign up</Button>
            </div>
            <div style={{ paddingTop: "50px" }}>
            <div style={{ padding: "5px" , height:"200px"}}>
                <div>
                    <TextField
                        error
                        id="standard-error-helper-text"
                        label="Email"
                        style={{ width: "100%"}}
                        variant="outlined"
                        InputLabelProps={{
                            classes: {
                                root: classes.label,
                            }
                        }}
                        InputProps={{
                            classes: {
                                notchedOutline: classes.outLine
                            }
                        }}
                    />
                </div>
                <div style={{paddingTop:"20px"}}>
                    <TextField
                        error
                        id="standard-error-helper-text"
                        label="Password"
                        style={{ width: "100%" }}
                        variant="outlined"
                        InputLabelProps={{
                            classes: {
                                root: classes.label,
                            }
                        }}
                        InputProps={{
                            classes: {
                                notchedOutline: classes.outLine
                            }
                        }}
                    />
                </div>
                </div>
                <div>
                <Button style={{ width: "150px" }}>Login</Button>
            </div>
            </div>
        </div>
    );

    const signupForm = (
        <div className="loginForm">
            <div className="loginButton">
                <Button style={{ width: "100%" }}
                onClick={loginHandler}>
                    Login</Button>
            </div>
            <div className="signupButton">
                <Button style={{ width: "100%" }}
                onClick={signupHandler}>Sign up</Button>
            </div>
            <div style={{ padding: "10px"}}>
                <div style={{ float: "left" , width:"48%" , paddingBottom:"10px"}}>
                    <TextField
                        error
                        id="standard-error-helper-text"
                        label="First Name"
                        style={{ width: "100%" }}
                        variant="outlined"
                        InputLabelProps={{
                            classes: {
                                root: classes.label,
                            }
                        }}
                        InputProps={{
                            classes: {
                                notchedOutline: classes.outLine
                            }
                        }}
                    />
                </div>
                <div style={{ float: "right",width:"48%", paddingBottom:"10px"}}>
                    <TextField
                        error
                        id="standard-error-helper-text"
                        label="Last Name"
                        style={{ width: "100%" }}
                        variant="outlined"
                        InputLabelProps={{
                            classes: {
                                root: classes.label,
                            }
                        }}
                        InputProps={{
                            classes: {
                                notchedOutline: classes.outLine
                            }
                        }}
                    />
                </div>
                <div>
                    <TextField
                        error
                        id="standard-error-helper-text"
                        label="Email"
                        style={{ width: "100%" }}
                        variant="outlined"
                        InputLabelProps={{
                            classes: {
                                root: classes.label,
                            }
                        }}
                        InputProps={{
                            classes: {
                                notchedOutline: classes.outLine
                            }
                        }}
                    />
                </div>
                <div style={{ paddingTop: "10px" }}>
                    <TextField
                        error
                        id="standard-error-helper-text"
                        label="Password"
                        style={{ width: "100%" }}
                        variant="outlined"
                        InputLabelProps={{
                            classes: {
                                root: classes.label,
                            }
                        }}
                        InputProps={{
                            classes: {
                                notchedOutline: classes.outLine
                            }
                        }}
                    />
                </div>
                <div style={{ paddingTop: "10px" }}>
                    <TextField
                        error
                        id="standard-error-helper-text"
                        label="Confirm Password"
                        style={{ width: "100%" }}
                        variant="outlined"
                        InputLabelProps={{
                            classes: {
                                root: classes.label,
                            }
                        }}
                        InputProps={{
                            classes: {
                                notchedOutline: classes.outLine
                            }
                        }}
                    />
                </div>
            </div>
            <div style={{ paddingTop: "20px" , paddingBottom: "10px"}}>
                <Button style={{ width: "150px" }}>Sign up</Button>
            </div>
        </div>
    );

    const [form, setForm] = useState(loginForm);

    return (
        <form noValidate autoComplete="off">
            <div>
                {form}
            </div>
        </form>
    );
}

export default LoginForm;