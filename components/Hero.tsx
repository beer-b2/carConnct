"use client";

import Image from "next/image";
import CustomButton from "./CustomButton";

const Hero = () => {
  const handleScroll = () => {};

  return (
    <div className="hero">
      <div className="flex-1 pt-36 padding-x">
        <h1 className="hero__title">
          Discover Your Next Ride - Effortlessly Book or Rent a Car!
        </h1>
        <p className="hero__subtitle">
          Enjoy a Smooth Ride: Effortless Car Rentals with Our Simple Booking
        </p>

        <CustomButton
          title="Explore Cars"
          containerStyles=" border-2 bg-primary-blue text-white rounded-full mt-10  transition duration-150 ease-out hover:ease-in hover:text-primary-blue hover:bg-white hover:shadow-md hover:border-primary-blue "
          handleClick={handleScroll}
        />
      </div>
      <div className="hero__image-container">
        <div className="hero__image">
          <Image src="/hero.png" alt="hero" fill className="object-contain" />
        </div>

        <div className="hero__image-overlay" />
      </div>
    </div>
  );
};

export default Hero;
