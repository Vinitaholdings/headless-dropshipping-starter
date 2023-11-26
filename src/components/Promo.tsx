import React from 'react';
import Link from 'next/link';

const Promo = () => {
  return (
    <div className="relative h-screen overflow-hidden mt-[-40px]">
      <video
        className="absolute top-0 left-0 object-cover w-full h-screen"
        autoPlay
        loop
        muted
      >
        <source src="/pexels-banner5840829.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50"></div>

      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white">
        <Link href="/products"> {/* Use Link component for navigation */}
          <a className="text-4xl md:text-6xl font-bold mb-4">
            Discover Unique Artistry
          </a>
        </Link>
        <p className="text-lg md:text-xl mb-8">
          Immerse yourself in a world of creativity. Explore and collect exclusive
          artist merch that speaks to the soul.
        </p>
        <Link href="/products">
          <a className="bg-red-500 text-white py-2 px-4 rounded-full hover:bg-blue-600 transition duration-300">
            Shop Now
          </a>
        </Link>
      </div>
    </div>
  );
};

export default Promo;
