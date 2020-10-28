import React, { useState } from 'react';
import { connect } from 'react-redux';
import SignIn from '../login';
import CustomModal from '../modal';
import SignUp from '../signup';

const AuthComponent = (props) => {
    const [isLogin, setIsLogin] = useState(true);
    return (
        <CustomModal
            modalBtn={<div>Login</div>}
            isLoading={props.loading}
            token={props.token}
            exp={1000}
        >
            <div style={{ backgroundColor: "white", borderRadius: "10px" }}>
                {
                    isLogin ? <SignIn handleSignUpOpen={() => setIsLogin(false)} /> :
                        <SignUp handleSignInOpen={() => setIsLogin(true)} />
                }
            </div>
        </CustomModal>
    );
}

const mapStateToProps = ({ authReducer }) => {
    return {
        loading: authReducer.loading,
        token: authReducer.token
    }
}

export default React.memo(connect(mapStateToProps)(AuthComponent));