import React from 'react';
import Link from 'next/link';
import { foodcategories } from "@/utils/helpers";


const OfferCarousel = () => {
    return (
        <div className='w-full flex flex-row items-center lg:justify-start overflow-x-auto snap-x snap-mandatory lg:py-6 py-4'>
            {React.Children.toArray(
                foodcategories.map((item) => (
                    <div className='lg:w-1/6 w-1/2 flex-shrink-0 snap-start flex flex-col items-center hover:scale-110 ease-linear duration-100'>
                        <Link href={'/restaurants/view/' + item.name}>
                            <div className="mr-7 cursor-pointer">
                                <img src={item.image} alt="banner_card" className='w-full flex-shrink-0 h-40' />
                            </div>
                        </Link>
                    </div>
                )),
            )}
        </div>
    )
}

export default OfferCarousel