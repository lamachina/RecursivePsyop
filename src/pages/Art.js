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
                    Each collection is a fully?recursive=psyop
                </Typography>
                <Typography variant='body2' color='#eee' fontFamily={" 'Chakra Petch', sans-serif"}>
                    Authentic. Recursive. Text.
                </Typography>
            </Stack>

            {/* PSYOPS */}
            <HomeMenuCard
                imageSrc="/bg.jpg"
                title="  FRESC ORDINALS"
                numberSupply="77 pieces"
                paragraph="With the innovative use of recursive inscription, enter into a new dimension of digital artifacts."
                linkUrl="/fresc"
                discoDis={false}
                discoDisMint={false}
            />
            <HomeMenuCard
                imageSrc="/hzbg.png"
                title="HERZ STANDARD"
                numberSupply="3,500 Frequencies"
                paragraph="Engage with frequency not only as a scientific concept but also as a creative force that transcends traditional boundaries."
                linkUrl="/"
                discoDis={true}
                discoDisMint={true}
            />
            <HomeMenuCard
                imageSrc="/bgpunki.jpg"
                title="???"
                numberSupply="..."
                paragraph="..."
                linkUrl="/"
                discoDis={true}
                discoDisMint={true}
            />

        </div>
    )
}

export default Art