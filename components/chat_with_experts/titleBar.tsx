import React from 'react';

import styles from '../../styles/ChatWithExperts.module.css';

const TitleBar = () => {
    return (
        <div className={styles.titlebar}>
            <div className={styles.status}>
                Status of Chat
            </div>
            <div className={styles.options}>
                <div className={styles.settings}>***</div>
                <div className={styles.closebtn}>X</div>
            </div>
        </div>
    )
};

export default TitleBar;