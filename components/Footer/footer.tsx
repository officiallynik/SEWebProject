import { createGenerateClassName } from '@material-ui/core';
import React from 'react'
import useStyles from './stylesFooter'
import {TextField,Button} from "@material-ui/core";

const Footer = () => {

    const classes = useStyles();

    return (
        <div className={classes.footer}>
            <div className={classes.container1}>
                <div className={classes.container1Div}>
                    <h3>About</h3>
                    <p>This website connects farmers to local dealers and
                       increase thier chances of getting higher price for their crops
                    </p>
                </div>
                <div className={classes.container1Div}>
                    
                    <table className={classes.table}>
                        <th></th>
                        <th><h3>Quick Links</h3></th>
                        <th></th>
                        <tr>
                            <td><a href='#' className={classes.a}>Home</a></td>
                            <td><a href='#' className={classes.a}>Loan/Insurance</a></td>
                            <td><a href='#' className={classes.a}>Blogs</a></td>
                        </tr>
                        
                        <tr>
                        <td><a href='#' className={classes.a}>Find Crops</a></td>
                        <td><a href='#' className={classes.a}>Weather forecast</a></td>
                        <td><a href='#' className={classes.a}>Find Dealers</a></td>
                        </tr>
                        <tr>
                            <td></td>
                            <td><a href='#' className={classes.a}>Chat with experts</a></td>
                            <td></td>
                        </tr>
                    </table>

                </div>
                <div className={classes.container1Div}>
                    <h3>Write to us</h3>
                    <div className={classes.container1Div3}>
                        <div>
                            <div>
                            <TextField
                                variant="filled"
                                label="Email"
                                color="secondary"
                                size="small"
                                className={classes.txtPlaceBid}
                            />
                            </div>
                            <div>
                            <TextField
                                variant="filled"
                                label="Message"
                                color="secondary"
                                size="small"
                                className={classes.txtPlaceBid}
                            />
                            </div>
                        </div>
                        <div  className={classes.btnSend}>
                            <Button
                                variant="contained"
                                color="secondary"
                                className={classes.btnPlaceBid}
                                size="small"
                            >
                                Send
                            </Button>
                        </div>
                        
                    </div>
                   
                    
                </div>
            </div>
            <div className={classes.container2}>
                <p className={classes.container2p}><a href='#' className={classes.a}>Terms and Conditions</a></p>
                <p className={classes.container2p}><a href='#' className={classes.a}>Privacy policy</a></p>
                <p className={classes.container2p3}>2020 Copyright Team 7</p>
            </div>
        </div>
    );
}

export default Footer;