import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthProvider } from '../Contexts/AuthContext';

const PrivateRoutes = ({children}) => {
    const {user, loading} = useContext(AuthProvider);
    const location = useLocation();
    if(loading){
        return  <>Loading...</>
    }
    if(user){
        return children;
    }
    return <Navigate to='/login' state={{ from: location }} replace></Navigate>
};


export default PrivateRoutes;