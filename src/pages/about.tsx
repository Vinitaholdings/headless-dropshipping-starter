// Create a file named AboutUs.tsx

import React from 'react';

const AboutUs: React.FC = () => {
  return (
    <div className="max-w-2xl mx-auto mt-8 p-4">
      <section className="mb-8">
        <h1 className="text-3xl font-bold mb-4">About MerchbyGoods</h1>
        <p className="mb-4">Welcome to MerchbyGoods, your go-to destination for unique and exclusive artist merchandise! At MerchbyGoods, we believe in connecting fans with their favorite artists through high-quality and one-of-a-kind merchandise.</p>
        <p>Our platform showcases a diverse collection of merchandise created by a wide array of talented artists from around the world. Whether you're into music, visual arts, or any other form of creative expression, MerchbyGoods is the place to discover and support artists while finding cool, limited-edition items.</p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
        <p className="mb-4">Our mission at MerchbyGoods is to empower artists by providing them with a platform to showcase and sell their merchandise directly to fans. We aim to create a thriving community where artists and fans can connect, fostering a sense of appreciation for creativity and artistic expression.</p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">How It Works</h2>
        <p className="mb-4">For Artists: MerchbyGoods makes it easy for artists to showcase and sell their merchandise. Simply create an account, set up your store, and start reaching a global audience of art enthusiasts.</p>
        <p>For Shoppers: Explore our curated collection of merchandise from various artists. Each purchase directly supports the creators, allowing them to continue producing the art you love.</p>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
        <p>Have questions or suggestions? We'd love to hear from you! Contact our support team at support@merchbygoods.com.</p>
      </section>
    </div>
  );
}

export default AboutUs;
