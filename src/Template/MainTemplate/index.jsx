import React from 'react';
import { Navigate, useLocation, Outlet } from "react-router-dom"
import { useSelector } from 'react-redux'
function MainTemplate({ children }) {
    // const { login } = useSelector(state => state.userReducer)
    return (
        <>
            header
            <Outlet />
            bottom
        </>
    )
}

export default MainTemplate;