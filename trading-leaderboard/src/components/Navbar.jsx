import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import Badge from '@mui/material/Badge';
import NotificationsIcon from '@mui/icons-material/Notifications';
import AccountCircle from '@mui/icons-material/AccountCircle';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import Box from '@mui/material/Box';

const Navbar = () => {
    return (
        <AppBar position="static" style={{ backgroundColor: '#ffffff', color: '#000000' }}>
            <Toolbar>
                <Box display="flex" flexGrow={1} alignItems="center">
                    <img src="https://unfluke.in/static/media/cropped_unfluke_full.148e5bfc.png" alt="Company Logo" style={{ height: 40, marginRight: 20 }} />
                    
                </Box>
                <IconButton color="inherit">
                    <Badge badgeContent={4} color="secondary">
                        <NotificationsIcon style={{ color: 'rgb(42 50 46)' }} />
                    </Badge>
                </IconButton>
                <Box display="flex" alignItems="center" marginLeft={2} marginRight={2}>
                    <MonetizationOnIcon style={{ color: 'rgb(255 211 70)' }} />
                    <Typography variant="body1" style={{ marginLeft: 5, color: '#000000' }}>$12345</Typography>
                </Box>
                <IconButton color="inherit">
                    <AccountCircle style={{ color: 'rgb(226, 116, 152)' }} />
                </IconButton>
            </Toolbar>
        </AppBar>
    );
};

export default Navbar;
