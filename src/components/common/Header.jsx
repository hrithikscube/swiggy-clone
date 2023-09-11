import Link from 'next/link'
import SidebarDrawer from './SideDrawer';
import React, { Fragment, useState } from 'react'
import InputBox from './Inputbox';
import CtaButton from './CtaButton';

const LoginForm = () => {
    return (
        <div className='p-10'>
            <h1 className='lg:text-3xl text-2xl font-poppins font-medium text-footerDark tracking-wide'>Login</h1>

            <p className='text-sm font-poppins text-gray-400 mt-2'>or
                <span className='text-sm font-poppins text-swiggyOrange cursor-pointer'> create an account</span></p>

            <div className='w-7 border-b border-footerDark' />

            <div className="w-full flex flex-col gap-4 mt-5">

                <InputBox name="name" label="Enter Username" styles="w-full" />

                <CtaButton>
                    Login
                </CtaButton>
            </div>

            <p className='text-sm font-poppins text-footerDark mt-2'>If your a registered store owner.

                Click <Link href="/dashboard">
                    <span className='text-sm font-poppins text-swiggyOrange cursor-pointer hover:underline'>here</span>
                </Link>
            </p>


        </div>
    )
}

const DetecLocation = () => {
    return (
        <div className='p-10'>

            <div className="w-full flex flex-col gap-4 mt-5">

                <input className='p-3 w-full border border-gray-400 outline-none font-poppins text-sm' placeholder='Search for area, street name..' />

                <div className='w-full p-7 border border-gray-400 group flex items-start gap-3'>

                    <img src="/icons/location.svg" alt="crosshair" className='w-6 h-6' />

                    <div>
                        <p className='group-hover:text-swiggyOrange text-sm font-poppins font-medium text-footerDark'>Get current location</p>

                        <p className='text-sm font-poppins text-[#808080]'>Using GPS</p>
                    </div>



                </div>

            </div>
        </div>
    )
}


const Header = () => {

    const pageLinks = [
        {
            name: 'search',
            link: '#',
            onClick: () => { }
        },
        {
            name: 'offers',
            link: '#',
            onClick: () => { }
        },
        {
            name: 'help',
            link: '#',
            onClick: () => { }
        },
        {
            name: 'sign in',
            link: '#',
            onClick: () => signinOpen()
        },
        {
            name: 'cart',
            link: '/cart',
            onClick: () => { }
        },
    ]

    const [signin, setsignin] = useState(false)

    console.log(signin, 'signin')

    const signinOpen = () => {
        setsignin(true)
    }

    const signInClose = () => {
        setsignin(false)
    }

    const [locationDrawer, setLocationDrawer] = useState(false)

    const locationDrawerOpen = () => {
        setLocationDrawer(true)
    }

    const locationDrawerClose = () => {
        setLocationDrawer(false)
    }

    return (
        <Fragment>
            <div className='w-full p-5 bg-white shadow'>

                <div className='lg:w-[1290px] m-auto flex lg:flex-row items-center justify-between'>

                    {/* Brand Logo & Location */}
                    <div className='flex items-center lg:gap-10'>
                        <Link href="/">
                            <img src="/icons/swiggyLogo.svg" alt="swiggyLogo" className='h-12 w-12 hover:scale-[1.1] transition-all cursor-pointer' />
                        </Link>

                        <div onClick={locationDrawerOpen} className='lg:flex hidden flex-row items-start gap-2 group cursor-pointer'>
                            <p className='text-sm group-hover:text-swiggyOrange text-footerDark font-poppins font-medium tracking-wide border-b-2 border-footerDark group-hover:border-swiggyOrange'>Whitefield</p>
                            <p className='font-poppins text-sm text-[#808080] group-hover:opacity-50 font-medium tracking-wide'>Bengaluru, Karnataka, India</p>
                        </div>
                    </div>

                    {/* Menu Items */}

                    <div className='lg:flex hidden items-center lg:gap-10 gap-7 lg:flex-row'>

                        {React.Children.toArray(
                            pageLinks.map(item => (
                                <Link href={item.link}>
                                    <p onClick={item.onClick} className='capitalize cursor-pointer text-footerDark opacity-80 hover:opacity-100 hover:text-swiggyOrange font-poppins font-medium text-base tracking-wide'>{item.name}</p>
                                </Link>
                            ))
                        )}

                    </div>

                </div>
            </div>

            <SidebarDrawer
                anchor="right"
                open={signin}
                handleClose={signInClose}
                renderComponent={<LoginForm />}
            />

            <SidebarDrawer
                anchor="left"
                open={locationDrawer}
                handleClose={locationDrawerClose}
                renderComponent={<DetecLocation />}
            />

        </Fragment>
    )
}

export default Header