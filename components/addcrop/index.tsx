import React, { useState } from 'react';
import { connect } from 'react-redux';
import CustomModal from '../modal';
import StepForm from './stepForm';

const AddCrop = (props) => {
    const [loading, setLoading] = useState(false);

    return (
        <CustomModal
            modalBtn={props.modalBtn || <div>Sell Crops</div>}
            isLoading={loading}
            exp={2000}
        >
            <div style={{ backgroundColor: "white", borderRadius: "10px" }}>
                {
                    <StepForm token={props.token} setLoading={setLoading} loading={loading} />
                }
            </div>
        </CustomModal>
    );
}

const mapStateToProps = ({ authReducer }) => {
    return {
        name: authReducer.name,
        _id: authReducer._id,
        token: authReducer.token
    }
}

export default React.memo(connect(mapStateToProps)(AddCrop));