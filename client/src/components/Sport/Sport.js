import React from 'react'
import { data } from '../../api/api';
import { useState } from 'react';


const Sport = () => {

  const [products, setProducts] = useState(data);
  
  return (
    <div>
      {products.map((product) => {
        const { id, title, price, description, category, image } = product;

        if (category === "Sport Car") {
          return (
            <div key={category} className="p-4 md:w-1/3 flex-shrink inline-table -m-5">
              <div className="h-full border-2 border-gray-200 m-10 border-opacity-60 rounded-lg p-9 overflow-hidden">
                <img className="lg:h-48 md:h-36 w-full object-cover object-center" src={image} alt="blog" />
                <div className="p-6">
                  <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">{category}</h2>
                  <h1 className="title-font text-lg font-medium text-gray-900 mb-3">{title}</h1>
                  <p className="leading-relaxed mb-3">${price}</p>
                  <div className="flex items-center flex-wrap">
                    <a className="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0">Learn More
                      <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M5 12h14"></path>
                        <path d="M12 5l7 7-7 7"></path>
                      </svg>
                    </a>
                    <span className="text-gray-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
                      <svg className="w-4 h-4 mr-1" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                        <circle cx="12" cy="12" r="3"></circle>
                      </svg>1.2K
                    </span>
                  
                  </div>
                </div>
              </div>
            </div>
          );
        } else {
          return null; // Return null if the category is not "Sedan Car"
        }
      })}
    </div>
  );
}
export default Sport
