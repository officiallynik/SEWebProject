import React from 'react';
import useWindowSize from '../../helpers/getSize';

import styles from '../../styles/Topbar.module.css';

const TopBar = (props) => {
    return (
        <div className={styles.topbar}>
            {useWindowSize().width <= 760? 
                (
                    <div className={styles.opensidebar}
                        onClick={props.handleSideBarOpen}
                    >
                        {props.sidebarname || "open sidebar"}
                    </div>
                ):
                null
            }
            {props.children}
        </div>
    );
};

export default React.memo(TopBar);