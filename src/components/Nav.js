import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Button, Link, Avatar, Stack } from '@mui/material';

function Nav() {
    return (
        <AppBar position="static">
            <Toolbar
                sx={{
                    justifyContent: 'space-between',
                    background: '#000',
                    borderBottom: '0.2rem solid #303030',
                    boxShadow: '1px 1px 21px #000'
                }}>
                <Stack direction='row' display='flex' alignContent='center' alignItems='center' gap='1rem'>
                    <RouterLink to="/" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center' }}>
                        {/* <Avatar
                            variant='circular'
                            className='App-logo'
                            src='/bixel.jpg'

                        /> */}
                    </RouterLink>
                    <Typography
                        variant='h6'
                        sx={{
                            fontWeight: 700,
                            fontFamily: " 'Chakra Petch', sans-serif",
                        }}
                    >
                        Recursive psyop
                    </Typography>
                </Stack>
                <Stack direction='row' display='flex' alignContent='center' alignItems='center'>
                    <Link component={RouterLink} to="/" color="inherit" underline="none">
                        <Button sx={{ fontFamily: " 'Chakra Petch', sans-serif", color: "inherit" }} >Home</Button>
                    </Link>
                    <Link component={RouterLink} to="/fresc" color="inherit" underline="none">
                        <Button sx={{ fontFamily: " 'Chakra Petch', sans-serif", }} color="inherit">1</Button>
                    </Link>
                    {/* <Link component={RouterLink} to="/bixel2" color="inherit" underline="none">
                        <Button sx={{ fontFamily: " 'Chakra Petch', sans-serif", }} color="inherit">Biixel</Button>
                    </Link> */}
                </Stack>

            </Toolbar>
        </AppBar>
    );
}

export default Nav;
