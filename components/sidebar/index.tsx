import React from 'react';

import styles from '../../styles/Sidebar.module.css';

const SideBar = (props) => {
    return (
        <div className={styles.sidebar}>
            {props.children}
        </div>
    );
};

export default SideBar;