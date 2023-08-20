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
            <CardContent sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <CardMedia
                    component="img"
                    image="/bg.jpg"
                    alt="Home Menu Image"
                    sx={{
                        objectFit: 'contain',
                        width: '100%'
                    }}
                />

                <Typography variant="h4" fontWeight={700} sx={{ fontFamily: " 'Chakra Petch', sans-serif", color: '#000', mt: 2 }}>
                    FRESC ORDINALS
                </Typography>

                <Stack direction='column' gap='1rem' width='80%' display='flex' alignItems='center'>
                    <Typography fontFamily="monospace" color='#bbb'>77 pieces
                    </Typography>
                    <Typography fontFamily="'Chakra Petch', sans-serif" color='#f3f3f3'>
                        With the innovative use of recursive inscription, FRESC invites connoisseurs to enter into a new dimension of digital artistry.
                    </Typography>
                </Stack>

                <Stack direction='row' gap='1rem' justifyContent='space-between' alignItems='center' sx={{ mt: 3 }}>
                    <Button component={RouterLink} to="/fresc" variant="contained" sx={{ backgroundColor: "#56a0cc" }}>
                        DISCOVER
                    </Button>
                    <Button disabled component={RouterLink} to="/fresc" variant="contained" sx={{ backgroundColor: "#cc9ad2" }}>
                        MINT NOW
                    </Button>
                </Stack>
            </CardContent>
        </Card>
    );
}

export default HomeMenuCard;
