import React from 'react'
import FrescoCard from '../components/Home/FrescoCard'

function Home() {
    return (
        <div className='bixel1bg'>
            {Array.from({ length: 21 }).map((_, index) => (
                <FrescoCard key={index} frescoNum={index} />
            ))}
        </div>
    )
}

export default Home
