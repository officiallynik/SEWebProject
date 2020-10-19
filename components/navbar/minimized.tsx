import { Divider, Drawer, List, ListItem, ListItemText } from '@material-ui/core';
import React, { useEffect } from 'react';
import MenuIcon from '@material-ui/icons/Menu';

import styles from '../../styles/Navbar.module.css';

import useWindowSize from '../../helpers/getSize';

interface props {
    isOpen: boolean,
    handleMenuClick: Function
}

const MinimizedNavBar = (props: props) => {

    const screenSize = useWindowSize();

    useEffect(() => {
        if(props.isOpen){
            props.handleMenuClick(false);
        }
    }, [screenSize.width > 760]);

    return (
        <div className={styles.minimizednav}>
            <div className={styles.navwrapper}>
                <div 
                    className={styles.navmenubtn}
                    onClick={() => props.handleMenuClick()}
                >
                    <MenuIcon />
                </div>
                <div className={styles.brand}></div>
                <div>ACC</div>
            </div>
            <Drawer anchor="left" open={props.isOpen} onClose={() => props.handleMenuClick()}>
                <List>
                    <ListItem button>
                        <ListItemText primary="Find Dealer" />
                    </ListItem>
                    <ListItem button>
                        <ListItemText primary="Find Crops" />
                    </ListItem>
                    <ListItem button>
                        <ListItemText primary="Loan/Insurance" />
                    </ListItem>
                </List>
                <Divider />
                <List>
                    <ListItem button>
                        <ListItemText primary="E-Shop" />
                    </ListItem>
                    <ListItem button>
                        <ListItemText primary="Account" />
                    </ListItem>
                </List>
            </Drawer> 
        </div>
    );
};

export default MinimizedNavBar;