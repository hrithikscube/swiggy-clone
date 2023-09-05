import CategoryCarousel from '@/components/CategoryCarousel'
import OfferCarousel from '@/components/OfferCarousel'
import SubHeading from '@/components/common/SubHeading'
import React from 'react'

const Home = () => {
    return (
        <div className='lg:w-[1290px] m-auto flex flex-col gap-7'>

            <div className='my-5'>
                <SubHeading title="Best offers for you" />
                <OfferCarousel />
            </div>
            
            <div className='my-5'>
                <SubHeading title="What's on your mind?" />
                <CategoryCarousel />
            </div>

            <div className='my-5'>
                <SubHeading title="Top restaurant chains in Bangalore" />
                <CategoryCarousel />
            </div>

        </div>
    )
}

export default Home