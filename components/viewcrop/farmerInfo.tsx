import { Button, CircularProgress, IconButton, Table, TableBody, TableCell, TableContainer, TableRow } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import Axios from '../../helpers/axios';
import { notifyAction } from '../../store/actions/notifyAction';
import CustomLinearProgress from '../linearprogress';

const FarmerInfo = (props) => {

    const [farmerData, setFarmerData] = useState(null);
    const [error, setError] = useState(false);

    const [loadingFarmerData, setLoadingFarmerData] = useState(true);

    useEffect(() => {
        Axios.get("/farmer/view/public/" + props.data.owner)
        .then(res => {
            console.log(res.data);
            setFarmerData({
                name: res.data.name,
                age: res.data.age,
                phone: res.data.phone,
                location: res.data.location,
                pincode: res.data.pincode
            })
        })
        .catch(err => {
            console.log(err);
            setError(true);
        })
        .finally(() => {
            setLoadingFarmerData(false);
        })
    }, []);

    return (
        <div style={{ overflow: "auto", maxHeight: "400px", height: "auto" }}>
            {
                props.data.imgs.length === 0? null:
                <div style={{display: "flex", overflow: "auto", height: "150px"}}>
                    {
                        props.data.imgs.map(img => {
                            console.log(img);
                            return (
                                <img src={`https://fathomless-tundra-87077.herokuapp.com/images/${img}`} 
                                    key={img}
                                    style={{width: "50%", paddingRight: "5px"}} 
                                />
                            );
                        })
                    }
                </div>
            }
            
                    {
                        loadingFarmerData? <CustomLinearProgress />:
                        !farmerData? (error? <div style={{textAlign: "center"}}>Something went wrong fetchhing farmer data, please try again later!</div>: <CustomLinearProgress />):
                        <div style={{padding: "20px"}}>
                            <h3>
                                Farmer Info:
                            </h3>
                            <div>Name: {farmerData.name}</div>
                            <div>Age: {farmerData.age}</div>
                            <div>Phone No.: {farmerData.phone}</div>
                            <div>Location: {farmerData.location}</div>
                            <div>Pincode: {farmerData.pincode}</div>
                        </div>
                    }
        </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(FarmerInfo);