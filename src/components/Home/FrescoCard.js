import React from 'react';
import { Card, CardActionArea, CardContent, Typography, Link, Stack, Divider, Button } from '@mui/material';

function FrescoCard({ frescoNum }) {
    return (
        <Card raised
            sx={{
                backgroundColor: '#000',
                maxWidth: '100%',
                margin: 'auto',
                marginTop: 5,
                boxShadow: ' 0px 0px 20px 0px rgba(51,51,51,1);'
            }}
        >
            <CardActionArea>
                <CardContent>
                    {/* Iframe to display HTML content */}
                    <iframe
                        src={`/fresco/fresco.html?data=${frescoNum}.fresc`}
                        title={`Fresco ${frescoNum}`}
                        width="100%"
                        height="300px" // you can adjust height as needed
                        frameBorder="0"
                    />

                    <Typography variant="h6" sx={{ fontWeight: 700, fontFamily: " 'Chakra Petch', sans-serif", color: '#f3f3f3', marginY: '1rem' }}>
                        # {frescoNum}
                    </Typography>

                </CardContent>
            </CardActionArea>

        </Card >
    );
}

export default FrescoCard;
