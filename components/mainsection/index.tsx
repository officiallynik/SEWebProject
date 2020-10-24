import React from 'react';

import styles from '../../styles/Mainsection.module.css';

const MainSection = (props) => {
    return (
        <div className={styles.mainsection}>
            {props.children}
        </div>
    );
};

export default React.memo(MainSection);