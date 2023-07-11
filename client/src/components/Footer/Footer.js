import React from 'react';

const Footer = () => {
  const handleClick = () => {
    alert("Your feedback has been submitted.");
  };

  return (
    <footer className="text-white bg-gray-700 body-font">
      <div className="border-t border-gray-200">
        <div className="container px-5 py-8 flex flex-wrap mx-auto items-center">
          <div className="flex md:flex-nowrap flex-wrap justify-center items-end md:justify-start">
            <div className="relative sm:w-64 w-40 sm:mr-4 mr-2">
              <label htmlFor="footer-field" className="leading-7 text-sm font-serif font-semibold text-black">
                Feedback
              </label>
              <input
                type="text"
                id="footer-field"
                name="footer-field"
                className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:ring-2 focus:bg-gray-100 focus:ring-red-200 focus:border-blue-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />

            </div>
            <button
              className="inline-flex text-white bg-lime-700 border-0 py-2 px-6 focus:outline-none hover:bg-teal-600 rounded"
              onClick={handleClick}
            >Submit
            </button>
          </div>
          <span className="inline-flex lg:ml-auto lg:mt-0 mt-6 w-full justify-center md:justify-start md:w-auto">
            <a className="text-blue-500" href="https://www.facebook.com/your-facebook-url" target="_blank" rel="noopener noreferrer">
              <svg
                fill="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
              </svg>
            </a>
            <a className="ml-3 text-gray-500" href="https://www.twitter.com/your-twitter-url" target="_blank" rel="noopener noreferrer">
              <svg
                fill="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
              </svg>
            </a>

            <a className="ml-3 text-gray-500"  href="https://www.instagram.com/your-instagram-url" target="_blank" rel="noopener noreferrer">
              <svg
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01" />
              </svg>
            </a>
          </span>
        </div>
      </div>

      <div className="bg-white">
        <div className="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
          <p className="text-gray-800 text-sm text-center sm:text-left">
            © 2023 CaR MaXz —
            <a href="/" className="text-black ml-1" target="_blank" rel="noopener noreferrer">
              @carmaxzy
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
