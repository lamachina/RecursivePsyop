import { Button, Card, CardActionArea, CardContent, Divider, Stack, Typography } from '@mui/material';
import React, { useRef, useEffect, useState } from 'react';
import { IDINSCRIBE } from '../meta/meta1';

function Bixel1() {

    /*  const colors = ["#434A41", "#689579", "#CDD995", "#E7DEBF", "#E5CC7C", "#F1B31F", "#E99248", "#DA4C27", "#DAC8C6", "#547D8E"];
 
     const canvasRefs = useRef([]);
     const [inputValues, setInputValues] = useState([]);
 
     // Use useEffect to fetch data when the component is mounted
     useEffect(() => {
         setInputValues(IDINSCRIBE)
     }, []);
 
     useEffect(() => {
         inputValues.forEach((inputValue, frameIndex) => {
             const canvas = canvasRefs.current[frameIndex];
             const ctx = canvas.getContext('2d');
             // Reset transformations and clear the canvas
             ctx.setTransform(1, 0, 0, 1, 0, 0);
             ctx.clearRect(0, 0, canvas.width, canvas.height);
             // Create the gradient
             const gradient = ctx.createLinearGradient(0, 0, canvas.width, 0);
             gradient.addColorStop(0 / 9, '#689579');
             gradient.addColorStop(1 / 9, '#CDD995');
             gradient.addColorStop(2 / 9, '#E7DEBF');
             gradient.addColorStop(3 / 9, '#E5CC7C');
             gradient.addColorStop(4 / 9, '#F1B31F');
             gradient.addColorStop(5 / 9, '#E99248');
             gradient.addColorStop(6 / 9, '#DA4C27');
             gradient.addColorStop(7 / 9, '#DAC8C6');
             gradient.addColorStop(8 / 9, '#547D8E');
 
             // Set font properties
             ctx.font = "36px monospace";
 
             ctx.fillStyle = gradient;
             // Set font properties
 
             // Clip text
             ctx.textBaseline = 'top';
             //  ctx.fillText(`BIXEL #${frameIndex + 1}`, 0, 0);
 
             // Draw the grid
             Array.from({ length: 49 }, (_, i) => {
                 const row = Math.floor(i / 7);
                 const col = i % 7;
                 ctx.fillStyle = colors[parseInt(inputValue[i])];
                 ctx.fillRect(col * 50, row * 50 + 40, 50, 50); // 60 instead of 40 to leave space for the larger text
             });
 
             // Get the first color from the current inputValue
             const firstColor = colors[parseInt(inputValue[0])];
 
             // Set the boxShadow for the corresponding div with className 'main'
             canvas.parentElement.style.boxShadow = `0px 0px 0px 7px ${firstColor}`;
         });
     }, [inputValues]);
 
 
     const downloadImage = (index) => {
         const link = document.createElement('a');
         link.download = `BIXEL_#${index}.png`;
         link.href = canvasRefs.current[index].toDataURL('image/png');
         link.click();
     }; */

    return (
        <div className='bixel1bg'>
            <Stack>
                <Card
                    sx={{
                        backgroundColor: '#333333',
                        margin: '1rem',
                        marginTop: 5,
                    }}
                >
                    <CardActionArea>
                        <CardContent>

                            <Typography variant="h6" color="white" sx={{ fontFamily: "'Press Start 2P', cursive" }}>
                                Bixel Collection #1
                            </Typography>
                            <Typography variant="h6" color="gray" sx={{ fontFamily: "'Share Tech Mono', monospace" }}>
                                500 Bixels
                            </Typography>
                            <Typography variant="h6" color="gray" sx={{ fontFamily: "'Share Tech Mono', monospace" }}>
                                7x7
                            </Typography>
                            <Divider sx={{ bgcolor: 'grey.500', my: '1rem' }} />
                            <Stack direction='column' gap='0.5rem'>

                                <Button
                                    component="a"
                                    href="https://ordinals.com/content/058a8255678912b26ed0af8e12e325739bd06fc652864861d134dbe2a73641ffi0"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    variant="outlined"
                                    sx={{
                                        background: '#fff',
                                        color: '#547D8E ',
                                        fontFamily: "'Press Start 2P', cursive",
                                        transition: '0.3s',
                                        '&:hover': {
                                            color: '#fff',
                                            background: '#547D8E',
                                        }
                                    }}
                                >
                                    Playground
                                </Button>

                                <Button
                                    component="a"
                                    href="https://www.ord.io/preview/bf807a5cbda188897b3f1e7e1a879144e49e9a36d25631ae541ee6dcf5eecb4bi0"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    variant="outlined"
                                    sx={{
                                        background: '#fff',
                                        color: '#DA4C27 ',
                                        fontFamily: "'Press Start 2P', cursive",
                                        transition: '0.3s',
                                        '&:hover': {
                                            color: '#fff',
                                            background: '#DA4C27',
                                        }
                                    }}
                                >
                                    Collection
                                </Button>

                                <Button
                                    component="a"
                                    href="https://geniidata.com/user/ordinalsbixel/ordinals-bixel-1"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    variant="outlined"
                                    sx={{
                                        background: '#fff',
                                        color: '#F1B31F ',
                                        fontFamily: "'Press Start 2P', cursive",
                                        transition: '0.3s',
                                        '&:hover': {
                                            color: '#fff',
                                            background: '#F1B31F',
                                        }
                                    }}
                                >
                                    Data
                                </Button>
                                <Button
                                    component="a"
                                    href="https://ordinalswallet.com/collection/ordinals-bixel"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    variant="outlined"
                                    sx={{
                                        background: '#547d8e',
                                        color: '#fff ',
                                        fontFamily: "'Press Start 2P', cursive",
                                        transition: '0.3s',
                                        '&:hover': {
                                            color: '#547d8e',
                                            background: '#fff',
                                        }
                                    }}
                                >
                                    TRADE
                                </Button>
                            </Stack>
                        </CardContent>
                    </CardActionArea>
                </Card>

            </Stack>
            {/*  <div id="frames">
                {inputValues.map((_, frameIndex) => (
                    <div key={frameIndex} className='main'>
                        <canvas
                            ref={el => canvasRefs.current[frameIndex] = el}
                            width="350"
                            height="390"
                            style={{
                                cursor: 'pointer',
                            }}
                            onClick={() => downloadImage(frameIndex)} // Add the onClick handler here
                        />
                    </div>
                ))}
            </div> */}
        </div>
    )
}

export default Bixel1