import React from 'react';
import { Navigate, useLocation,Outlet } from "react-router-dom"
import { useSelector } from 'react-redux'
function PrivateRoute({ children }) {
    const { login } = useSelector(state => state.userReducer)
    return !login ? <><Outlet/></> : <Navigate to="/login" />;
}

export default PrivateRoute;