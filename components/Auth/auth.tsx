import { Button, ClickAwayListener, Grow, MenuItem, MenuList, Paper, Popper } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { authLogout } from '../../store/actions/authAction';
import SignIn from '../login';
import CustomModal from '../modal';
import SignUp from '../signup';
import Router from 'next/router';
import TempNotifications from '../tempnotifications';
import Axios from '../../helpers/axios';

const AuthComponent = (props) => {
    const [isLogin, setIsLogin] = useState(true);
    const [openProfile, setOpenProfile] = React.useState(null);

    const [notifications, setNotifications] = useState(0);
    const [notifficationIds, setNotificationIds] = useState([]);
    const [openNotifications, setOpenNotifications] = useState(false);
    const [notificationMsgs, setNotificationsMsgs] = useState([
    ]);

    const [currentNotification, setCurrentNotification] = useState(null);

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

    const handleNotificationsOpen = () => {
        handleCloseProfile();
        setOpenNotifications(true);
    };


    const handleNotificationsClose = () => {
        setOpenNotifications(false);
    };

    const handleNotificationRemove = (index) => {
        // console.log(index, "closing");
        const msg = [...notificationMsgs][index];
        Axios.post(`/${props.userType}/notifications/delete/${msg._id}`)
        .then(res => {
            const msgs = [...notificationMsgs];
            msgs.splice(index, 1);
            const ids = [...notifficationIds];
            ids.splice(index, 1);
            setNotificationIds(ids);
            setNotificationsMsgs(msgs);
            setNotifications((prevState) => {
                return prevState - 1;
            });
        })
        .catch(err => {
            console.log(err);
        })
    }

    const handleNotificationOnClicked = (index) => {
        setCurrentNotification("loading");

        // deleting it
        const msgs = [...notificationMsgs];
        const notification = msgs[index];

        // console.log(notification)
        
        Axios.get(`/crops/view/${notification.url}`).then(res => {
            console.log(res.data);
            const item = res.data;
            const data = {
                name: item.name,
                price: item.MSP,
                quantity: item.quantity,
                bids: item.biddings.length,
                type: item.type,
                _id: item._id,
                biddings: item.biddings,
                img: item.thumbnail,
                imgs: item.snapshots,
                variety: item.variety,
                pincode: item.pincode
            }

            console.log(data);

            setCurrentNotification(data);
        })
        .catch(err => {
            console.log(err);
        })

        //going to url pending

    };

    useEffect(() => {
        // console.log("auth useEffect")
        let reqInt = null;
        // console.log(props.token, props.userType)
        if(props.token && ["farmer", "dealer"].includes(props.userType)){
            Axios.get(`/${props.userType}/notifications/view`, {
                headers: {
                    "Authorization": `Bearer ${props.token}`
                }
            })
            .then(res => {
                // console.log(res.data);
                setNotificationsMsgs((prevState) => {
                    let newData = res.data.filter(notification => !notifficationIds.includes(notification._id));
                    const data = [...newData, ...prevState];
                    return data;
                });

                setNotificationIds(prevState => {
                    let newIds = res.data.map(notification => notification._id)
                    newIds = newIds.filter(id => !prevState.includes(id));
                    return [...newIds, ...prevState]; 
                }); 

                setNotifications(prevState => prevState + res.data.length);
            })
            .catch(e => {
                console.log("excepttion", e);
            });

            reqInt = setInterval(() => {
                Axios.get('/farmer/notifications/view', {
                    headers: {
                        "Authorization": `Bearer ${props.token}`
                    }
                })
                .then(res => {
                    // console.log(res.data);
                    setNotificationsMsgs((prevState) => {
                        let newData = res.data.filter(notification => !notifficationIds.includes(notification._id));
                        const data = [...newData, ...prevState];
                        return data;
                    });
    
                    setNotificationIds(prevState => {
                        let newIds = res.data.map(notification => notification._id)
                        newIds = newIds.filter(id => !prevState.includes(id));
                        return [...newIds, ...prevState]; 
                    }); 

                    setNotifications(prevState => prevState + res.data.length);
                })
                .catch(e => {
                    // console.log("excepttion", e);
                })
            }, 1000*60);
        }

        if(!props.token && reqInt){
            // console.log("clearing interval...", reqInt);
            clearInterval(reqInt);
            setNotifications(0);
            setNotificationsMsgs([]);
        }

        return () => {
            if(reqInt){
                clearInterval(reqInt);
            }
            setNotifications(0);
            setNotificationsMsgs([]);
        }

    }, [props.token, props.userType])

    const login = (
        <CustomModal
            modalBtn={props.modalBtn || <div>Login</div>}
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
        <div style={{ maxHeight: "200px", overflow: "auto", display: "flex", flexDirection: "column" }}>
            <MenuItem
                onClick={handleNotificationsOpen}
                style={{ borderBottom: "1px solid black" }}
            >
                Notifications 
                <span 
                    style={{
                        marginLeft: "10px",
                        backgroundColor: "black",
                        color: "white",
                        padding: "10px",
                        borderRadius: "100%",
                        display: "flex",
                        justifyContent: "center",
                        height: "15px",
                        width: "15px",
                        fontSize: "12px",
                        alignItems: "center"
                    }}
                
                >{notifications}</span>
            </MenuItem>
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
                style={{ background: "white", marginTop: "11px", marginRight: "54px", zIndex: 100 }}
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
                                        style={{ borderTop: "1px solid black" }}
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

    useEffect(() => {
        if (!props.token) {
            Router.push(props.redirectPath);
        }
    }, [props.token])

    return (
        <div>
            <div style={{ display: props.token ? "none" : "block" }}>{login}</div>
            <div style={{ display: !props.token ? "none" : "block" }}>{profile}</div>
            <TempNotifications
                open={openNotifications}
                handleClose={handleNotificationsClose}
                notifications={notifications}
                messages={notificationMsgs}
                notificationOnClicked={handleNotificationOnClicked}
                data={currentNotification}
                handleNotificationRemove={(index) => handleNotificationRemove(index)}
            />
        </div>
    );
}

const mapStateToProps = ({ authReducer }) => {
    return {
        loading: authReducer.loading,
        token: authReducer.token,
        userType: authReducer.userType,
        redirectPath: authReducer.authRedirectPath
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        dispatchLogout: (userType, token) => dispatch(authLogout(userType, token)),
    }
}

export default React.memo(connect(mapStateToProps, mapDispatchToProps)(AuthComponent));