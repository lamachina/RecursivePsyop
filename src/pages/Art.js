import React from 'react'
import HomeMenuCard from '../components/Home/HomeMenuCard'
import { Stack, Typography } from '@mui/material'

function Art() {
    return (
        <div >
            <Stack display='flex' flexDirection='column' p={2}>
                <Typography variant='h4' color='#eee' fontWeight={900} fontFamily={" 'Chakra Petch', sans-serif"}>
                    ART?
                </Typography>
                <Typography variant='body1' color='#bbb' fontFamily={" 'Chakra Petch', sans-serif"}>
                    Each collection is a fully recursive psyop
                </Typography>
                <Typography variant='body2' color='#eee' fontFamily={" 'Chakra Petch', sans-serif"}>
                    Authentic Recursive Text
                </Typography>
            </Stack>
            <HomeMenuCard
                imageSrc="/bg.jpg"
                title="  FRESC ORDINALS"
                numberSupply="77 pieces"
                paragraph="With the innovative use of recursive inscription, enter into a new dimension of digital artifacts."
                linkUrl="/fresc"
            />
            <HomeMenuCard
                imageSrc="/hzbg.png"
                title="HERZ STANDARD"
                numberSupply="3,500 Frequencies"
                paragraph="The fusion of hertz, blockchain technology, and art offers a remarkable opportunity for self-expression and exploration. By participating in the .Hz standard, individuals can engage with frequency not only as a scientific concept but also as a creative force that transcends traditional boundaries."
                linkUrl="/"
            />

        </div>
    )
}

export default Art