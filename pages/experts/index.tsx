import { Button, Drawer, Icon, LinearProgress } from '@material-ui/core';
import { List, DoneAll, Favorite, AccountCircle, Chat, ChatBubble, ChatBubbleOutline, Create } from '@material-ui/icons';
import React, { useEffect, useState } from 'react';
import Card from '../../components/dashboard/card';
import CardBody from '../../components/dashboard/cardbody';
import CardHeader from '../../components/dashboard/cardheader';
import CardIcon from '../../components/dashboard/cardicon';
import CustomTabs from '../../components/dashboard/tabs';
import CustomLinearProgress from '../../components/linearprogress';
import CollapsibleTable from '../../components/listtable';
import CustomModal from '../../components/modal';
import useWindowSize from '../../helpers/getSize';
import UpdateProfile from '../../components/signup/updateprofile';

import styles from '../../styles/Farmer.module.css';
import { connect } from 'react-redux';
import Axios from '../../helpers/axios';
import { notifyAction } from '../../store/actions/notifyAction';
import Router from 'next/router';
import ConnectionForm from '../../components/chat_with_experts/experts/expertConnect';

const Experts = (props) => {

    let dashboard = <CustomLinearProgress />;
    const farmerFields = ["Crop Name", "Price", "Quantity", "Type", "Total Bids"];

    
    const [loadDone, setLoadDone] = useState(false);
    const [userProfileSidebar, setUserProfileSidebar] = useState(false);
    // const [myListing, setMyListing] = useState(null);
    const [isDone, setIsDone] = useState([false, false]);
    const [firstTime, setFirstTime] = useState(true);
    const [refresh, setRefresh] = useState(true);
    const [reqTypeSold, setReqTypeSold] = useState("false");

    const [connected, setConnected] = useState(false);
    const [history, setHistory] = useState(null);

    const handleDisplayProfileSidebar = () => {
        // console.log("Clicked");
        setUserProfileSidebar(true);
    }

    // const fetchMyListings = (type) => {
    //     Axios.get("/crops/view", {
    //         headers: {
    //             "Authorization": `Bearer ${props.token}`
    //         },
    //         params: {
    //             sold: type
    //         }
    //     })
    //     .then(res => {
    //         console.log(res.data);
    //         const data = [] 
    //         res.data.forEach(item => {
    //             data.push({
    //                 name: item.name,
    //                 price: item.MSP,
    //                 quantity: item.quantity,
    //                 bids: item.biddings.length,
    //                 type: item.type,
    //                 _id: item._id,
    //                 biddings: item.biddings,
    //                 img: item.thumbnail,
    //                 imgs: item.snapshots,
    //                 variety: item.variety,
    //                 pincode: item.pincode
    //             })
    //         })
    //         setMyListing(data);
    //         console.log(data);
    //     })
    //     .catch(err => {
    //         console.log(err);
    //     })
    //     .finally(() => {
    //         setLoadDone(true);
    //         setRefresh(false);
    //     })
    //     // setMyListing(myListings);
    //     // setLoadDone(true);
    //     // setRefresh(false);
    // }

    useEffect(() => {
        if(props.userType && props.userType !== "expert"){
            Router.push("/");
            props.dispatchRedirection("Access Denied, Login as Expert", 3, "error")
        }

        if(props.token && refresh){
            console.log("fetching ", props.token);
            setLoadDone(true);
            // setMyListing(null);
            // fetchMyListings(reqTypeSold);
        }
    }, [props.token, refresh, props.userType, reqTypeSold]);

    useEffect(() => {
        if(props.loading){
            setIsDone([true, false]);
        }
        if(!props.loading && isDone[0]){
            setIsDone([true, true]);
        }
    }, [props.loading])

    useEffect(() => {
        setUserProfileSidebar(false);
    }, [useWindowSize().width >= 860]);

    let chatWindow = (
        <ConnectionForm expertId={props._id} expertName={props.name} onConnection={() => setConnected(true)} />
    );

    if(connected){
        chatWindow = (
            <div>
                
            </div>
        )
    }
    
    const userProfile = (
        <div>
            <Card profile>
                <CardBody profile>
                    <h4>{props.userType? props.userType.toUpperCase(): null}</h4>
                    <h3>{props.name}</h3>
                    {/* <p>{props.pincode}</p> */}
                    {/* <p>{props.location}</p> */}
                    <CustomModal modalBtn={(
                            <Button variant="outlined" color="primary" onClick={() => setIsDone([false, false])}>
                                Edit Profile
                            </Button>
                        )}
                        isLoading={props.loading}
                        token={isDone[1] && !props.error}
                        exp={1000}
                    >
                        <div style={{background: "white", borderRadius: "10px"}}>
                            <UpdateProfile />
                        </div>
                    </CustomModal>
                </CardBody>
            </Card>
            <Card>
                <CardHeader color="warning" stats icon>
                    <CardIcon color="warning">
                        <Icon><Favorite /></Icon>
                    </CardIcon>
                    <div style={{ float: "right", color: "black" }}>
                        <p>Rating</p>
                        <h3>
                            Coming Soon
                        </h3>
                    </div>
                </CardHeader>
            </Card>
            <Card>
                <CardHeader color="warning" stats icon>
                    <CardIcon color="warning">
                        <Icon><DoneAll /></Icon>
                    </CardIcon>
                    <div style={{ float: "right", color: "black" }}>
                        <p>Completed Orders</p>
                        <h3>
                            Coming Soon
                        </h3>
                    </div>
                </CardHeader>
            </Card>
        </div>
    );

    if (loadDone) {
        dashboard = (
            <div className={styles.wrapper}>
                <div className={styles.dashboard}>
                    <CustomTabs
                        title="Dashboard"
                        headerColor="primary"
                        tabs={[
                            {
                                tabName: "Chat With Users",
                                tabIcon: Chat,
                                tabContent: chatWindow,
                                onclick: (() => console.log("clicked"))
                            },
                            {
                                tabName: "Blogs",
                                tabIcon: Create,
                                tabContent: (
                                    <LinearProgress />
                                    // <CollapsibleTable 
                                    //     headers={farmerFields}
                                    //     data={myListing}
                                    //     refresh={() => {
                                    //         setRefresh(true);
                                    //         setReqTypeSold("true");
                                    //     }}
                                    //     firstTime={firstTime}
                                    //     setFirstTime={() => setFirstTime(false)}
                                    // />
                                )
                            }
                        ]}
                    />
                </div>
                <div className={styles.userprofile}>
                    {userProfile}
                </div>
                <div className={styles.userprofilebtn}>
                    <Button onClick={handleDisplayProfileSidebar}>
                        <AccountCircle />
                    </Button>
                    <Drawer anchor="right" open={userProfileSidebar} onBackdropClick={() => setUserProfileSidebar(false)}>
                        <div style={{ padding: "0 10px", background: "#bcbcbc", height: "100%" }}>
                            {userProfile}
                        </div>
                    </Drawer>
                </div>
            </div>
        )
    }

    return dashboard;
};

const mapStateToProps = ({ authReducer }) => {
    return {
        loading: authReducer.loading,
        error: authReducer.error,
        token: authReducer.token,
        userType: authReducer.userType,
        pincode: authReducer.pincode,
        location: authReducer.location,
        name: authReducer.name,
        _id: authReducer._id
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        dispatchRedirection: (msg: string, exp: number, notifyType: string) => dispatch(notifyAction(msg, exp, notifyType)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Experts);