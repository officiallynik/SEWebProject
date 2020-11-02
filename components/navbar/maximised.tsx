import React, { useEffect, useState } from 'react';
import styles from '../../styles/Navbar.module.css';
import Container from '@material-ui/core/Container';
import AuthComponent from '../Auth/auth';
import AddCrop from '../addcrop';

import { notAuthenticated, typeFarmer, typeDealer, typeExpert } from '../../helpers/navOpts';
import { connect } from 'react-redux';
import Router from 'next/router';

const MaximizedNavBar = (props) => {
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

    return (
        <div className={styles.maximizednav}>
            <Container maxWidth="md">
                        <div className={styles.navwrapper}>
                            <div className={styles.brand} 
                                onClick={() => {
                                    Router.push("/");
                                }}
                            />
                            
                            {
                                navOpts.map((navOpt) => {
                                    if(navOpt.path == "/sell-crop"){
                                        return <AddCrop modalBtn={
                                            (<div className={styles.navoption}>{navOpt.name}</div>)
                                        } 
                                            key={navOpt.name}    
                                        />
                                    }
                                    return (
                                        <div className={styles.navoption} key={navOpt.name} 
                                            onClick={() => {
                                                Router.push(navOpt.path);
                                            }}
                                        >
                                            {navOpt.name}
                                        </div>
                                    );
                                })
                            }

                            <div 
                                className={styles.navoption}
                            >
                                <AuthComponent />
                            </div>
                        </div>
                </Container>
        </div>
    );
};

const mapStateToProps = ({ authReducer }) => {
    return {
        userType: authReducer.userType
    }
};

export default React.memo(connect(mapStateToProps)(MaximizedNavBar));