import { ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import React from 'react';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import './style.scss'
import { NavLink } from 'react-router-dom';
function NavItem({ item }) {
    return (
        <>
            <NavLink to={item.url}>
                <ListItemButton >
                    <ListItemIcon>
                        {item.icon}
                    </ListItemIcon>
                    <ListItemText primary={item.title} />
                </ListItemButton>
            </NavLink>

        </>
    );
}

export default NavItem;