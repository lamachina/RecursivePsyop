import React, { useState, useEffect } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { Typography, Link, Grid, Backdrop } from '@mui/material';

function Home() {
    const [openBackdrop, setOpenBackdrop] = useState(false);

    useEffect(() => {
        const showBackdrop = setTimeout(() => {
            setOpenBackdrop(true);

            const hideBackdrop = setTimeout(() => {
                setOpenBackdrop(false);
            }, 100);  // Hide after 0.1 seconds

            return () => clearTimeout(hideBackdrop);
        }, openBackdrop ? 4300 : 4310);  // If it's currently opened, wait for 1.9 seconds to show again to make it a total of 2 seconds, else wait for 2 seconds.

        return () => clearTimeout(showBackdrop);
    }, [openBackdrop]);  // Depend on the openBackdrop state

    return (
        <Grid color='white' className='home' display='flex' flexDirection='column' height='100%' gap={2}>
            <Typography variant="h3" gutterBottom fontFamily=" 'Chakra Petch', sans-serif">
                This is a sample paragraph
            </Typography>

            <Backdrop open={openBackdrop} sx={{ zIndex: 0, backgroundColor: '#333' }}>
                <Typography color={'#f8ff74'} fontFamily=" 'Chakra Petch', sans-serif" variant="h1" className="neonText">PSYOP</Typography>
            </Backdrop>

            <Link component={RouterLink} sx={{ textDecoration: 'none' }} to="/art" gutterBottom>
                <Typography color='#fff'>
                    cd /Art
                </Typography>
            </Link>
        </Grid>
    );
}

export default Home;
