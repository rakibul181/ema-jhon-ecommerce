import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../Context/UserContext';

const PriveteRoutes = ({childern}) => {
    const{user,loding} = useContext(AuthContext)
    const location = useLocation()
    if(loding){
        return <div>Loading...</div>
    }
    if(user && user.uid){
        return childern
    }
    return <Navigate to={'/login'} state={{from: location}} replace></Navigate>
};

export default PriveteRoutes;