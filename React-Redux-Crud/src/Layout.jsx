import React from 'react';
import { Outlet, Link } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import HomeIcon from '@mui/icons-material/Home';
import AddIcon from '@mui/icons-material/Add';

function Layout() {
  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <IconButton component={Link} to="/" edge="start" color="inherit" aria-label="home">
            <HomeIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Crud App
          </Typography>
          <Button component={Link} to="/create" color="inherit" startIcon={<AddIcon />}>
            Create
          </Button>
        </Toolbar>
      </AppBar>
      <div style={{ padding: '20px' }}>
        <Outlet />
      </div>
    </>
  );
}

export default Layout;
