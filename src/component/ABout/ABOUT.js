import React, { useContext } from 'react';
import { AuthContext } from '../../Context/UserContext';

const ABOUT = () => {
    const {user} = useContext(AuthContext)

    return (
        <div>
            <h1>tHIS IS abOUT</h1>
            <h3>user {user.name}</h3>
        </div>
    );
};

export default ABOUT;