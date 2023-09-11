import React from 'react'

const Logo = () => {
    return (
        <div className='flex items-center justify-start'>
            <div className='flex items-center gap-2'>
                <img src="/icons/swiggyLogo.svg" alt="swiggyLogo" className='w-9 h-9' />
                <p className='text-swiggyOrange uppercase font-poppins tracking-wide font-semibold lg:text-2xl text-xl'>swiggy</p>
            </div>
        </div>
    )
}

export default Logo;