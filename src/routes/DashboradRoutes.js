// project imports
import PrivateRoute from '../core/PrivateRoute';
import Home from '../Screens/Home';
import DashboardTemplate from '../Template/DashboardTemplate';



const DashboardRoutes = {

    path: "/",
    element: < PrivateRoute /> ,
    children: [{
        path: '/dashboard',
        element: <DashboardTemplate /> ,
        children: [{
                path: '/dashboard',
                element: < Home />
            },

        ]
    }]

};

export default DashboardRoutes;