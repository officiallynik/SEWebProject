import React from 'react';

import styles from '../../styles/ChatWithExperts.module.css';
import MessageCard from './messageCard';

const MessageList = () => {
    return (
        <div className={styles.messagelist}>
            <MessageCard type="user" msg="Hello from user" />
            <MessageCard type="expert" msg="Hello from expert" />
            <MessageCard type="expert" msg="Hello from expert" />
            <MessageCard type="expert" msg="Hello from expert" />
            <MessageCard type="expert" msg="Hello from expert" />
            <MessageCard type="expert" msg="Hello from expert" />
        </div>
    )
};

export default MessageList;