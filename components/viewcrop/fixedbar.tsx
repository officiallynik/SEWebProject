import React from 'react';

const FixedBar = (props) => {
    return (
        <div style={{
            display: "flex",
            flexDirection: "row",
            background: "#63a91f",
            borderRadius: "5px 5px 0 0",
            position: "sticky",
            top: 0,
            padding: '10px'
        }}>
            <div style={{
                width: "50%",
                display: "flex",
                flexDirection: "column",
                color: "white"
            }}>
                <div>Rice</div>
                <div>150</div>
                <div>Bangalore, Karnataka</div>
            </div>
            <div style={{
                width: "50%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center"
            }}>
                <img src="/dummy/ubuntu1.jpg" style={{width: "60%"}} />
            </div>
        </div>
    );
};

export default FixedBar;