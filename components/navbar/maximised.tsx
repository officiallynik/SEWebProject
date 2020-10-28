import React, { useEffect, useState } from 'react';
import styles from '../../styles/Navbar.module.css';
import Container from '@material-ui/core/Container';
import AuthComponent from '../Auth/auth';

import { notAuthenticated, typeFarmer, typeDealer, typeExpert } from '../../helpers/navOpts';

const MaximizedNavBar = (props) => {
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

    return (
        <div className={styles.maximizednav}>
            <Container maxWidth="md">
                        <div className={styles.navwrapper}>
                            <div className={styles.brand} />
                            
                            {
                                navOpts.map((navOpt) => {
                                    return (
                                        <div className={styles.navoption} key={navOpt.name}>
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

export default React.memo(MaximizedNavBar);