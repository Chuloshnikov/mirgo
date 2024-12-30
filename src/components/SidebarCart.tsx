import Link from 'next/link';
import React from 'react'
import { MdSwitchAccount } from 'react-icons/md';

const SidebarCart = () => {
  return (
    <Link 
    href={"/cart"}
    className='bg-accentWhite w-16 h-[70px] rounded-md flex flex-col gap-1 text-accent 
    justify-center items-center flex flex-col shadow-sm shadow-lightGreen overflow-x-hidden group overflow-hidden relative'
    >
        <div className='flex items-center justify-center'>
            <MdSwitchAccount className='text-2xl -translate-x-12 group-hover:translate-x-3 transition-transform duration-200'/>
            <MdSwitchAccount className='text-2xl -translate-x-3 group-hover:translate-x-12 transition-transform duration-200'/>
        </div>
        <p className='text-xs font-semibold'>
            Buy Now
        </p>
        <p className='absolute top-1 right-2 bg-darkRed text-white 
        text-xs w-4 h-4 rounded-full flex items-center justify-center font-semibold'>
            0
        </p>
    </Link>
  )
}

export default SidebarCart;