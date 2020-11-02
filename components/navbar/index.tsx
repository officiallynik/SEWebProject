import React, { useEffect, useState } from 'react';
import styles from '../../styles/Navbar.module.css';
import MaximizedNavBar from './maximised';
import MinimizedNavBar from './minimized';

const NavBar = (props) => {
    const [isOpen, setIsOpen] = useState(false);

    const handleMenuClick = (arg: boolean|null = null) => {
        if(arg != null) {
            setIsOpen(arg);
            return;
        }

        setIsOpen((prevState) => {
            return !prevState;
        });
    }

    return (
        <React.Fragment>
            <nav className={styles.navbar}>
                <MaximizedNavBar authenticated="farmer" />
                <MinimizedNavBar 
                    isOpen={isOpen}
                    handleMenuClick={() => handleMenuClick()} 
                    authenticated="farmer"
                />
            </nav>
        </React.Fragment>
    );
};

export default React.memo(NavBar);