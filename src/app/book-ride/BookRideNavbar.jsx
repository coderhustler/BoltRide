'use client'
import { AppBar, Avatar, Box, Button, Drawer, IconButton, Toolbar, Typography } from '@mui/material';
import React, { useState } from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import { deepOrange } from '@mui/material/colors';
import { drawerList } from './DrawerList';

const BookRideNavbar = () => {
    const[sidebarOpen, setSideBarOpen] = useState(false);

    const handleSidebarClose=()=>setSideBaropen(false);
    const handleSidebarOpen=()=>setSideBarOpen(true);
  return (
    
    <Box className=''>
      <AppBar sx={{backgroundColor:'#120E43'}} className="" position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            onClick={handleSidebarOpen}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Bolt-Ride
          </Typography>

          {true ? (
            <Avatar
              className="cursor-pointer"
              
              sx={{ bgcolor: deepOrange[500] }}
            >
              A 
            </Avatar>
          ) : (
            <Button color="inherit">
              Login
            </Button>
          )}
        </Toolbar>
      </AppBar>
      <Drawer anchor={"left"} open={sidebarOpen} onClose={handleSidebarClose}>
        {drawerList("left")}
      </Drawer>
    </Box>

  );
}

export default BookRideNavbar;
