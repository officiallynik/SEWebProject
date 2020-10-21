import { Divider } from '@material-ui/core';
import React from 'react';

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
                <div style={{width: "1px", backgroundColor: "rgba(0, 0, 0, 0.2)"}} />
                <DealerMain />
            </div>
        </div>
    )
}

export default Dealers;