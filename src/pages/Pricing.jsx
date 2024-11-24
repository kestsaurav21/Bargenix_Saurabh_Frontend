import React from 'react'
import logo from "../assets/logo.avif";
import { plans } from '../utils/mockPlan';


const Pricing = () => {

  return (
    <div className='text-center pt-14 mb-10'>

      <button className='bg-[#2E073F] text-white border-2 border-white shadow-xl px-10 py-3 rounded-full mb-6'>Our Plans</button>

      <h1 className='text-center text-2xl md:text-3xl lg:text-4xl mt-8 font-semibold bg-gradient-to-r from-gray-900 to-gray-400 bg-clip-text text-transparent mb-6 sm:mb-10'>Choose the plan that’s right for you</h1>

      <div className='flex flex-wrap justify-center gap-10 text-left'>
        {plans.map((item, index) => (
          <div className='bg-white drop-shadow-md border rounded-lg py-12 px-8 text-gray-700 gap-10 hover:scale-105 transition-all duration-500'
          key={index}>
            <img className='w-12' src={logo}  />
            <p className='mt-6 text-xl font-semibold'>{item.id}</p>
            <p className='text-sm text-gray-500'>{item.desc}</p>

            <p className='mt-6'>
              <span className='font-medium text-3xl '>₹{item.price}</span> / {item.credits} credits
            </p>

            <button 
             className='bg-black text-white mt-8 px-16 py-4 rounded-full hover:scale-105 transition-all duration-500'>
                Purchase
            </button>

          </div>
        ))}

      </div>

    </div>
  )
}

export default Pricing;