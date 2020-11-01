import { Button, ClickAwayListener, Grow, MenuItem, MenuList, Paper, Popper } from '@material-ui/core';
import React, { useState } from 'react';
import { connect } from 'react-redux';
import { authLogout } from '../../store/actions/authAction';
import SignIn from '../login';
import CustomModal from '../modal';
import SignUp from '../signup';

const AuthComponent = (props) => {
    const [isLogin, setIsLogin] = useState(true);
    const [openProfile, setOpenProfile] = React.useState(null);

    const handleClickProfile = event => {
        if (openProfile && openProfile.contains(event.target)) {
            setOpenProfile(null);
        } else {
            setOpenProfile(event.currentTarget);
        }
    };
    const handleCloseProfile = () => {
        setOpenProfile(null);
    };

    const login = (
        <CustomModal
            modalBtn={<div>Login</div>}
            isLoading={props.loading}
            token={props.token}
            exp={1000}
        >
            <div style={{ backgroundColor: "white", borderRadius: "10px" }}>
                {
                    isLogin ? <SignIn handleSignUpOpen={() => setIsLogin(false)} /> :
                        <SignUp handleSignInOpen={() => setIsLogin(true)} />
                }
            </div>
        </CustomModal>
    );

    const Notifications = (
        <div style={{maxHeight: "200px", overflow: "auto", display: "flex", flexDirection: "column"}}>
            <MenuItem
                onClick={handleCloseProfile}
                style={{borderBottom: "1px solid black"}}
            >
                Notifications
            </MenuItem>
            <div style={{overflow: "auto", }}>
                <MenuItem
                >
                    New bid on Rice crop
                </MenuItem>
                <MenuItem
                >
                    New bid on Rice crop
                </MenuItem>
                <MenuItem
                >
                    New bid on Rice crop
                </MenuItem>
                <MenuItem
                >
                    New bid on Rice crop
                </MenuItem>
                <MenuItem
                >
                    New bid on Rice crop
                </MenuItem>
                <MenuItem
                >
                    New bid on Rice crop
                </MenuItem>
            </div>
        </div>
    )

    const profile = (
        <div>
            <div
                onClick={handleClickProfile}
            >
                Profile
                </div>
            <Popper
                open={Boolean(openProfile)}
                anchorEl={openProfile}
                transition
                style={{ background: "white", marginTop: "11px", marginRight: "54px" }}
            >
                {({ TransitionProps, placement }) => (
                    <Grow
                        {...TransitionProps}
                        style={{
                            transformOrigin:
                                placement === "bottom" ? "center top" : "center bottom"
                        }}
                    >
                        <Paper>
                            <ClickAwayListener onClickAway={handleCloseProfile}>
                                <MenuList role="menu">
                                    <div>
                                        {Notifications}
                                    </div>
                                    <MenuItem
                                        onClick={() => {
                                            handleCloseProfile()
                                            props.dispatchLogout(props.userType, props.token);
                                        }}
                                    >
                                        Logout
                                    </MenuItem>
                                </MenuList>
                            </ClickAwayListener>
                        </Paper>
                    </Grow>
                )}
            </Popper>
        </div>
    );

    return (
        <div>
            <div style={{ display: props.token ? "none" : "block" }}>{login}</div>
            <div style={{ display: !props.token ? "none" : "block" }}>{profile}</div>
        </div>
    );
}

const mapStateToProps = ({ authReducer }) => {
    return {
        loading: authReducer.loading,
        token: authReducer.token,
        userType: authReducer.userType
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        dispatchLogout: (userType, token) => dispatch(authLogout(userType, token)),
    }
}

export default React.memo(connect(mapStateToProps, mapDispatchToProps)(AuthComponent));