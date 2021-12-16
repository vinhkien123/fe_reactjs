import React from 'react';
import { Navigate, useLocation, Outlet } from "react-router-dom"
import { useSelector } from 'react-redux'
import HeaderDashboard from '../../layout/MainDashboard';
function DashboardTemplate({ children }) {
    // const { login } = useSelector(state => state.userReducer)
    return (
        <>
            <HeaderDashboard>
                <Outlet />
            </HeaderDashboard>
        </>
    )
}

export default DashboardTemplate;