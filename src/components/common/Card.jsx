import React from 'react'

const Card = ({ item }) => {
    return (
        <div className="mr-4 cursor-pointer w-full">
            <img src={item.image} alt="food_category_card"
                className="h-44 object-cover lg:w-[290px] w-full rounded-xl shadow-md"
            />
            <div className="flex flex-col mt-2 gap-1">
                <p className="text-lg font-poppins font-medium  text-footerDark">{item?.name}</p>
                <div className="flex items-center gap-2">
                    <img src="/icons/rating.svg" alt="rating" className="w-5 h-5" />
                    <p className="text-sm text-[#292929] font-poppins font-medium">{item?.rating}</p>
                </div>
                <div>
                    <p className="text-sm text-[#808080] font-poppins font-regular">{item?.description}</p>
                    <p className="text-sm text-[#808080] font-poppins font-regular">{item?.location}</p>
                </div>
            </div>
        </div>
    )
}

export default Card