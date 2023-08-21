import React from 'react';
import { Card, CardContent, CardMedia, Typography, Link, Stack, Button } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';

function HomeMenuCard({ imageSrc, title, numberSupply, paragraph, linkUrl, discoDis }) {
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
                    image={imageSrc}
                    alt="Home Menu Image"
                    sx={{
                        objectFit: 'contain',
                        width: '100%',
                        maxHeight: '280px'
                    }}
                />

                <Typography variant="h4" fontWeight={700} sx={{ fontFamily: " 'Chakra Petch', sans-serif", color: '#000', mt: 2 }}>
                    {title}
                </Typography>

                <Stack direction='column' gap='1rem' width='80%' display='flex' alignItems='center'>
                    <Typography fontFamily="monospace" color='#bbb'>{numberSupply}</Typography>
                    <Typography fontFamily="'Chakra Petch', sans-serif" color='#f3f3f3'>
                        {paragraph}
                    </Typography>
                </Stack>

                <Stack direction='row' gap='1rem' justifyContent='space-between' alignItems='center' sx={{ mt: 3 }}>
                    <Button disabled={discoDis} component={RouterLink} to={linkUrl} variant="contained" sx={{ backgroundColor: "#222" }}>
                        DISCOVER
                    </Button>
                    <Button disabled component={RouterLink} to={linkUrl} variant="contained" sx={{ backgroundColor: "#56a0cc" }}>
                        MINT NOW
                    </Button>
                </Stack>
            </CardContent>
        </Card>
    );
}

export default HomeMenuCard;
