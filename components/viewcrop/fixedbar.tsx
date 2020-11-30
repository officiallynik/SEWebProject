import { Button } from '@material-ui/core';
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
                <div>Name: {props.data.name}</div>
                <div>Price(per Q): {props.data.price}</div>
                <div>Quantity (Q): {props.data.quantity}</div>
                <div>Pincode: {props.data.pincode}</div>
                <div>Type: {props.data.type}</div>
                <div>Variety: {props.data.variety}</div>

                <div style={{marginTop: "3px"}}>
                    <Button variant="outlined" style={{backgroundColor: "purple", color: "white", fontSize: "12px"}}>
                        Crop Sold
                    </Button>
                </div>
            </div>
            <div style={{
                width: "50%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center"
            }}>
                <img src={`https://fathomless-tundra-87077.herokuapp.com/images/${props.data.img}`} alt="loading..." style={{width: "60%"}} />
            </div>
        </div>
    );
};

export default FixedBar;