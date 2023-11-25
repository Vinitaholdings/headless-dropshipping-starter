import React from 'react';

const Footer: React.FC = () => {
  return (
    <div className="max-w-full mx-auto ">
      <div className="py-6 px-6 border-t bg-black border-gray-100 text-center flex flex-col md:flex-row items-center justify-between">
        <div className="flex items-center">
          <img
            src="/goods.png" // Assuming your logo is in the public directory
            alt="Logo"
            className="w-12 h-12 mr-2"
          />
          <p className="text-white text-sm px-50">
            Powered by{' '}
            <a
              href="https://slidehousemp.com"
              title="Slide House Records"
              target="_blank"
              rel="noopener noreferrer"
              className="ml-0.5 text-white hover:text-blue-600"
            >
              Slide House Records
            </a>
          </p>
        </div>
        <nav className="flex items-center justify-end space-x-3 md:space-x-6">
          <a
            href="/about"
            className="text-white hover:text-blue-600 p-1 transition text-sm"
          >
            FAQS
          </a>
          <a
            href="/terms-of-sale"
            className="text-white hover:text-blue-600 p-1 transition text-sm"
          >
            Terms of Sale
          </a>
        </nav>
      </div>
    </div>
  );
};

export default Footer;
