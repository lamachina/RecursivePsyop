import React, { useState, useEffect } from 'react';
import FrescoCard from '../components/Home/FrescoCard';
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

function Fresc() {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
        }, 2700); // Close the overlay after 2.7 seconds

        return () => clearTimeout(timer); // Cleanup to prevent memory leaks if the component is unmounted before the timer completes
    }, []); // An empty dependency array ensures this effect runs only once after component mount

    return (
        <div className='home'>
            <Backdrop
                sx={{
                    color: '#fff',
                    zIndex: (theme) => theme.zIndex.drawer + 1,
                    backgroundColor: 'rgba(0, 0, 0, 0.77)' // Increase this value for a stronger overlay
                }}
                open={loading}
            >
                <Box>
                    <CircularProgress color="inherit" />
                    <Typography sx={{ mt: 2 }}>Loading the psyop...</Typography>
                </Box>
            </Backdrop>

            {Array.from({ length: 21 }).map((_, index) => (
                <FrescoCard key={index} frescoNum={index} />
            ))}
        </div>
    );
}

export default Fresc;
