import React, { useEffect, useState } from 'react';
import styles from '../../styles/Navbar.module.css';
import MaximizedNavBar from './maximised';
import MinimizedNavBar from './minimized';

const NavBar = (props) => {
    return (
        <React.Fragment>
            <nav className={styles.navbar}>
                <MaximizedNavBar />
                <MinimizedNavBar 
                    isOpen={false}
                    handleOnClose={() => {}} 
                />
            </nav>
            
            {props.children}
        </React.Fragment>
    );
};

export default React.memo(NavBar);