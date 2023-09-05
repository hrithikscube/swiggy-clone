import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import React from "react";
import { offerCardItems } from "@/utils/helpers";
import ButtonGroup from "./common/ButtonGroup";

// const RightArrow = () => {
//     return (
//         <img src="/icons/rightArrow.svg" alt="rightArrow" className="w-4 h-4" />
//     )
// }

// const ButtonGroup = ({ next, previous, goToSlide, ...rest }) => {
//     const { carouselState: { currentSlide } } = rest;
//     return (
//         <div className="flex gap-3 items-center">
//             <button
//                 className='bg-[#f2f2f2] rounded-full p-2 -rotate-180 absolute -top-1 right-10 shadow'
//                 onClick={() => previous()}>
//                 <RightArrow />
//             </button>
//             <button
//                 className=' bg-[#f2f2f2] rounded-full p-2 absolute -top-1 right-0 shadow'
//                 onClick={() => next()}>
//                 <RightArrow />
//             </button>
//         </div>

//     );
// };

const OfferCarousel = () => {
    return (
        <Carousel
            additionalTransfrom={0}
            arrows={false}
            autoPlaySpeed={3000}
            centerMode={false}
            className=""
            containerClass="container"
            dotListClass=""
            draggable
            focusOnSelect={false}
            infinite
            itemClass=""
            keyBoardControl
            minimumTouchDrag={80}
            partialVisible
            pauseOnHover
            renderArrowsWhenDisabled={false}
            renderButtonGroupOutside={true}
            customButtonGroup={<ButtonGroup />}
            renderDotsOutside={false}
            responsive={{
                desktop: {
                    breakpoint: {
                        max: 3000,
                        min: 1024
                    },
                    items: 2.5,
                    partialVisibilityGutter: 30
                },
                mobile: {
                    breakpoint: {
                        max: 464,
                        min: 0
                    },
                    items: 1,
                    partialVisibilityGutter: 30
                },
                tablet: {
                    breakpoint: {
                        max: 1024,
                        min: 464
                    },
                    items: 2,
                    partialVisibilityGutter: 30
                }
            }}
            rewind={false}
            rewindWithAnimation={false}
            rtl={false}
            shouldResetAutoplay
            showDots={false}
            sliderClass=""
            slidesToSlide={1}
            swipeable
        >
            {React.Children.toArray(offerCardItems.map(item => (
                <div className="mr-7">
                    <img src={item} alt="banner_card" />
                </div>
            )))}
        </Carousel>
    )
}


export default OfferCarousel