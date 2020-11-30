import { Button, CircularProgress, Drawer, Icon, LinearProgress } from '@material-ui/core';
import { List, DoneAll, Favorite, AccountCircle, Chat, ChatBubble, ChatBubbleOutline, Create, Star } from '@material-ui/icons';
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

import styles from '../../styles/Expert.module.css';
import { connect } from 'react-redux';
import Axios from '../../helpers/axios';
import { notifyAction } from '../../store/actions/notifyAction';
import Router from 'next/router';
import ConnectionForm from '../../components/chat_with_experts/experts/expertConnect';
import ComposeBlog from '../../components/composeblog';
import Blogs from '../blogs';

const Experts = (props) => {

    let dashboard = <CustomLinearProgress />;
    const blogField = ["Title", "Last Modified"];

    
    const [loadDone, setLoadDone] = useState(true);
    const [userProfileSidebar, setUserProfileSidebar] = useState(false);
    // const [myListing, setMyListing] = useState(null);
    const [isDone, setIsDone] = useState([false, false]);
    const [firstTime, setFirstTime] = useState(true);
    const [refresh, setRefresh] = useState(false);

    const [connected, setConnected] = useState(false);

    const [openEditor, setOpenEditor] = useState(false);

    const [blogsList, setBlogsList] = useState([]); 
    const [fetchError, setFetchError] = useState(null);

    const [fetching, setFetching] = useState(false);

    const [blogs, setBlogs] = useState(null);

    const handleDisplayProfileSidebar = () => {
        // console.log("Clicked");
        setUserProfileSidebar(true);
    }

    const fetchMyListings = () => {
        setFetching(true);
        Axios.get("/blogs/all", {
            headers: {
                "Authorization": `Bearer ${props.token}`
            }
        })
        .then(res => {
            console.log(res.data);
            const data = res.data.map(blog => {
                return {
                    ...blog,
                    lastModified: new Date(blog.updatedAt).toDateString(),
                    isExpert: true
                }
            });

            
            console.log(data);
            
            setBlogsList(data);
            setBlogs(res.data.length);
        })
        .catch(err => {
            console.log(err);
            setBlogs(0);
            setFetchError("Something went wrong... Please try again later!");
        })
        .finally(() => {
            setFetching(false);
            setLoadDone(true);
            setRefresh(false);
        })
        // setMyListing(myListings);
        // setLoadDone(true);
        // setRefresh(false);
    }

    useEffect(() => {
        fetchMyListings();
    }, [])

    useEffect(() => {
        if(props.token && props.userType !== "expert"){
            Router.push("/");
            props.dispatchRedirection("Access Denied, Login as Expert", 3, "error")
        }

        if(props.token && refresh){
            console.log("fetching ", props.token);
            setLoadDone(true);
            // setMyListing(null);
            setFetchError(null);
            setBlogsList([]);
            fetchMyListings();
        }
    }, [props.token, refresh, props.userType]);

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
                    {/* <CustomModal modalBtn={(
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
                    </CustomModal> */}
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
                            blogs === null? "loading...":
                            <h3>
                                {
                                    blogs >= 10? 
                                    <>
                                    <Star /><Star /><Star /><Star /><Star />
                                    </>
                                    :
                                    blogs >= 7?
                                    <>
                                    <Star /><Star /><Star /><Star />
                                    </>
                                    :
                                    blogs >= 5?
                                    <>
                                    <Star /><Star /><Star />
                                    </>
                                    :
                                    blogs >= 3?
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
                        <p>Blogs written</p>
                        {
                            blogs === null? "loading...":
                            <h3>
                                {blogs}
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
                                tabName: "Chat With Users",
                                tabIcon: Chat,
                                tabContent: chatWindow,
                                onclick: (() => console.log("clicked"))
                            },
                            {
                                tabName: "Blogs",
                                tabIcon: Create,
                                tabContent: (
                                    <div style={{
                                        height: "70vh",
                                        overflow: "auto"
                                    }}>
                                        <ComposeBlog 
                                            openEditor={openEditor}
                                            setOpenEditor={setOpenEditor}
                                            token={props.token}
                                        />

                                        {!openEditor? fetching && blogsList.length === 0? 
                                            <div style={{display: "flex", justifyContent: "center"}}>
                                                <CircularProgress />
                                            </div>
                                        : fetchError?
                                            <div>
                                                Something went wrong please try again later!
                                            </div>  
                                        :
                                            <CollapsibleTable 
                                                headers={blogField}
                                                data={blogsList}
                                                refresh={() => {
                                                    setRefresh(true);
                                                }}
                                                firstTime={firstTime}
                                                setFirstTime={() => setFirstTime(false)}
                                                nodatamsg={"Write some blogs and help farmers and dealers!"}
                                            />
                                        :
                                            null
                                        }
                                    </div>
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