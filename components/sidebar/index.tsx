import React from 'react';

import styles from '../../styles/Sidebar.module.css';

const SideBar = (props) => {
    return (
        <div className={styles.sidebar}>
            <div className={styles.sidebaroptions}>
                <div></div>
                <div className={styles.closebtn}
                    onClick={props.handleSideBarClose}
                >Close</div>
            </div>
            {props.children}
        </div>
    );
};

export default React.memo(SideBar);