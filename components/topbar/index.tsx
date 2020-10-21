import React from 'react';

import styles from '../../styles/Topbar.module.css';

const TopBar = (props) => {
    return (
        <div className={styles.topbar}>
            {props.children}
        </div>
    );
};

export default TopBar;