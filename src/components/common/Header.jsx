import Link from 'next/link'
import React from 'react'

const Header = () => {

    const pageLinks = [
        {
            name: 'search',
            link: '#'
        },
        {
            name: 'offers',
            link: '#'
        },
        {
            name: 'help',
            link: '#'
        },
        {
            name: 'sign in',
            link: '#'
        },
        {
            name: 'cart',
            link: '/cart'
        },
    ]

    return (
        <div className='w-full p-5 bg-white shadow'>

            <div className='lg:w-[1290px] m-auto flex lg:flex-row items-center justify-between'>

                {/* Brand Logo & Location */}
                <div className='flex items-center lg:gap-10'>
                    <img src="/icons/swiggyLogo.svg" alt="swiggyLogo" className='h-12 w-12 hover:scale-[1.1] transition-all cursor-pointer' />

                    <div className='lg:flex hidden flex-row items-start gap-2 group cursor-pointer'>
                        <p className='text-sm group-hover:text-swiggyOrange text-footerDark font-poppins font-medium tracking-wide border-b-2 border-footerDark group-hover:border-swiggyOrange'>Whitefield</p>
                        <p className='font-poppins text-sm text-[#808080] group-hover:opacity-50 font-medium tracking-wide'>Bengaluru, Karnataka, India</p>
                    </div>
                </div>

                {/* Menu Items */}

                <div className='lg:flex hidden items-center lg:gap-10 gap-7 lg:flex-row'>

                    {React.Children.toArray(
                        pageLinks.map(item => (
                            <Link href={item.link}>
                                <p className='capitalize cursor-pointer text-footerDark opacity-80 hover:opacity-100 hover:text-swiggyOrange font-poppins font-medium text-base tracking-wide'>{item.name}</p>
                            </Link>
                        ))
                    )}

                </div>


            </div>
        </div>
    )
}

export default Header