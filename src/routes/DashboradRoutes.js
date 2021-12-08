// project imports
import PrivateRoute from '../core/PrivateRoute';
import Home from '../Screens/Home';
import DashboardTemplate from '../Template/DashboardTemplate';
import MainTemplate from '../Template/MainTemplate';



const DashboardRoutes = {

    path: "/",
    element: < PrivateRoute /> ,
    children: [{
        path: '/',
        element: < DashboardTemplate / > ,
        children: [{
                path: '/',
                element: < Home />
            },

        ]
    }]

};

export default DashboardRoutes;