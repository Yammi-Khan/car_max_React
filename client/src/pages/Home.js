import React, { useEffect, useState } from "react";
import { data } from "../api/api";
import { Link } from "react-router-dom";

const Home = ({products, addToCart}) => {
  
  const [cart, setCart] = useState([]); // State variable to store cart items

  // Function to add a product to the cart
  const addToCartHandler = (product) => {
    addToCart(product); // Call the addToCart function passed as a prop
    setCart([...cart, product]);
  };


  return (
    <div>
      <div class="cont">
        <section class="text-gray-400 body-font flex items-center align-text-middle justify-center h-screen">
          <div class="container mx-auto px-5 py-24 md:flex-row flex-col items-center">
            <div class="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center">
              <h1 class="title-font sm:text-5xl text-7xl mb-4 font-medium text-white">
                Finance Your Next Car In Minutes
              </h1>
              <br />
              <div class="pd-10px flex justify-center">
                <Link
                  to="/Register"
                  class="inline-flex text-white bg-orange-800 font-bold border-0 py-1 px-6 focus:outline-none hover:bg-cyan-400 rounded text-lg"
                >
                  Get Registered !
                </Link>
              </div>
            </div>
            <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 ml-[700px]"></div>
          </div>
        </section>
      </div>
      <div></div>
      <section class="text-gray-600 body-font">
        <div class="container px-5 py-24 mx-auto">
          <div class="flex flex-wrap -m-4">
            {products.map((product) => {
              const { id, title, price, description, category, image } =
                product;
              if (id < 4) {
                return (
                  <div class="p-4 md:w-1/3">
                    <div class="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                      <img
                        class="lg:h-48 md:h-36 w-full object-cover object-center"
                        src={image}
                        alt="blog"
                      />
                      <div class="p-6">
                        <h2 class="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
                          {category}
                        </h2>
                        <h1 class="title-font text-lg font-medium text-gray-900 mb-3">
                          {title}
                        </h1>
                        <p class="leading-relaxed mb-3">${price}</p>
                        <div class="flex items-center flex-wrap">
                          <a class="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0">
                            Learn More
                            <svg
                              class="w-4 h-4 ml-2"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                              stroke-width="2"
                              fill="none"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            >
                              <path d="M5 12h14"></path>
                              <path d="M12 5l7 7-7 7"></path>
                            </svg>
                          </a>
                          <button
                            className="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0"
                            onClick={() => addToCartHandler(product)} // Add to cart button with onClick function
                          >Add to Cart</button>
                          <span class="text-gray-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
                            <svg
                              class="w-4 h-4 mr-1"
                              stroke="currentColor"
                              stroke-width="2"
                              fill="none"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              viewBox="0 0 24 24"
                            >
                              <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                              <circle cx="12" cy="12" r="3"></circle>
                            </svg>
                            1.2K
                          </span>
                          <span class="text-gray-400 inline-flex items-center leading-none text-sm">
                            <svg
                              class="w-4 h-4 mr-1"
                              stroke="currentColor"
                              stroke-width="2"
                              fill="none"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              viewBox="0 0 24 24"
                            >
                              <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                            </svg>
                            6
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              }
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
