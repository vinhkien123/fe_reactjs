// assets
import {
    IconKey
} from '@tabler/icons';
import InboxIcon from '@mui/icons-material/MoveToInbox';
// constant
const icons = {
    IconKey
};

// ==============================|| EXTRA PAGES MENU ITEMS ||============================== //

const pages = {
    id: 'pages',
    title: 'Pages',
    caption: 'Pages Caption',
    type: 'group',
    children: [{
            id: 'authentication',
            title: 'Authentication',
            type: 'collapse',
            icon: < InboxIcon / > ,
            children: [{
                    id: 'login3',
                    title: 'Login',
                    type: 'item',
                    url: '/pages/login/login3',
                    target: true
                },
                {
                    id: 'register3',
                    title: 'Register',
                    type: 'item',
                    url: '/pages/register/register3',
                    target: true
                }
            ]
        },
        {
            id: 'authentication',
            title: 'Authentication',
            type: 'collapse',
            icon: < InboxIcon / > ,
            children: [{
                    id: 'login3',
                    title: 'Login',
                    type: 'item',
                    url: '/pages/login/login3',
                    target: true
                },
                {
                    id: 'register3',
                    title: 'Register',
                    type: 'item',
                    url: '/pages/register/register3',
                    target: true
                }
            ]
        },
        {
            id: 'authentication',
            title: 'Authentication',
            type: 'item',
            icon: < InboxIcon / > ,
            url: "/authen"
        }
    ]
};

export default pages;