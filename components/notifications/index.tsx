import React from 'react';
import Snackbar from '@material-ui/core/Snackbar';
import { connect } from 'react-redux';

// import { notifyAction } from '../../store/actions/notifyAction';
import { Alert } from '@material-ui/lab';

const Notify = (props) => {
    return (
        <Snackbar
            open={props.isNotify}
            anchorOrigin={{horizontal: "left", vertical: "bottom"}}
        >
            <div style={{width: "100%"}}>
                <Alert severity={props.notifyType || "info"} >
                    {props.msg}
                </Alert>
            </div>
        </Snackbar>
    )
}

const mapStateToProps = ({ notifyReducer }) => {
    return { ...notifyReducer };
};

// const mapDispatchToProps = (dispatch) => {
//     return {
//         notify: (msg: string, exp: number) => dispatch(notifyAction(msg, exp))
//     }
// }

export default connect(mapStateToProps)(Notify);