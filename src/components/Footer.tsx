import React from 'react';
import Link from 'next/link';
import Image from 'next/image'; // Import Image component

const Footer: React.FC = () => {
  return (
    <div className="max-w-full mx-auto">
      <div className="py-6 px-6 border-t bg-black border-gray-100 text-center flex flex-col md:flex-row items-center justify-between">
        <div className="flex items-center">
          <Link href="https://slidehousemp.com"> {/* Use Link component for external links */}
            <a className="flex items-center">
              <Image
                src="/goods.png" // Assuming your logo is in the public directory
                alt="Logo"
                width={100} // Set the width and height attributes
                height={40}
                className="mr-2"
              />
              <p className="text-white text-sm">
                Powered by Slide House Records
              </p>
            </a>
          </Link>
        </div>
        <nav className="flex items-center justify-end space-x-3 md:space-x-6">
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
