import CategoryCarousel from '@/components/CategoryCarousel'
import OfferCarousel from '@/components/OfferCarousel'
import RestaurantCarousel from '@/components/RestaurantCarousel'
import Card from '@/components/common/Card'
import SubHeading from '@/components/common/SubHeading'
import { popularRestaurants } from '@/utils/helpers'
import React from 'react'


const Home = () => {
    return (
        <div className='lg:w-[1290px] m-auto flex flex-col lg:px-0 px-5'>

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

            <hr className='border-gray-300' />

            <div className='my-5'>
                <SubHeading title="Restaurants with online food delivery in Bangalore" />

                <div className='grid lg:grid-cols-4 gap-5'>
                    {React.Children.toArray(popularRestaurants.map(item => (
                        <Card item={item} />
                    )))}
                </div>
            </div>

        </div>
    )
}

export default Home