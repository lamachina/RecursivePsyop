import React from 'react';
import { Card, CardContent, CardMedia, Typography, Link, Stack, Button } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';

function Team() {
    return (
        <Card raised
            sx={{
                backgroundColor: '#444444',
                maxWidth: '80%',
                margin: 'auto',
                marginTop: 5,
                boxShadow: ' 0px 0px 10px 0px rgba(255,255,255,0.5);'
            }}
        >
            <CardContent className='punkbg'>
                <Stack direction='column' gap='1rem' alignItems='flex-start' sx={{ mt: 3 }}>

                    <Typography variant="h5" sx={{ fontFamily: " 'Chakra Petch', sans-serif", color: '#eeeeee', mt: 2 }}>
                        THE MODULES
                    </Typography>

                    <Typography fontFamily="'Chakra Petch', sans-serif" color='#f3f3f3'>The team is a fully recursive psyop.
                    </Typography>
                </Stack>

                <Stack direction='column' gap='1rem' justifyContent='space-between' alignItems='end' sx={{ mt: 3 }}>
                    <Button size='large' href='https://twitter.com/RecursivePsyop' target='_blank' variant="contained" sx={{ backgroundColor: "#333" }}>
                        𝕏
                    </Button>
                    <Button disabled size='large' component={RouterLink} to="/fresc" variant="contained" sx={{ backgroundColor: "#56a0cc" }}>
                        JOIN US
                    </Button>
                </Stack>
            </CardContent>
        </Card>
    );
}

export default Team;
