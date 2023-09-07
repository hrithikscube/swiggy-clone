import React, { Fragment } from 'react'
import Header from './common/Header'
import Link from 'next/link'
import { useRouter } from 'next/router'

const Breadcrumb = ({ crumbs }) => {
    return (
        <div className='flex items-center gap-2'>
            {React.Children.toArray(crumbs.map((item, index) => (
                <Link href={item.link}>
                    <p className={`text-xs font-poppins font-medium ${index === 2 ? 'text-footerDark' : 'text-[#909090]'}`}>{item.name}</p>
                </Link>
            )))}
        </div>
    )
}

const OfferCard = () => {
    return (
        <div className='w-[250px] rounded-lg p-4 shadow border border-gray-300'>

            <div className='flex items-center gap-2'>
                <div className='w-5 h-5 rounded-full bg-slate-500' />
                <p className='uppercase font-poppins text-sm font-medium'>20% OFF upto <span className='capitalize'>Rs.</span>100</p>
            </div>
            <p className='uppercase font-poppins text-xs mt-1 text-[#808080]'>NO CODE REQUIRED | ABOVE <span className='capitalize'>Rs.</span> 249</p>

        </div>
    )
}


const ViewRestaurant = () => {

    const { query } = useRouter()

    console.log(query.slug, 'slug')

    const crumbs = [
        {
            name: 'Home /',
            link: '/'
        },

        {
            name: 'Bangalore /',
            link: '/'
        },

        {
            name: query.slug,
            link: '#'
        },
    ]

    return (
        <Fragment>
            <Header />
            <div className='lg:mt-10 mt-5 lg:w-[960px] m-auto lg:px-0 px-5'>

                <Breadcrumb crumbs={crumbs} />

                <div className='flex items-start justify-between lg:mt-7 mt-5'>

                    <div className='flex flex-col gap-1 item-start'>
                        <p className='font-poppins lg:text-xl text-lg font-medium'>Restaurant Name</p>
                        <p className='font-poppins text-xs text-[#808080]'>Biryani, Andhra Style</p>
                        <p className='font-poppins text-xs text-[#808080]'>Whitefield, Bangalore</p>
                    </div>

                    <div className='border border-gray-300 shadow  h-20 rounded-lg p-2 flex flex-col justify-between'>
                        <div className='flex items-center gap-2'>
                            <img src="/icons/star.svg" alt="starIcon" className='w-5 h-5' />
                            <p className='lg:text-lg text-base font-poppins text-footerDark font-medium'>4.3</p>
                        </div>
                        <hr className='border-b-1 border-gray-300' />
                        <p className='text-xs font-poppins text-[#808080] font-medium'>10K+ ratings</p>
                    </div>

                </div>

                <hr className='my-5 border-b-1 border-gray-300' />

                <div className='my-5 flex items-center gap-5'>

                    <div className='flex items-center gap-2 opacity-70'>
                        <img src="/icons/clock.svg" alt="clockIcon" className='w-6 h-6' />
                        <p className='text-base font-poppins font-bold text-footerDark'>30 mins</p>
                    </div>

                    <div className='flex items-center gap-2 opacity-70'>
                        <img src="/icons/rupee.svg" alt="rupeeIcon" className='w-6 h-6' />
                        <p className='text-base font-poppins font-bold text-footerDark'>500 for two</p>
                    </div>



                </div>

                <div className='flex items-center gap-5'>
                    {React.Children.toArray([1, 1, 1].map(item => (
                        <OfferCard />
                    )))}

                </div>
            </div>
        </Fragment>
    )
}

export default ViewRestaurant