import React, { useState } from 'react';
import socketioSetup from './helpers/chat';

import styles from '../../styles/ChatWithExperts.module.css';
import MessageList from './messageList';
import TextComposer from './textComposer';
import TitleBar from './titleBar';

import useWindowSize from '../../helpers/getSize';
import { Button } from '@material-ui/core';

import AuthComponent from '../Auth/auth';
import ConnectionForm from './clients/clientConnect';

const ChatWithExperts = props => {
    const [isOpen, setIsOpen] = useState(false);

    const [connected, setConnected] = useState(false);

    const handleChatButtonClick = () => {
        setIsOpen((prevState) => {
            return !prevState;
        });
    };

    const screenSize = useWindowSize();

    const handleSetup = () => {
        socketioSetup()
    }

    // let io = socketioSetup({
    //     id: "12345",
    //     name: "Nikhil"
    // });

    let button = (
        <div className={styles.chatwithexpertsbutton} onClick={handleChatButtonClick}>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" 
                className={!isOpen? styles.animate: null}
            >
                    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                className={isOpen? styles.animate: null}
            >
                <line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
        </div>
    );

    let chatScreen = (
        <div>
            <TitleBar />
            <MessageList />
            <TextComposer />
        </div>
    );

    if(!props.userDetail.userId){
        // console.log("fdjghfkjsh", props.userDetail.userId)
        chatScreen = (
            <div style={{background: "white", height: "100%", display: "flex", justifyContent: "center", alignItems: "center"}}>
                <AuthComponent 
                    modalBtn={(
                        <Button variant="outlined">Login to chat with experts</Button>
                    )}
                />
            </div>
        );
    }

    if(props.userDetail.userId && !connected){
        chatScreen = (
            <div style={{background: "white", height: "100%", display: "flex", justifyContent: "center", alignItems: "center"}}>
                {/* <ConnectionForm 
                    setConnected={() => setConnected(true)}
                    clientId={props.userDetail.userId}
                    clientName={props.userDetail.userName}
                    clientType={props.userDetail.userType}
                /> */}
                <div style={{padding: "15px"}}>
                    Taken down due to peerjs ssr error in nextjs in production, will be back soon 
                </div>
            </div>
        )
    }

    let chatWindow = isOpen? (
        <div className={`${styles.chatscreen} ${isOpen? styles.show: null}`}>
            {chatScreen}
        </div>
    ) : null;

    return(
        <>
            {(isOpen && screenSize.width < 460)? null: button}
            {chatWindow}
        </>
    )
};

export default React.memo(ChatWithExperts);