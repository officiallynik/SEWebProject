import React, { useState } from 'react';
import socketioSetup from '../../helpers/socketioSetup';

import styles from '../../styles/ChatWithExperts.module.css';
import MessageList from './messageList';
import TextComposer from './textComposer';
import TitleBar from './titleBar';

const ChatWithExperts = () => {
    const [isOpen, setIsOpen] = useState(false);

    const handleChatButtonClick = () => {
        setIsOpen((prevState) => {
            return !prevState;
        });
    };

    

    console.log("Rendering");

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

    let chatScreen = isOpen? (
        <div className={`${styles.chatscreen} ${isOpen? styles.show: null}`}>
            <TitleBar />
            <MessageList />
            <TextComposer />
        </div>
    ) : null;

    return(
        <>
            {button}
            {chatScreen}
        </>
    )
};

export default React.memo(ChatWithExperts);