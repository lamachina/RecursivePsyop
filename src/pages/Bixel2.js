import { Button, Card, CardActionArea, CardContent, Divider, Stack, Typography } from '@mui/material';
import React, { useRef, useEffect, useState } from 'react';
import { IDINSCRIBE } from '../meta/meta2';

function Bixel2() {
    /* 
    
        const colors = [
            '#88B2C4', '#547D8E',
            '#DAC8C6', '#7C7587',
            '#E3A18D', '#DA4C27',
            '#F1B31F', '#E99248',
            '#87C687', "#529055",
            '#A08454', '#966946',
            '#E7DEBF', '#AFA78A',
            '#D2FAE0', '#F7E382',
            '#9AAF89', '#E5CC7C',
            '#fff',
            '#D7E5E5',
            '#000',
        ];
    
        const canvasRefs = useRef([]);
        const [inputValues, setInputValues] = useState([]);
    
        useEffect(() => {
            const numericalInputValues = IDINSCRIBE.map(value => value.split('').map(char => char.charCodeAt(0) - 65));
            setInputValues(numericalInputValues.reverse());
        }, []);
    
    
        useEffect(() => {
            inputValues.forEach((inputValue, frameIndex) => {
                const canvas = canvasRefs.current[frameIndex];
                const ctx = canvas.getContext('2d');
                // Reset transformations and clear the canvas
                ctx.setTransform(1, 0, 0, 1, 0, 0);
                ctx.clearRect(0, 0, canvas.width, canvas.height);
                // Set font properties
                ctx.font = "36px monospace";
                ctx.textBaseline = 'top';
                //    ctx.fillText(`BIXEL #${frameIndex + 1}`, 0, 0);
    
                Array.from({ length: 100 }, (_, i) => {
                    const row = Math.floor(i / 10);
                    const col = i % 10;
                    ctx.fillStyle = colors[inputValue[i]];
                    ctx.fillRect(col * 35, row * 35 + 60, 35, 35); // Changed the size to 35 to fit the 10x10 grid
                });
    
                // Get the first color from the current inputValue
                const firstColor = colors[inputValue[0]];
    
                // Set the boxShadow for the corresponding div with className 'main'
                canvas.parentElement.style.boxShadow = `0px 0px 0px 7px ${firstColor}`;
            });
        }, [inputValues]);
    
        const downloadImage = (index) => {
            const link = document.createElement('a');
            link.download = `BIXEL_#${index}.biixel`;
            link.href = canvasRefs.current[index].toDataURL('image/png');
            link.click();
        }; */
    return (
        <div className='bixel2bg'>
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
                                Bixel Collection #2
                            </Typography>
                            <Typography variant="h6" color="gray" sx={{ fontFamily: "'Share Tech Mono', monospace" }}>
                                1337 Bixels
                            </Typography>
                            <Typography variant="h6" color="gray" sx={{ fontFamily: "'Share Tech Mono', monospace" }}>
                                10x10
                            </Typography>
                            <Divider sx={{ bgcolor: 'grey.500', my: '1rem' }} />
                            <Stack direction='column' gap='0.5rem'>

                                <Button
                                    component="a"
                                    href="https://ordinals.com/content/a98efeb76d3642b51e87876989c98928018b1f07eb0012b3d10a5eafb34e6568i0"
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
                                    component="a" disabled
                                    //href="https://ordinals.com/content/bf807a5cbda188897b3f1e7e1a879144e49e9a36d25631ae541ee6dcf5eecb4bi0"
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
                                    soon...
                                </Button>

                                <Button disabled
                                    component="a"
                                    // href="https://geniidata.com/user/ordinalsbixel/ordinals-bixel-1"
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
                                    soon...
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
                            width="350" // Adjust canvas width if necessary
                            height="410" // Adjust canvas height to accommodate the 10x10 grid
                            style={{ cursor: 'pointer' }}
                            onClick={() => downloadImage(frameIndex)}
                        />
                    </div>
                ))}
            </div> */}
        </div>
    )
}
export default Bixel2