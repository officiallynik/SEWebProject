import { AccountCircle } from '@material-ui/icons';
import React, { useState } from 'react';
import SignIn from '../login';
import CustomModal from '../modal';
import SignUp from '../signup';

const AuthComponent = () => {
    const [isLogin, setIsLogin] = useState(true);
    return (
        <CustomModal
            modalBtn={<div>Login</div>}
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

export default AuthComponent;