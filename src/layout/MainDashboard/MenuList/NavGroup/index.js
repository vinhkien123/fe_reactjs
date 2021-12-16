import React from 'react';
import {
    useTheme
} from '@mui/material/styles';
import { List, Typography } from '@mui/material';
import NavItem from '../NavItem';
import NavCollapse from '../NavCollapse';
function NavGroup({ item }) {
    console.log(item);
    const theme = useTheme();

    // menu list collapse & items
    const items = item.children?.map((menu) => {
        switch (menu.type) {
            case 'collapse':
            return <NavCollapse key={menu.id} menu={menu} level={1} />;
            case 'item':
                return <NavItem key={menu.id} item={menu} level={1} />;
            default:
                return (
                    <Typography key={menu.id} variant="h6" color="error" align="center">
                        Menu Items Error
                    </Typography>
                );
        }
    });
    return (
       
        <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }} component="nav" aria-labelledby="nested-list-subheader"
        // subheader={
        //     <ListSubheader component="div" id="nested-list-subheader">
        //         Nested List Items
        //     </ListSubheader>
        // }
        >
             {items}  
        </List>
    );
}

export default NavGroup;