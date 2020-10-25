import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import { Button, makeStyles } from '@material-ui/core';
import styles from '../../styles/LoginForm.module.css';

const style = makeStyles({
    loginButton: {
        color: "white",
        backgroundColor: 'green',
        '&:hover': {
            backgroundColor: 'green',
            color: 'white'
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
        top: '35px',
        fontSize: '10px',
        '&:hover': {
            backgroundColor: 'white',
        }
    }
});

function LoginForm() {

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

    return (
        <form noValidate autoComplete="off">
            <div>
                <div className={styles.loginForm}>
                    <div className={styles.loginTitle}>
                        Login
                    </div>
                    <div className={styles.loginFormTextFields}>
                        <div>
                            <TextField
                                error
                                id="usernameTextField"
                                label="Email or Username"
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
                        <div className={styles.loginFormTextFieldsWithButton}>
                            <TextField
                                error
                                id="passwordTextField"
                                label="Password"
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
                    </div>
                    <div className={styles.loginContainer}>
                        <Button className={[styles.loginButton, classes.loginButton].join(' ')}>Login</Button>
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

export default LoginForm;