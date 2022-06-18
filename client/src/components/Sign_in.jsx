import React from 'react'

const Sign_in = () => {
  return (
    <>
      <div class="relative mb-4">
      <label for="full-name" class="leading-7 text-sm text-gray-400">User Name</label>
      <input type="text" id="full-name" name="full-name" class="w-full bg-gray-600 bg-opacity-20 focus:bg-transparent focus:ring-2 focus:ring-indigo-900 rounded border border-gray-600 focus:border-indigo-500 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
      </div>
      <div class="relative mb-4">
      <label for="email" class="leading-7 text-sm text-gray-400">Password</label>
      <input type="email" id="email" name="email" class="w-full bg-gray-600 bg-opacity-20 focus:bg-transparent focus:ring-2 focus:ring-indigo-900 rounded border border-gray-600 focus:border-indigo-500 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
      </div>
      <button class="text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">Button</button>
      <p class="text-xs mt-3">Literally you probably haven't heard of them jean shorts.</p>
    </>
  )
}

export default Sign_in;
