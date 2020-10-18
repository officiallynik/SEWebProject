import React from 'react';
import styles from '../../styles/ChatWithExperts.module.css';

interface props {
    type: string,
    msg: string
}

const MessageCard = (props: props) => {
    return (
        <div className={`${styles.messagecard} ${props.type === "user"? styles.user: styles.expert}`}>
            <div className={props.type === "user"? styles.user: styles.expert}>
                {props.msg}
            </div>
        </div>
    )
};

export default MessageCard;