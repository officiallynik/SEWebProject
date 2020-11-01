import React, { useEffect, useState } from 'react';
import styles from '../../styles/Navbar.module.css';
import MaximizedNavBar from './maximised';
import MinimizedNavBar from './minimized';

import { authCheckState } from '../../store/actions/authAction';
import { connect } from 'react-redux';
import CustomLinearProgress from '../linearprogress';

const NavBar = (props) => {
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        props.onTryAutoSignup();
    }, [props.onTryAutoSignup]);

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
                <MaximizedNavBar />
                <MinimizedNavBar 
                    isOpen={isOpen}
                    handleMenuClick={() => handleMenuClick()} 
                />
            </nav>
            {
                props.loading? <CustomLinearProgress />: null
            }
        </React.Fragment>
    );
};

const mapStateToProps = ({ authReducer }) => {
	return {
		loading: authReducer.loading,
	};
};

const mapDispatchToProps = dispatch => {
	return {
		onTryAutoSignup: () => dispatch(authCheckState()),
	};
};


export default React.memo(connect(mapStateToProps, mapDispatchToProps)(NavBar));