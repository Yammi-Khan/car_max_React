import React, { useEffect, useState } from "react";
import { data } from "../api/api";




const Home = () => {

  const [products, setProducts] = useState(data)

  // useEffect(() => {
  //   const fetchData = async()  => {
  //     const respone = await fetch('https://fakestoreapi.com/products')
  //     const data = await respone.json()
  //     console.log(data)
  //     setProducts(data)
  //   }
  //   fetchData()
    
  // }, [])

  return (
    <div>
   <div className="cont"> 
    <section class="text-gray-400 body-font" >
      <div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
        <div class="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
            Toyota Supra MK4
          </h1>
          <p class="mb-8 leading-relaxed">
          The Supra MK4 was introduced as the fourth generation of the Supra lineup, succeeding the MK3 model. 
          In terms of performance, the Supra MK4 was known for its acceleration and top speed capabilities. 
          It offered exhilarating performance on both the street and the track, with quick acceleration and a top speed that could reach well over 300 km/h (186 mph).
          </p>
          <div class="flex justify-center">
            <button class="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
             Get started
            </button>
          </div>
        </div>
        <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 ml-[300px]">
          
        </div>
      </div>
    </section>
    </div>
    <div>
 </div>
 <section class="text-gray-600 body-font">
  <div class="container px-5 py-24 mx-auto">
    <div class="flex flex-wrap -m-4">
    {products.map((product) => {
  const { id, title, price, description, category, image } = product;
  return (
    <div class="p-4 md:w-1/3" key={id}>
      <div class="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
        <img class="lg:h-48 md:h-36 w-full object-cover object-center" src={image} alt="blog" />
        <div class="p-6">
          <h2 class="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">{category}</h2>
          <h1 class="title-font text-lg font-medium text-gray-900 mb-3">{title}</h1>
          <p class="leading-relaxed mb-3">${price}</p>
          <div class="flex items-center flex-wrap">
            <a class="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0">Learn More
              <svg class="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
                <path d="M5 12h14"></path>
                <path d="M12 5l7 7-7 7"></path>
              </svg>
            </a>
            <span class="text-gray-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
              <svg class="w-4 h-4 mr-1" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
                <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                <circle cx="12" cy="12" r="3"></circle>
              </svg>1.2K
            </span>
            <span class="text-gray-400 inline-flex items-center leading-none text-sm">
              <svg class="w-4 h-4 mr-1" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
                <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
              </svg>6
            </span>
          </div>
        </div>
      </div>
    </div>
  );
})}

      
    </div>
  </div>
</section>
    </div>
    
    
  );
};

export default Home;
