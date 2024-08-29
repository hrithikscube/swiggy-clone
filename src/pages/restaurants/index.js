import React from 'react';
import Link from 'next/link';
import Card from '@/components/common/Card';
import Footer from '@/components/common/Footer';
import Header from '@/components/common/Header';
import { popularRestaurants } from '@/utils/helpers';
import OfferCarousel from '@/components/OfferCarousel';
import SubHeading from '@/components/common/SubHeading';
import CategoryCarousel from '@/components/CategoryCarousel';
import RestaurantCarousel from '@/components/RestaurantCarousel';

const FilterCta = (props) => {
  return (
    <button className="py-2 rounded-full px-4 border border-[#121212]/40 text-footerDark bg-transparent capitalize hover:border-[#121212]">
      {props.children}
    </button>
  )
}


const Home = () => {

  return (
    <>
      <Header />
      <div className="lg:w-[1290px] m-auto flex flex-col lg:px-0 px-5 overflow-hidden">

        <div className="my-5 relative overflow-x-hidden flex flex-col">
          <SubHeading title="Best offers for you" />
          <OfferCarousel />
        </div>

        <div className="my-5 relative overflow-x-hidden flex flex-col">
          <SubHeading title="What's on your mind?" />
          <CategoryCarousel />
        </div>

        <div className="my-5 relative overflow-x-hidden">
          <SubHeading title="Top restaurant chains in Bangalore" />

          <div className="my-5 flex items-start">
            <div className="flex items-center flex-wrap gap-3">
              <FilterCta>
                <div className="flex items-center gap-2 justify-center">
                  <p className="lg:text-sm text-xs capitalize font-poppins">Filter</p>
                  <img
                    src="/icons/filter.svg"
                    alt="filterIcon"
                    className="w-5 h-5"
                  />
                </div>
              </FilterCta>

              <FilterCta>
                <div className="flex items-center gap-2 justify-center">
                  <p className="lg:text-sm text-xs capitalize font-poppins">Sort By</p>
                  <img
                    src="/icons/dropdown.svg"
                    alt="dropdownIcon"
                    className="w-3 h-3"
                  />
                </div>
              </FilterCta>

              {React.Children.toArray(
                [
                  'Fast Deliver',
                  'New on Swiggy',
                  'Ratings 4.0+',
                  'Pure Veg',
                  'Offers',
                  'Rs. 300 - Rs.600',
                  'Less than 300',
                ].map((item) => (
                  <FilterCta>
                    <div className="flex items-center gap-2 justify-center">
                      <p className="lg:text-sm text-xs capitalize font-poppins">{item}</p>
                    </div>
                  </FilterCta>
                )),
              )}
            </div>
          </div>

          <RestaurantCarousel />
        </div>

        <div className="lg:justify-start flex flex-col lg:items-start justify-center items-center">
          <SubHeading title="Restaurants with online food delivery in Bangalore" />

          <div className="grid lg:grid-cols-4 grid-cols-1 items-center justify-start w-full lg:gap-y-6 gap-y-4 lg:py-6 py-4">
            {React.Children.toArray(
              popularRestaurants.map((item) => (
                <Link
                  href={{
                    pathname: '/restaurants/view/' + item.name,
                    query: {
                      id: item.id,
                      name: item.name,
                      description: item.description,
                      rating: item.rating,
                      location: item.location,
                    },
                  }}
                >
                  <Card item={item} />
                </Link>
              )),
            )}
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Home
