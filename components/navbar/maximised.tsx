import React from 'react';
import styles from '../../styles/Navbar.module.css';

import Container from '@material-ui/core/Container';

const MaximizedNavBar = () => {
    console.log("rendering");
    return (
        <div className={styles.maximizednav}>
            <Container maxWidth="md">
                        <div className={styles.navwrapper}>
                            <div className={styles.brand} />
                            <div className={styles.navoption}>
                                Find Dealer
                            </div>
                            <div className={styles.navoption}>
                                Find Crops
                            </div>
                            <div className={styles.navoption}>
                                Loan/Insurance
                            </div>
                            <div className={styles.navoption}>
                                E-Shop
                            </div>
                        </div>
                </Container>
        </div>
    );
};

export default MaximizedNavBar;