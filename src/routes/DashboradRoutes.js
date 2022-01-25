// project imports
import PrivateRoute from '../core/PrivateRoute';
import Home from '../Screens/Home';
import Dashboard from '../Screens/Dashboard';
import DashboardTemplate from '../Template/DashboardTemplate';



const DashboardRoutes = {

    path: "/",
    element: <PrivateRoute /> ,
    children: [{
        path: '/dashboard',
        element: <DashboardTemplate /> ,
        children: [{
                path: '/dashboard',
                element: < Dashboard />
            },

        ]
    }]

};

export default DashboardRoutes;