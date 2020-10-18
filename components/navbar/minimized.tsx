import { Divider, Drawer, List, ListItem, ListItemText } from '@material-ui/core';
import React from 'react';

import styles from '../../styles/Navbar.module.css';

interface props {
    isOpen: boolean,
    handleOnClose: Function
}

const MinimizedNavBar = (props: props) => {

    return (
        <div className={styles.minimizednav}>
            <div className={styles.navwrapper}>
                <div>HAM</div>
                <div>BRAND</div>
                <div>ACC</div>
            </div>
            <Drawer anchor="left" open={props.isOpen} onClose={props.handleOnClose()}>
                <List>
                    <ListItem>
                        <ListItemText primary="Find Dealer" />
                    </ListItem>
                    <ListItem>
                        <ListItemText primary="Find Crops" />
                    </ListItem>
                    <ListItem>
                        <ListItemText primary="Loan/Insurance" />
                    </ListItem>
                </List>
                <Divider />
                <List>
                    <ListItem>
                        <ListItemText primary="E-Shop" />
                    </ListItem>
                    <ListItem>
                        <ListItemText primary="Account" />
                    </ListItem>
                </List>
            </Drawer> 
        </div>
    );
};

export default MinimizedNavBar;