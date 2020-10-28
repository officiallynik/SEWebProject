import { Divider, Drawer, List, ListItem, ListItemText } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import React, { useEffect, useState } from 'react';
import MenuIcon from '@material-ui/icons/Menu';

import styles from '../../styles/Navbar.module.css';

import useWindowSize from '../../helpers/getSize';
import AuthComponent from '../Auth/auth';

import { notAuthenticated, typeFarmer, typeDealer, typeExpert } from '../../helpers/navOpts';

interface props {
    isOpen: boolean,
    handleMenuClick: Function,
    authenticated: string
}

const drawerMakeStyles = makeStyles({
    paper: {
        backgroundColor: "#f2cf43",
        backgroundImage: "linear-gradient(315deg, #f2cf43 0%, #19a186 74%)"
    },
    root: {
        width: "230px"
    }
});

const MinimizedNavBar = (props: props) => {
    const [navOpts, setNavOpts] = useState(notAuthenticated);

    useEffect(() => {
        switch(props.authenticated) {
            case "farmer":
                 setNavOpts(typeFarmer);
                return;
            case "dealer":
                 setNavOpts(typeDealer);
                return;
            case "expert":
                 setNavOpts(typeExpert);
                return;
            default:
                 setNavOpts(notAuthenticated);
        }
    }, [props.authenticated]);

    const screenSize = useWindowSize();

    const drawerStyles = drawerMakeStyles();

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
                <AuthComponent />
            </div>
            <Drawer anchor="left" 
                open={props.isOpen} 
                onClose={() => props.handleMenuClick()} 
                classes={{paper: drawerStyles.paper}}
            >
                <List classes={{root: drawerStyles.root}}>
                
                    {
                        navOpts.map(navOpt => (
                            <ListItem button key={navOpt.name}>
                                <ListItemText primary={navOpt.name} />
                            </ListItem>
                        ))
                    }

                </List>
            </Drawer> 
        </div>
    );
};

export default React.memo(MinimizedNavBar);