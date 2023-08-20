import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Button, Link, Avatar, Stack, useMediaQuery, useTheme } from '@mui/material';

function Nav() {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
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
                        <Avatar
                            variant='square'
                            src='/punk.png'
                        />
                    </RouterLink>
                    {!isMobile && (
                        <Typography
                            variant='h6'
                            sx={{
                                fontWeight: 700,
                                fontFamily: " 'Chakra Petch', sans-serif",
                            }}
                        >
                            Recursive Psyop
                        </Typography>
                    )}
                </Stack>
                <Stack direction='row' display='flex' alignContent='center' alignItems='center'>

                    <Link component={RouterLink} to="/art" color="inherit" underline="none">
                        <Button sx={{ fontFamily: " 'Chakra Petch', sans-serif", }} color="inherit">ART</Button>
                    </Link>
                    <Link component={RouterLink} to="/team" color="inherit" underline="none">
                        <Button sx={{ fontFamily: " 'Chakra Petch', sans-serif", color: "inherit" }} >TEAM</Button>
                    </Link>
                </Stack>

            </Toolbar>
        </AppBar>
    );
}

export default Nav;
