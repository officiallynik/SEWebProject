import React from 'react';
import Dashboard from '../../components/dashboard';
import SignIn from '../../components/login';

const Farmers = () => {
    const dashboard = (
        <Dashboard />
    );

    return (
        <div>
            <SignIn />
        </div>
    );
};

export default Farmers;