import React, { useState, useEffect } from "react";
import { Card, CardContent, Button, Typography, Grid, Stack, TextField, Box } from '@mui/material';
import axios from "axios";
import { cardsData } from "./cardData";
import BuyButton from "./BuyButton"; // Assuming BuyButton is in the same directory. Adjust the path if necessary.


function CardBuy() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [apiData, setApiData] = useState(null);
    const currentCard = cardsData[currentIndex];
    const [isButtonDisabled, setIsButtonDisabled] = useState(true);
    const [searchIndex, setSearchIndex] = useState(''); // for input value

    const handleNextClick = () => {
        const nextIndex = (currentIndex + 1) % cardsData.length;
        setCurrentIndex(nextIndex);
    };

    const handleBackClick = () => {
        if (currentIndex === 0) {
            setCurrentIndex(cardsData.length - 1); // loop back to the last item
        } else {
            setCurrentIndex(currentIndex - 1);
        }
    };

    const handleGoToIndex = () => {
        const idx = parseInt(searchIndex, 10);
        if (!isNaN(idx - 1) && idx - 1 >= 0 && idx - 1 < cardsData.length) {
            setCurrentIndex(idx - 1);
        } else {
            alert("Invalid index entered");
        }
    };


    useEffect(() => {
        const fetchApiData = async () => {
            const config = {
                method: 'get',
                maxBodyLength: Infinity,
                url: `https://api.hiro.so/ordinals/v1/inscriptions/${currentCard.inscriptionID}/transfers`, // Template string to include the id
                headers: {
                    'Accept': 'application/json'
                }
            };

            try {
                const response = await axios.request(config);
                const resultsLength = response.data.results.length;

                if (resultsLength > 1) {
                    console.log("INVALID");
                    setIsButtonDisabled(true);
                } else if (resultsLength <= 1) {
                    console.log("VALID");
                    setIsButtonDisabled(false);
                }


                setApiData(response.data); // Store the fetched data in state

            } catch (error) {
                console.log(error);
            }
        };

        fetchApiData();

        const API_HOST = "https://ordinals.gorillapool.io/api/";
        const s = new EventSource(`${API_HOST}subscribe?address=${currentCard.address}`);


    }, [currentIndex]);

    return (
        <Grid pt={2} display='flex' flexDirection='column' alignItems='center' height='100%' gap={2} >



            <Card sx={{ width: '80%', backgroundColor: '#333', borderTopLeftRadius: '2rem', borderTopRightRadius: '2rem' }}  >
                <CardContent  >


                    {/* iframe instead of CardMedia */}
                    <iframe
                        style={{ borderRadius: '2rem', boxShadow: '0 0 30px #666' }}
                        src={`/fresco/fresco.html?data=${parseInt(currentCard.title)}.fresc`}
                        title={`Fresco ${currentCard.title}`}
                        width="100%"
                        height="300px" // you can adjust height as needed
                        frameBorder="0"
                    />
                    <Typography color='#dedede' p={'1rem'} fontFamily={"'Chakra Petch', sans-serif"} fontWeight={700} variant="h4" >
                        Fresc #{currentCard.title}
                    </Typography>

                    <Stack display='flex' direction='row' justifyContent='space-between' alignItems='end'>
                        <Button variant="contained" color="primary" onClick={handleBackClick}
                            sx={{
                                backgroundColor: '#353535de', // setting bg to orange regardless of the disabled state
                                color: '#eee',
                                fontFamily: "'Chakra Petch', sans-serif",
                                fontWeight: 700,
                                '&:hover': {
                                    backgroundColor: '#e9e9e9de',
                                    color: '#000',
                                },
                            }}>
                            Back
                        </Button>
                        <BuyButton psbtHex={currentCard.psbtHex} isOff={isButtonDisabled} />
                        <Button variant="contained" color="primary" onClick={handleNextClick}
                            sx={{
                                backgroundColor: '#353535de', // setting bg to orange regardless of the disabled state
                                color: '#eee',
                                fontFamily: "'Chakra Petch', sans-serif",
                                fontWeight: 700,
                                '&:hover': {
                                    backgroundColor: '#e9e9e9de',
                                    color: '#000',
                                },
                            }}
                        >
                            Next
                        </Button>
                    </Stack>

                </CardContent>
            </Card>
            {/* Input to search for index */}
            <Box p={1} bgcolor='#eee' direction="row" alignItems="center" gap={1}>
                <TextField
                    variant="outlined"
                    size="small"
                    value={searchIndex}
                    onChange={(e) => setSearchIndex(e.target.value)}
                    placeholder="Go to Fresc #..."
                />
                <Button variant="text" onClick={handleGoToIndex} sx={{
                    color: '#333',
                    fontFamily: "'Chakra Petch', sans-serif",
                    fontWeight: 700,
                    '&:hover': {
                        color: '#56a0cc',
                    },
                }}>
                    Go
                </Button>
            </Box>
        </Grid>

    );
}

export default CardBuy;
