import React from 'react'
import {Sign_in, Sign_up} from '../components'
import { useState } from 'react'

const Welcome = () => {

    const[components, setComponents] = useState({
        "sign_in": true,
        "sign_up": false
    }) 

  return (
    <section class="text-gray-400 bg-gray-900 body-font">
      <div class="container px-5 py-24 mx-auto flex flex-wrap items-center">
        <div class="lg:w-3/5 md:w-1/2 md:pr-16 lg:pr-0 pr-0">
          <h1 class="title-font font-medium text-3xl text-white">Slow-carb next level shoindxgoitch ethical authentic, poko scenester</h1>
          <p class="leading-relaxed mt-4">Poke slow-carb mixtape knausgaard, typewriter street art gentrify hammock starladder roathse. Craies vegan tousled etsy austin.</p>
        </div>

        <div class="text-white lg:w-2/6 md:w-1/2 bg-gray-800 bg-opacity-50 rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0">
            <div class="grid grid-cols-2 mb-5">
                <button class="hover:bg-indigo-500 text-white font-bold py-2 px-4 border-b-4 border-indigo-500 hover:border-blue-500 rounded">
                    SignIn
                </button>
                <button class="text-white font-bold py-2 px-4 rounded opacity-50 cursor-not-allowed">
                    SignUp
                </button>
            </div>
        
        {components["sign_in"] && <Sign_in/>}
        {components["sign_up"] && <Sign_up/>}
        </div>
      </div>
    </section>
  )
}

export default Welcome