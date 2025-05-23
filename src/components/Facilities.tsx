import React from 'react';
import { FaWallet } from 'react-icons/fa';
import { FaClockRotateLeft } from 'react-icons/fa6';
import { GoRocket } from 'react-icons/go';
import { PiChats } from 'react-icons/pi';

const data = [
  {
    title: 'Free delivery',
    description: 'When ordering above $500',
    icon: <GoRocket/>
  },
  {
    title: '90 Days Return',
    description: 'If goods have problems',
    icon: <FaClockRotateLeft/>
  },
  {
    title: 'Secure Payment',
    description: '100% secure payment',
    icon: <FaWallet/>
  },
  {
    title: '24/7 Support',
    description: 'Dedicated support',
    icon: <PiChats/>
  },
]

const Facilities = () => {
  return (
    <div className='py-10 grid grid-cols-1 sm: grid-cols-2 md:grid-cols-4 gap-5'>
      {data?.map((item) => (
        <div 
        className='flex flex-col sm:flex-row items-center gap-3'
        key={item?.title}
        >
          <span className='text-3xl text-lightRed'>{item?.icon}</span>
          <div className='text-center sm:text-left'>
              <h2 className='uppercase font-bold'>{item?.title}</h2>
              <p className='text-sm text-lightText'>{item?.description}</p>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Facilities;