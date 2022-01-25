import React from 'react';
import { Navigate, useLocation,Outlet } from "react-router-dom"
import { useSelector } from 'react-redux'
function PrivateRoute({ children }) {
    const { login } = useSelector(state => state.userReducer)
    const userStore = JSON.parse(localStorage.getItem('user'))
    return login || userStore ? <><Outlet/></> : <Navigate to="/login" />;
}

export default PrivateRoute;