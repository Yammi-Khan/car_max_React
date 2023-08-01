import React from 'react'

const Contact = () => {
  const handClick= () =>{
    alert("your message is recieved");
  }
  return (
    <section class="text-gray-600 bg-slate-100 body-font relative">
  <div class="container px-5 py-24 mx-auto">
    <div class="flex flex-col text-center w-full mb-12">
      <h1 class="sm:text-4xl text-3xl font-bold title-font mb-4 text-gray-900">Contact Us</h1>
    </div>
    <div class="lg:w-1/2 md:w-2/3 mx-auto">
      <div class="flex flex-wrap -m-2">
        <div class="p-2 w-1/2">
          <div class="relative">
            <label for="name" class="leading-7 font-semibold text-sm text-gray-600">Name</label>
            <input type="text" id="name" name="name" class="w-full bg-gray-200 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
          </div>
        </div>
        <div class="p-2 w-1/2">
          <div class="relative">
            <label for="email" class="leading-7 font-semibold text-sm text-gray-600">Email</label>
            <input type="email" id="email" name="email" class="w-full bg-gray-200 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
          </div>
        </div>
        <div class="p-2 w-full">
          <div class="relative">
            <label for="message" class="leading-7 font-semibold text-sm text-gray-600">Message</label>
            <textarea id="message" name="message" class="w-full bg-gray-200 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
          </div>
        </div>
        <div class="p-2 w-full">
          <button onClick={handClick} class=" flex mx-auto text-white bg-sky-600 border-0 py-2 px-8 focus:outline-none hover:bg-blue-700 rounded text-lg">submit</button>
        </div>
        <div class="p-2 w-full pt-8 mt-8 border-t border-gray-200 text-center">
          <a class="text-indigo-500">aneeskhann666@gmail.com</a>
          <p class="leading-normal my-5">CUI Abbttabad.
            <br/>Khyber Pukhtunkhwa
          </p>
          <span class="inline-flex">
            <a href='https://www.facebook.com/profile.php?id=100004111214737&mibextid=ZbWKwL' target='_blank'  class="text-blue-600">
              <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
              </svg>
            </a>
            <a  href='https://twitter.com/AneesKhann4' target='_blank' class="ml-4 text-blue-700">
              <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
              </svg>
            </a>
           
          </span>
        </div>
      </div>
    </div>
  </div>
</section>
  )
}

export default Contact
