import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import React from "react";
import { offerCardItems } from "@/utils/helpers";

// const responsive = {
//     desktop: {
//         breakpoint: { max: 3000, min: 1024 },
//         items: 3,
//         slidesToSlide: 3 // optional, default to 1.
//     },
//     tablet: {
//         breakpoint: { max: 1024, min: 464 },
//         items: 2,
//         slidesToSlide: 2 // optional, default to 1.
//     },
//     mobile: {
//         breakpoint: { max: 464, min: 0 },
//         items: 1,
//         slidesToSlide: 1 // optional, default to 1.
//     }
// };


const OfferCarousel = () => {
    return (
        <Carousel
            additionalTransfrom={0}
            arrows
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
            renderButtonGroupOutside={false}
            renderDotsOutside={false}
            responsive={{
                desktop: {
                    breakpoint: {
                        max: 3000,
                        min: 1024
                    },
                    items: 2.5,
                    partialVisibilityGutter: 40
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