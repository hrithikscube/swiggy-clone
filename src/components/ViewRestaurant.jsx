import React, { Fragment } from 'react'
import Header from './common/Header'
import Link from 'next/link'

const ViewRestaurant = ({ name }) => {

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
            name: name,
            link: '#'
        },
    ]

    return (
        <Fragment>
            <Header />
            <div className='lg:mt-10 mt-5 lg:w-[1290px] m-auto lg:px-0 px-5'>

                <div className='flex items-center gap-2'>
                    {React.Children.toArray(crumbs.map(item => (
                        <Link href={item.link}>
                            <p className='text-sm font-poppins text-[#808080]'>{item.name}</p>
                        </Link>
                    )))}
                </div>

            </div>
        </Fragment>
    )
}

export default ViewRestaurant