import { cities, companyItems, contactItems, legalItems } from '@/utils/helpers'
import Image from 'next/image'
import React, { Fragment } from 'react'
import CtaButton from './CtaButton'

const Footer = () => {
    return (
        <Fragment>
            {/* Download the app */}
            <div className='bg-[#f0f0f5] w-full p-6'>

                <div className='grid lg:grid-cols-2 lg:w-[1290px] m-auto'>

                    <div>
                        <p className='text-footerDark font-bold lg:text-3xl text-xl'>For better experience, download <br className='lg:block hidden' /> the swiggy app now</p>
                    </div>

                    <div className='flex lg:flex-row flex-col lg:items-center items-start gap-5 w-full lg:mt-0 mt-5'>

                        {/* Playstore Button */}
                        <div className='w-[220px]'>
                            <CtaButton>
                                <div className='flex justify-start items-center gap-2'>
                                    <Image
                                        src="/icons/playstore.svg"
                                        alt="playstore"
                                        width={30}
                                        height={30} />

                                    <div className='flex flex-col items-start'>
                                        <p className='text-white uppercase font-poppins text-sm tracking-wide'>get it on</p>
                                        <p className='text-white capitalize lg:text-xl text-lg'>google play</p>
                                    </div>

                                </div>
                            </CtaButton>

                        </div>

                        {/* Apple Button */}
                        <div className='w-[220px]'>
                            <CtaButton>
                                <div className='flex justify-start items-center gap-2'>
                                    <Image
                                        src="/icons/apple.svg"
                                        alt="apple"
                                        width={40}
                                        height={40} />

                                    <div className='flex flex-col items-start'>
                                        <p className='text-white uppercase font-poppins text-sm tracking-wide'>download on the</p>
                                        <p className='text-white capitalize lg:text-xl text-lg'>App Store</p>
                                    </div>

                                </div>
                            </CtaButton>

                        </div>

                    </div>

                </div>
            </div>

            {/* Footer */}
            <div className='w-full bg-footerDark p-10'>

                <div className='lg:w-[1290px] m-auto grid lg:grid-cols-4 lg:gap-10 gap-7 items-start'>

                    {/* Brand Logo & copyright information */}
                    <div>
                        <div className='flex items-center gap-3'>
                            <Image src="/icons/swiggy.svg" alt="swiggyIcon" width={21} height={32} />
                            <p className='font-poppins font-medium text-white lg:text-2xl text-xl'>Swiggy</p>
                        </div>

                        <p className='font-poppins text-secondaryGrey text-base capitaliza mt-2'>&copy; 2023 Bundl Technologies Pvt. Ltd</p>

                    </div>

                    {/* Company Links */}
                    <div className='flex flex-col gap-4'>
                        <h1 className='font-medium text-white font-poppins lg:text-xl text-lg'>Company</h1>

                        {React.Children.toArray(companyItems.map((item) => (
                            <p className='cursor-pointer capitalize text-base text-secondaryGrey font-thin font-poppins'>{item.name}</p>
                        )))}
                    </div>

                    {/* Contact us & Legal */}
                    <div>

                        <div className='flex flex-col gap-4'>
                            <h1 className='font-medium text-white font-poppins lg:text-xl text-lg'>Contact us</h1>

                            {React.Children.toArray(contactItems.map((item) => (
                                <p className='cursor-pointer capitalize text-base text-secondaryGrey font-thin font-poppins'>{item.name}</p>
                            )))}
                        </div>

                        <br />

                        <div className='flex flex-col gap-4'>
                            <h1 className='font-medium text-white font-poppins lg:text-xl text-lg'>Legal</h1>

                            {React.Children.toArray(legalItems.map((item) => (
                                <p className='cursor-pointer capitalize text-base text-secondaryGrey font-thin font-poppins'>{item.name}</p>
                            )))}
                        </div>

                    </div>

                    {/* We deliver to */}
                    <div className='flex flex-col gap-4'>
                        <h1 className='font-medium text-white font-poppins lg:text-xl text-lg'>We deliver to</h1>

                        {React.Children.toArray(cities.map((item) => (
                            <p className='cursor-pointer capitalize text-base text-secondaryGrey font-thin font-poppins'>{item.name}</p>
                        )))}
                    </div>

                </div>
            </div>
        </Fragment>
    )
}

export default Footer