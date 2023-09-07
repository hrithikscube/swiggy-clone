import React from 'react'
import CtaButton from './common/CtaButton'

const Landing = () => {
  return (
    <div className="w-full flex flex-col lg:px-0 px-5">
      <div className="grid lg:grid-cols-2 items-start h-screen">
        <div className="lg:p-10 p-5 lg:pl-20">
          <div className="flex justify-between items-center ">
            <div className="flex items-center gap-1">
              <img
                src="/icons/swiggyLogo.svg"
                alt="swiggyLogo"
                className="w-10 h-10"
              />
              <p className="uppercase font-poppins text-xl text-swiggyOrange font-semibold tracking-widest">
                swiggy
              </p>
            </div>

            <div className="flex items-center gap-3">
              <button className="bg-white p-2 px-7 text-black capitalize font-poppins text-base font-medium">
                Login
              </button>
              <button className="bg-black p-2 px-7 text-white capitalize font-poppins text-base font-medium">
                Sign up
              </button>
            </div>
          </div>

          <div className='my-10 flex flex-col'>
            <h1 className="lg:text-4xl text-2xl font-poppins font-semibold text-footerDark">
              Movie marathon?
            </h1>
            <p className="lg:text-2xl text-lg font-poppins font-thin mt-2 tracking-wide text-[#808080]">
              Order food from favourite restaurants near you.
            </p>

            <div className="flex items-center relative bg-white border border-gray-200 lg:my-7 my-5">
              <input
                className="outline-none font-poppins p-[11px] w-full bg-transparent "
                placeholder="Enter your delivery location"
              />

              <button className="absolute right-40 hover:bg-[#f2f2f2] text-xs p-2 font-poppins">
                <div className='flex items-center gap-2'>
                    <img src="/icons/location.svg" alt="crosshair" className='w-5 h-5'/>
                    <p>Locate me</p>
                </div>
              </button>

              <div className="absolute right-0">
                <CtaButton>Find Food</CtaButton>
              </div>
            </div>

            <p className="font-poppins uppercase text-[#808080] text-base font-thin tracking-wide">
              POPULAR CITIES IN INDIA
            </p>
            <p className="text-sm mt-1 font-poppins text-footerDark opacity-80 capitalize font-medium">
              Ahmedabad, Bangalore, Chennai, Delhi, Gurgaon, Hyderabad, Kolkata,
              Mumbai, Pune & more.
            </p>
          </div>
        </div>

        <div>
          <img
            src="/images/herobanner.webp"
            alt="heroimage"
            className="h-screen object-cover"
          />
        </div>
      </div>
    </div>
  )
}

export default Landing
