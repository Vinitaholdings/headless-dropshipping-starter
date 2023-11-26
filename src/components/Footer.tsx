import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Footer: React.FC = () => {
  return (
    <div className="max-w-full mx-auto">
      <div className="py-6 px-6 border-t bg-black border-gray-100 text-center flex flex-col md:flex-row items-center justify-between">
        <div className="flex items-center">
          {/* Replace <img> with Next.js Image component */}
          <Image
            src="/goods.png" // Assuming your logo is in the public directory
            alt="Logo"
            width={100}
            height={50}
            className="mr-2"
          />
          <p className="text-white text-sm px-4">
            Powered by{' '}
            {/* Replace <a> tag with Next.js Link component */}
            <Link
              href="https://slidehousemp.com"
              // Remove title, as it's not a valid prop for Link
              target="_blank"
              rel="noopener noreferrer"
              className="ml-0.5 text-white hover:text-blue-600"
            >
              Slide House Records
            </Link>
          </p>
        </div>
        <nav className="flex items-center justify-end space-x-3 md:space-x-6">
          {/* Replace <a> tags with Next.js Link components */}
          <Link href="/about">
            <a className="text-white hover:text-blue-600 p-1 transition text-sm">
              FAQS
            </a>
          </Link>
          <Link href="/terms-of-sale">
            <a className="text-white hover:text-blue-600 p-1 transition text-sm">
              Terms of Sale
            </a>
          </Link>
        </nav>
      </div>
    </div>
  );
};

export default Footer;
