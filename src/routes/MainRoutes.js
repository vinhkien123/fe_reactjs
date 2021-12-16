// project imports
import React from 'react';
import PrivateRoute from '../core/PrivateRoute';
import Home from '../Screens/Home';
// import Login from '../Screens/Login';
import MainTemplate from '../Template/MainTemplate';
import Login from '../Screens/Login';

// dashboard routing

// utilities routing


// ==============================|| MAIN ROUTING ||============================== //

const MainRoutes = {

    path: "/login",
    element: <Login /> ,
    children: [{
        // path: '/',
        // element: <MainTemplate /> ,
        // children: [{
        //         path: '/',
        //         element: <Home />
        //     },

        // ]
    }]

};

export default MainRoutes;