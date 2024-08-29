import React from 'react';
import Link from 'next/link';
import { offerCardItems } from '@/utils/helpers';

const OfferCarousel = () => {
  return (
    <div className='w-full flex flex-row items-center lg:justify-start overflow-x-auto snap-x snap-mandatory lg:py-6 py-4'>
      {React.Children.toArray(
        offerCardItems.map((item) => (
          <div className='lg:w-1/3 w-11/12 flex-shrink-0 snap-start flex flex-col items-center'>
            <Link href={'/restaurants/view/' + item.name}>
              <div className="mr-7 cursor-pointer">
                <img src={item.image} alt="banner_card" className='w-full flex-shrink-0 lg:h-60 h-44' />
              </div>
            </Link>
          </div>
        )),
      )}
    </div>
  )
}

export default OfferCarousel