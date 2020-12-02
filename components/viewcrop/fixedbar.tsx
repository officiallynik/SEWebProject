import { Backdrop, Button, CircularProgress, Modal } from '@material-ui/core';
import React, { useState } from 'react';
import { connect } from 'react-redux';
import Axios from '../../helpers/axios';
import { notifyAction } from '../../store/actions/notifyAction';

const FixedBar = (props) => {

    // console.log("[fixed bar]", props);

    const [loadingCropSold, setLoadingCropSold] = useState(false);
    

    const handleCropSold = () => {
        setLoadingCropSold(true);
        Axios.post(`/crops/sold/${props.data._id}`, {}, {
            headers: {
                'Authorization': `Bearer ${props.token}`
            }
        })
        .then(res => {
            console.log(res);
            props.dispatchNotify("Congratulation on selling the crop :)", 3, "success");
            props.refresh();
        })
        .catch(err => {
            console.log(err);
            props.dispatchNotify("Marking crop as sold failed, try again later!", 3, "error");
        })
        .finally(() => {
            setLoadingCropSold(false);
        })
    }

    let display = (
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

                {
                    props.userType === "dealer"?
                    <div style={{backgroundColor: "purple", width: "max-content", padding: "10px"}}>
                        My Bid: {props.data.myBid} Rs/Q
                    </div>:
                    null 
                }

                {
                    props.data.sold || props.userType !== "farmer"? null:
                    <div style={{marginTop: "3px"}}>
                        <Button variant="outlined" style={{backgroundColor: "purple", color: "white", fontSize: "12px"}}
                            onClick={handleCropSold}
                        >
                            Crop Sold
                        </Button>
                        <Button variant="outlined" style={{backgroundColor: "purple", color: "white", fontSize: "12px", marginLeft: "3px"}}
                            onClick={props.setOpenFaqs}
                        >
                            {props.faqBtn}
                        </Button>
                    </div>
                }

            </div>
            <div style={{
                width: "50%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column-reverse"
            }}>
                {
                    props.userType === "dealer"? props.data.sold === "sold"?
                    <div style={{width: "max-content", padding: "10px", color: "white"}}>
                        Crop sold out
                    </div>:
                    <div style={{width: "max-content", padding: "10px", color: "white"}}>
                        Crop in stock
                    </div>:
                    null
                }
                <img src={`https://fathomless-tundra-87077.herokuapp.com/images/${props.data.img}`} alt="loading..." style={{width: "60%"}} />
            </div>
        </div>
    )

    let backDrop = <div style={{display: "none"}} />;

    if(loadingCropSold){
        backDrop = (
            <Backdrop open={true} style={{zIndex: 100}}>
                <CircularProgress color="inherit" />
            </Backdrop>
        );
    }

    return (
        <>
            {display}
            {backDrop}
        </>
    );
};

const mapStateToProps = ({ authReducer }) => {
    return {
        token: authReducer.token
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        dispatchNotify: (msg: string, exp: number, notifyType: string) => dispatch(notifyAction(msg, exp, notifyType)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(FixedBar);