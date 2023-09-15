import React from 'react'
import Logo from './Logo'
import Link from 'next/link'
import { useRouter } from 'next/router'

const menuItems = [
    {
        name: 'Dashboard',
        link: '/dashboard'
    },
    {
        name: 'Users',
        link: '/dashboard/users'
    },
    {
        name: 'Orders',
        link: '/dashboard/orders'
    },
    {
        name: 'Restaurants',
        link: '/dashboard/restaurants'
    },
    {
        name: 'Logout',
        link: '/dashboard/logout'
    },

]

const activeStyle = 'text-swiggyOrange bg-[#f2f2f2]'

const inActiveStyle = 'text-footerDark hover:text-swiggyOrange'

const SideMenu = () => {
    const { route } = useRouter()
    return (
        <div className='lg:w-2/12 w-full py-5 bg-none lg:h-screen lg:border-r flex lg:flex-col flex-row items-start lg:justify-normal justify-between'>

            <div className='px-5'>
                <Logo />
            </div>

            <div className='w-full lg:block hidden'>
                <div className='mt-5 w-full lg:gap-0 gap-5'>
                    <hr className='bg-gray-400 border-t' />
                    {
                        React.Children.toArray(menuItems.map((item) => (
                            <Link href={item.link}>
                                <button
                                    className={`text-base text-start font-poppins font-medium capitalize bg-none p-3 tracking-wide w-full ${route === item.link ? activeStyle : inActiveStyle}`}
                                >{item.name}</button>
                            </Link>
                        )))
                    }
                </div>
            </div>

            <div className='absolute right-5 lg:hidden block top-5'>
                <img src="/icons/burgerMenu.svg" alt="burgerIcon" className='w-7 h-7 cursor-pointer' />
            </div>

            

                    

        </div>
    )
}

export default SideMenu