import React from 'react';
import Card from './common/Card';
import { popularRestaurants } from '@/utils/helpers';

const RestaurantCarousel = () => {
  return (
    <div className='w-full flex flex-row items-center lg:justify-start overflow-x-auto snap-x snap-mandatory lg:py-6 py-4'>
      {React.Children.toArray(
        popularRestaurants.map((item) => (
          <div className='lg:w-1/4 w-full flex-shrink-0 snap-start'>
            <Card item={item} />
          </div>
        )),
      )}
    </div>
  )
}

export default RestaurantCarousel