import React from 'react';
import SideBar from '../../components/sidebar';

import styles from '../../styles/Dealers.module.css';
import DealerMain from './main';
import DealerSideBar from './sidebar';
import DealerTopBar from './topbar';

const Dealers = () => {
    return (
        <div className={styles.dealers}>
            <DealerTopBar />
            <div className={styles.dealersmain}>
                <DealerSideBar />
                <DealerMain />
            </div>
        </div>
    )
}

export default Dealers;