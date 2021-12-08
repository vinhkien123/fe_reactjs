import {
    useRoutes
} from 'react-router-dom';
import DashboardRoutes from './DashboradRoutes';
import MainRoutes from './MainRoutes';
export default function ThemeRoutes() {
    return useRoutes([MainRoutes, DashboardRoutes]);
}