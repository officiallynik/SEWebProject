import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import { Button, makeStyles } from '@material-ui/core';
import styles from '../../styles/SignupForm.module.css';
import shadows from '@material-ui/core/styles/shadows';

const style = makeStyles({
    signupButton: {
        color: "white",
        backgroundColor: 'green',
        '&:hover': {
            backgroundColor: 'green',
            color: 'white',
            shadows: '3',
        }
    },
    outLine: {
        borderColor: 'grey !important',
    },
    label: {
        color: 'green !important',
    },
    passwordViewButton: {
        position: 'absolute',
        left: 'auto',
        right: '10px',
        top: '25px',
        fontSize: '10px',
        '&:hover': {
            backgroundColor: 'white',
        }
    }
});

function signupForm() {

    const classes = style();
    const [passwordView, setPasswordView] = useState("SHOW");
    const [username, setUsername] = useState("");
    const [password , setPassword] = useState("");

    const passwordViewHandler = () => {
        if (passwordView === 'SHOW') {
            setPasswordView('HIDE');
        } else {
            setPasswordView('SHOW');
        }
    }

    const passwordHandler = (e) => {
        setPassword(e.target.value);
    }

    return (
        <form noValidate autoComplete="off">
            <div>
                <div className={styles.signupForm}>
                    <div className={styles.signupTitle}>
                        Sign up
                    </div>
                    <div className={styles.signupFormTextFields}>
                        <div className={styles.firstNameField}>
                            <TextField
                                error
                                id="usernameTextField"
                                label="First Name"
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
                        <div className={styles.lastNameField}>
                            <TextField
                                error
                                id="usernameTextField"
                                label="Last Name"
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
                        <div className={styles.textField1}>
                            <TextField
                                error
                                id="usernameTextField"
                                label="Email or Username"
                                variant="outlined"
                                className={styles.textField}
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
                        <div className={styles.signupFormTextFieldsWithButton}>
                            <TextField
                                error
                                id="passwordTextField"
                                label="Password"
                                onChange={passwordHandler}
                                type={(passwordView==="HIDE") ? "text" : "password"}
                                className={styles.textField}
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
                            <Button onClick={passwordViewHandler} className={classes.passwordViewButton}>{passwordView}</Button>
                        </div>
                        <div className={styles.textField2}>
                            <TextField
                                error
                                id="passwordTextField"
                                label="Confirm Password"
                                onChange={passwordHandler}
                                type={(passwordView==="HIDE") ? "text" : "password"}
                                className={styles.textField}
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
                    <div className={styles.signupContainer}>
                        <Button className={[styles.signupButton, classes.signupButton].join(' ')}>Register</Button>
                    </div>
                    <div className={styles.orLoginUsing}>
                        or login using
                    </div>
                    <div className={styles.iconsContainer}>
                        <div className={styles.iconContainer}>
                        <div className={styles.googleIcon}>

                        </div>
                        </div>
                        <div className={styles.iconContainer}>
                        <div className={styles.githubIcon}>

                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </form>
    );
}

export default signupForm;