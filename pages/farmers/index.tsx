import { Button, Drawer, Icon, LinearProgress } from '@material-ui/core';
import { List, DoneAll, Favorite, AccountCircle, Refresh } from '@material-ui/icons';
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

const Farmers = (props) => {

    let dashboard = <CustomLinearProgress />;
    const farmerFields = ["Crop Name", "Price", "Quantity", "Date", "Total Bids"];

    
    const [loadDone, setLoadDone] = useState(false);
    const [userProfileSidebar, setUserProfileSidebar] = useState(false);
    const [myListing, setMyListing] = useState(null);
    const [isDone, setIsDone] = useState([false, false]);
    const [firstTime, setFirstTime] = useState(true);
    const [refresh, setRefresh] = useState(true);

    const handleDisplayProfileSidebar = () => {
        // console.log("Clicked");
        setUserProfileSidebar(true);
    }

    const fetchMyListings = () => {
        // console.log(props.token);
        Axios.get("/crops/view/all", {
            headers: {
                "Authorization": `Bearer ${props.token}`
            }
        })
        .then(res => {
            console.log(res.data);
            const data = res.data.map(item => {
                return {
                    name: item.name,
                    price: item.MSP,
                    quantity: item.quantity,
                    bids: item.biddings.length,
                    date: new Date().toDateString(),
                    _id: item._id
                }
            })
            setMyListing(data);
            console.log(data);
        })
        .catch(err => {
            console.log(err);
        })
        .finally(() => {
            setLoadDone(true);
            setRefresh(false);
        })
    }

    useEffect(() => {
        if(props.token && refresh){
            console.log("fetching ", props.token);
            setMyListing(null);
            fetchMyListings();
        }
    }, [props.token, refresh]);

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
                    <h4>Farmer</h4>
                    <h3>Alec Thompson</h3>
                    <p>560105</p>
                    <p>Bangalore, Karnataka</p>
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
                            35/50 <small>Stars</small>
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
                            40/43 <small></small>
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
                                        refresh={() => setRefresh(true)}
                                        firstTime={firstTime}
                                        setFirstTime={() => setFirstTime(false)}
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
                                        refresh={() => setRefresh(true)}
                                        firstTime={firstTime}
                                        setFirstTime={() => setFirstTime(false)}
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
        token: authReducer.token
    }
}

export default connect(mapStateToProps)(Farmers);