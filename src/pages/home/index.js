import CategoryCarousel from '@/components/CategoryCarousel'
import OfferCarousel from '@/components/OfferCarousel'
import RestaurantCarousel from '@/components/RestaurantCarousel'
import SubHeading from '@/components/common/SubHeading'
import React from 'react'

const Home = () => {
    return (
        <div className='lg:w-[1290px] m-auto flex flex-col'>

            <div className='my-5 relative'>
                <SubHeading title="Best offers for you" />
                <OfferCarousel />
            </div>
            
            <div className='my-5 relative'>
                <SubHeading title="What's on your mind?" />
                <CategoryCarousel />
            </div>

            <div className='my-5 relative'>
                <SubHeading title="Top restaurant chains in Bangalore" />
                <RestaurantCarousel />
            </div>

        </div>
    )
}

export default Home