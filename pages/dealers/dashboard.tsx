import { Button, Drawer, Icon, LinearProgress } from '@material-ui/core';
import { List, DoneAll, Favorite, AccountCircle, Refresh, Star } from '@material-ui/icons';
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
import { myListings } from '../../helpers/dummyData';
import Router from 'next/router'

import { notifyAction } from '../../store/actions/notifyAction';

const Dashboard = (props) => {

    let dashboard = <CustomLinearProgress />;
    const farmerFields = ["Crop Name", "Price(Q)", "Quantity(Q)", "Type", "My Bid(Rs/Q)"];


    const [loadDone, setLoadDone] = useState(false);
    const [userProfileSidebar, setUserProfileSidebar] = useState(false);
    const [myBiddings, setMyBiddings] = useState(null);
    const [isDone, setIsDone] = useState([false, false]);
    const [firstTime, setFirstTime] = useState(true);
    const [refresh, setRefresh] = useState(true);
    const [reqTypeSold, setReqTypeSold] = useState("false");

    const [noDataMsg, setNoDataMsg] = useState("");

    const [acceptedOrders, setAcceptedOrders] = useState<number|null>(null);
    const [activeOrders, setActiveOrders] = useState<number|null>(null);

    const handleDisplayProfileSidebar = () => {
        // console.log("Clicked");
        setUserProfileSidebar(true);
    }

    useEffect(() => {
        Axios.get("/dealer/view/bids", {
            params: {
                "bid_status": "accepted"
            },
            headers: {
                "Authorization": `Bearer ${props.token}`
            }
        })
        .then(res => {
            console.log(res.data)
            setAcceptedOrders(res.data.length);
        })
        .catch(err => {
            console.log(err);
            if(err.response.status === 404){
                setAcceptedOrders(0);
            }
        })
    }, []);

    const fetchMyListings = (type) => {
        Axios.get("/dealer/view/bids", {
            params: {
                "bid_status": type
            },
            headers: {
                "Authorization": `Bearer ${props.token}`
            }
        })
            .then(res => {
                console.log("[dealer]", res.data);
                if(type === "active"){
                    setActiveOrders(res.data.length);
                }
                else{
                    setAcceptedOrders(res.data.length);
                }
                const data = []
                res.data.forEach(item => {
                    let myPrice = null;
                    item.biddings.forEach(bid => {
                        if(bid.dealer === props._id){
                            myPrice = bid.bid_val
                        }
                    });



                    // console.log("[my price]", myPrice);

                    data.push({
                        name: item.name,
                        price: item.MSP,
                        quantity: item.quantity,
                        type: item.type,
                        _id: item._id,
                        img: item.thumbnail,
                        imgs: item.snapshots,
                        variety: item.variety,
                        pincode: item.pincode,
                        owner: item.owner,
                        myBid: myPrice,
                        sold: item.sold
                    })
                })
                setMyBiddings(data);
                console.log(data);
            })
            .catch(err => {
                setMyBiddings([]);
                if(err.response.status === 404){
                    setNoDataMsg("No bids on any crop, try bidding in find crops!")
                    if(type === "active"){
                        setActiveOrders(0);
                    }
                    else{
                        setAcceptedOrders(0);
                    }
                }
                else{
                    setNoDataMsg("Something went wrong please try again later")
                }

            })
            .finally(() => {
                setLoadDone(true);
                setRefresh(false);
            })
        // setMyListing(myListings);
        // setLoadDone(true);
        // setRefresh(false);
    }

    useEffect(() => {
        if (props.token && props.userType !== "dealer") {
            Router.push("/");
            props.dispatchRedirection("Access Denied, Login as Dealer", 3, "error")
        }

        if (props.token && refresh) {
            console.log("fetching ", props.token);
            setMyBiddings(null);
            fetchMyListings(reqTypeSold);
        }
    }, [props.token, refresh, props.userType, reqTypeSold]);

    useEffect(() => {
        if (props.loading) {
            setIsDone([true, false]);
        }
        if (!props.loading && isDone[0]) {
            setIsDone([true, true]);
        }
    }, [props.loading])

    useEffect(() => {
        setUserProfileSidebar(false);
    }, [useWindowSize().width >= 860]);

    const userProfile = (
        <div>
            <Card profile>
                <CardBody profile>
                    <h4>{props.userType ? props.userType.toUpperCase() : null}</h4>
                    <h3>{props.name}</h3>
                    <p>{props.pincode}</p>
                    <p>{props.location}</p>
                    <CustomModal modalBtn={(
                        <Button variant="outlined" color="primary" onClick={() => setIsDone([false, false])}>
                            Edit Profile
                        </Button>
                    )}
                        isLoading={props.loading}
                        token={isDone[1] && !props.error}
                        exp={1000}
                    >
                        <div style={{ background: "white", borderRadius: "10px" }}>
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
                        {
                            acceptedOrders === null? "loading...":
                            <h3>
                                {
                                    acceptedOrders >= 20? 
                                    <>
                                    <Star /><Star /><Star /><Star /><Star />
                                    </>
                                    :
                                    acceptedOrders >= 15?
                                    <>
                                    <Star /><Star /><Star /><Star />
                                    </>
                                    :
                                    acceptedOrders >= 10?
                                    <>
                                    <Star /><Star /><Star />
                                    </>
                                    :
                                    acceptedOrders >= 5?
                                    <>
                                    <Star /><Star />
                                    </>
                                    :
                                    <>
                                    <Star />
                                    </>
                                }
                            </h3>
                        }
                    </div>
                </CardHeader>
            </Card>
            <Card>
                <CardHeader color="warning" stats icon>
                    <CardIcon color="warning">
                        <Icon><DoneAll /></Icon>
                    </CardIcon>
                    <div style={{ float: "right", color: "black" }}>
                        <p>Active Bids</p>
                        {
                            activeOrders === null? "loading":
                            <h3>
                                {activeOrders}
                            </h3>
                        }
                        <p>Accepted Bids</p>
                        {
                            acceptedOrders === null? "loading":
                            <h3>
                                {acceptedOrders}
                            </h3>
                        }
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
                                tabName: "Active Bids",
                                tabIcon: List,
                                tabContent: (
                                    !myBiddings ? <LinearProgress /> :
                                        <CollapsibleTable
                                            headers={farmerFields}
                                            data={myBiddings}
                                            refresh={() => {
                                                setRefresh(true);
                                                setReqTypeSold("active");
                                            }}
                                            firstTime={firstTime}
                                            setFirstTime={() => setFirstTime(false)}
                                            nodatamsg={noDataMsg}
                                            userType="dealer"
                                        />
                                ),
                                onclick: (() => console.log("clicked"))
                            },
                            {
                                tabName: "Accepted Bids",
                                tabIcon: List,
                                tabContent: (
                                    !myBiddings ? <LinearProgress /> :
                                        <CollapsibleTable
                                            headers={farmerFields}
                                            data={myBiddings}
                                            refresh={() => {
                                                setRefresh(true);
                                                setReqTypeSold("accepted");
                                            }}
                                            firstTime={firstTime}
                                            setFirstTime={() => setFirstTime(false)}
                                            nodatamsg={noDataMsg}
                                            userType="dealer"
                                        />
                                ),
                                onclick: (() => console.log("clicked"))
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
        name: authReducer.name,
        pincode: authReducer.pincode,
        location: authReducer.location,
        _id: authReducer._id
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        dispatchRedirection: (msg: string, exp: number, notifyType: string) => dispatch(notifyAction(msg, exp, notifyType)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);