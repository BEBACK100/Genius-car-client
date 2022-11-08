import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { Authcontext } from '../Context/AuthProvider/AuthProvider';

const PrivateRoute = ({ }) => {
    const location = useLocation();
    const { user, loading } = useContext(Authcontext)

    if (loading) {
        return <div className='pt-20'>Loaddingg...</div>
    }
    if (user && user.uid) {
        return;
    }

    return <Navigate to='/login' state={{ from: location }} replace></Navigate>
};


export default PrivateRoute;