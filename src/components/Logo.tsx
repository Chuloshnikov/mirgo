import React from 'react'
import { twMerge } from 'tailwind-merge';

const Logo = () => {
  return (
    <h2 className={twMerge(`text-2xl text-accent hover:text-lightRed font-bold uppercase hoverEffect relative group overflow-hidden`)}>
        Mirago
        <span 
        className={`absolute left-0 bottom-0 w-full h-px bg-lightRed -translate-x-[105%] 
        group-hover:translate-x-0 hoverEffect transition-transform`}
        />
    </h2>
  )
}

export default Logo;