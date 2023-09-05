import OfferCarousel from '@/components/OfferCarousel'
import React from 'react'

const Home = () => {
    return (
        <div className='lg:w-[1290px] m-auto'>
            <p className='font-poppins font-bold lg:text-2xl text-xl text-footerDark my-2'>Best offers for you</p>
            <OfferCarousel />
        </div>
    )
}

export default Home