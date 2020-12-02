import { Button, Drawer, Icon, LinearProgress } from '@material-ui/core';
import { List, DoneAll, Favorite, AccountCircle, Star } from '@material-ui/icons';
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
import { notifyAction } from '../../store/actions/notifyAction';
import Router from 'next/router';
import { copyFileSync } from 'fs';

const Farmers = (props) => {

    let dashboard = <CustomLinearProgress />;
    const farmerFields = ["Crop Name", "Price", "Quantity", "Type", "Total Bids"];

    
    const [loadDone, setLoadDone] = useState(false);
    const [userProfileSidebar, setUserProfileSidebar] = useState(false);
    const [myListing, setMyListing] = useState(null);
    const [isDone, setIsDone] = useState([false, false]);
    const [firstTime, setFirstTime] = useState(true);
    const [refresh, setRefresh] = useState(true);
    const [reqTypeSold, setReqTypeSold] = useState("false");

    const [completedOrders, setCompletedOrders] = useState<number|null>(null);
    const [activeOrders, setActiveOrders] = useState<number|null>(null);

    const handleDisplayProfileSidebar = () => {
        // console.log("Clicked");
        setUserProfileSidebar(true);
    }

    useEffect(() => {
        Axios.get("/crops/view", {
            headers: {
                "Authorization": `Bearer ${props.token}`
            },
            params: {
                sold: "true"
            }
        })
        .then(res => {
            setCompletedOrders(res.data.length);
        })
        .catch(err => {
            console.log(err);
            setCompletedOrders(0);
        })
    }, [])

    const fetchMyListings = (type) => {
        Axios.get("/crops/view", {
            headers: {
                "Authorization": `Bearer ${props.token}`
            },
            params: {
                sold: type
            }
        })
        .then(res => {
            console.log(res.data);
            const data = []
            if(type === "true"){
                setCompletedOrders(res.data.length);
            }
            else{
                setActiveOrders(res.data.length)
            }
            res.data.forEach(item => {
                data.push({
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
                    pincode: item.pincode,
                    sold: item.sold,
                    faqs: item.faqs
                })
            })
            setMyListing(data);
            console.log(data);
        })
        .catch(err => {
            console.log(err);
            setMyListing([]);
            if(type === "true"){
                setCompletedOrders(0);
            }
            else{
                setActiveOrders(0);
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
        if(props.token && props.userType !== "farmer"){
            console.log("not farmer")
            Router.push("/");
            props.dispatchRedirection("Access Denied, Login as Farmer", 3, "error")
        }

        if(props.token && refresh){
            console.log("fetching ", props.token);
            setMyListing(null);
            fetchMyListings(reqTypeSold);
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
    
    const userProfile = (
        <div>
            <Card profile>
                <CardBody profile>
                    <h4>{props.userType? props.userType.toUpperCase(): null}</h4>
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
                        {
                            completedOrders === null || activeOrders === null? "loading...":
                            <h3>
                                {
                                    completedOrders+activeOrders >= 30? 
                                    <>
                                    <Star /><Star /><Star /><Star /><Star />
                                    </>
                                    :
                                    completedOrders+activeOrders >=20?
                                    <>
                                    <Star /><Star /><Star /><Star />
                                    </>
                                    :
                                    completedOrders+activeOrders >= 10?
                                    <>
                                    <Star /><Star /><Star />
                                    </>
                                    :
                                    completedOrders+activeOrders >= 5?
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
                        <p>Active Orders</p>
                        <h3>
                            {
                                activeOrders === null? "loading...": 
                                activeOrders
                            }
                        </h3>
                        <p>Completed Orders</p>
                        <h3>
                            {
                                completedOrders === null? "loading...": 
                                completedOrders
                            }
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
                                tabName: "My listings",
                                tabIcon: List,
                                tabContent: (
                                    !myListing? <LinearProgress /> : 
                                    <CollapsibleTable 
                                        headers={farmerFields}
                                        data={myListing}
                                        refresh={() => {
                                            setRefresh(true);
                                            setReqTypeSold("false");
                                        }}
                                        firstTime={firstTime}
                                        setFirstTime={() => setFirstTime(false)}
                                        nodatamsg={"No ongoing bids, try selling something!"}
                                        userType="farmer"
                                    />
                                ),
                                onclick: (() => console.log("clicked"))
                            },
                            {
                                tabName: "Completed Orders",
                                tabIcon: DoneAll,
                                tabContent: (
                                    !myListing? <LinearProgress /> : 
                                    <CollapsibleTable 
                                        headers={farmerFields}
                                        data={myListing}
                                        refresh={() => {
                                            setRefresh(true);
                                            setReqTypeSold("true");
                                        }}
                                        firstTime={firstTime}
                                        setFirstTime={() => setFirstTime(false)}
                                        nodatamsg={"No crops selled, we will notify any potential buyer!"}
                                        userType="farmer"
                                    />
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
        name: authReducer.name
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        dispatchRedirection: (msg: string, exp: number, notifyType: string) => dispatch(notifyAction(msg, exp, notifyType)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Farmers);