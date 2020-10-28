import { Divider, Drawer, List, ListItem, ListItemText } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import React, { useEffect, useState } from 'react';
import MenuIcon from '@material-ui/icons/Menu';

import styles from '../../styles/Navbar.module.css';

import useWindowSize from '../../helpers/getSize';
import AuthComponent from '../Auth/auth';
import AddCrop from '../addcrop';

import { notAuthenticated, typeFarmer, typeDealer, typeExpert } from '../../helpers/navOpts';
import { connect } from 'react-redux';

interface props {
    isOpen: boolean,
    handleMenuClick: Function,
    userType: string
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
        switch(props.userType) {
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
    }, [props.userType]);

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
                        navOpts.map(navOpt => {
                            if(navOpt.path == "/sell-crop"){
                                return (
                                    <AddCrop modalBtn={
                                        (<ListItem button key={navOpt.name}>
                                            <ListItemText primary={navOpt.name} />
                                        </ListItem>)
                                    } />
                                )
                            }
                            return (
                                <ListItem button key={navOpt.name}>
                                    <ListItemText primary={navOpt.name} />
                                </ListItem>
                            )
                        })
                    }

                </List>
            </Drawer> 
        </div>
    );
};

const mapStateToProps = ({ authReducer }) => {
    return {
        userType: authReducer.userType
    }
};

export default React.memo(connect(mapStateToProps)(MinimizedNavBar));