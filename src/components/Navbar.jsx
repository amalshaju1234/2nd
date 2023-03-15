import { AppBar, Box, Toolbar } from '@mui/material'
import React from 'react'
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Link, NavLink } from 'react-router-dom';
const Navbar = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            
          </Typography>
          <Button color="inherit"><Link  to="/" style={{color:'black',textDecoration:'none'}}>Login</Link></Button>
          <Button color="inherit"><Link  to="/Contact" style={{color:'white',textDecoration:'none'}}>Contact</Link></Button>
          <Button color="inherit"><Link to={"/signup"}>Signup</Link></Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default Navbar
