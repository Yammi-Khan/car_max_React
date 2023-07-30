import React from 'react';



const category= () =>{

  

const HandleLuxury = () =>{

  window.location.href="/luxury"


}

const HandleSport = () =>{

  window.location.href="/Sport"


}

const HandleSUV = () =>{

  window.location.href="/SUV"


}

  return (
  
    <section className="bg-slate-200 text-black font-serif body-font">
      <div className="container px-5 py-24 mx-auto">
        <h1 className="sm:text-3xl text-2xl  title-font font-extrabold font-sans text-center text-orange-800 mb-20">CATEGORIES</h1>
        <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4 md:space-y-0 space-y-6">
          <div className="p-4 md:w-1/3 flex">
            <div className="flex-grow pl-6">
              <h2 className="text-gray-900 sm:text-xl title-font font-bold mb-2">LUXURY/SEDAN CARS</h2>
              <img src="http://1.bp.blogspot.com/-nIscOkmR1_k/TW2eV9ySLgI/AAAAAAAACbY/vzn5tlDA09A/s1600/2010_Infiniti-G37_Sedan_japanese-car-photyos_1.jpg" alt="sedans" />
          
              <button onClick={HandleLuxury}   className="mt-3 text-black font-mono inline-flex items-center">ExploreCars
              <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                  <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
                </button>

            </div>
          </div>
          <div className="p-4 md:w-1/3 flex">
            <div className="flex-grow pl-6">
              <h2 className="text-gray-900 sm:text-xl title-font font-bold mb-2">SPORT CARS</h2>
              <img src="https://th.bing.com/th/id/R.dbb4e3f958310aa26b676274fcce8934?rik=u%2fUfqT6%2fI5beOQ&riu=http%3a%2f%2f2.bp.blogspot.com%2f-GIZqnkWtnug%2fUHdsIcubjNI%2fAAAAAAAABEY%2fSSRSOkVrEGs%2fs1600%2fluxury_sports_cars_2012_Lamborghini_Gallardo.jpg&ehk=%2b988gvDr0jQ92D4aWvS2vA9496yNTdeXE6qV49x%2bcpk%3d&risl=&pid=ImgRaw&r=0" alt="sports cars" />
              <button onClick={HandleSport} className="mt-3 text-black font-mono inline-flex items-center">EXPLORE
                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                  <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
              </button>
            </div>
          </div>
          <div className="p-4 md:w-1/3 flex">
            <div className="flex-grow pl-6">
              <h2 className="text-gray-900 sm:text-xl title-font font-bold mb-2">SUV Cars</h2>
              <img src="https://th.bing.com/th/id/R.3a6d0ca3c8ebfc71c425a3899c178eea?rik=1nBbbF8TjGparQ&pid=ImgRaw&r=0" alt="SUV cars" />
              <button onClick={HandleSUV} className="mt-3 text-black font-mono inline-flex items-center">EXPLORE
                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                  <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default category
