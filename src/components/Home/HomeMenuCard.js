import React from 'react';
import { Card, CardContent, CardMedia, Typography, Link, Stack, Button } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';

function HomeMenuCard() {
    return (
        <Card raised
            sx={{
                backgroundColor: '#444444',
                maxWidth: '80%',
                margin: 'auto',
                marginTop: 5,
                boxShadow: ' 0px 0px 20px 0px rgba(0,0,0,0.5);'
            }}
        >
            <CardContent>
                <CardMedia
                    component="img"
                    image="/bg.jpg"
                    alt="Home Menu Image"
                    sx={{
                        objectFit: 'contain',
                        width: '100%'
                    }}
                />

                <Typography variant="h5" sx={{ fontFamily: " 'Chakra Petch', sans-serif", color: '#eeeeee', mt: 2 }}>
                    FRESC ORDINALS
                </Typography>

                <Stack direction='column' gap='1rem' alignItems='flex-start' sx={{ mt: 3 }}>
                    <Typography fontFamily="'Chakra Petch', sans-serif" color='#f3f3f3'>The collection is composed of 77 pieces.
                    </Typography>
                    <Typography fontFamily="'Chakra Petch', sans-serif" color='#f3f3f3'>
                        With the innovative use of recursive inscription, FRESC invites connoisseurs to enter into a new dimension of digital artistry.

                    </Typography>
                </Stack>

                <Stack direction='row' gap='1rem' justifyContent='space-between' alignItems='center' sx={{ mt: 3 }}>
                    <Button component={RouterLink} to="/fresc" variant="contained" sx={{ backgroundColor: "#56a0cc" }}>
                        DISCOVER
                    </Button>
                    <Button component={RouterLink} to="/fresc" variant="contained" sx={{ backgroundColor: "#cc9ad2" }}>
                        MINT NOW
                    </Button>
                </Stack>
            </CardContent>
        </Card>
    );
}

export default HomeMenuCard;
