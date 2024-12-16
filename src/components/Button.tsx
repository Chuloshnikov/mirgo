import React from 'react';
import { twMerge } from "tailwind-merge";

interface Props {
    children: React.ReactNode,
    className?: string
}

const Button = ( { children, className }: Props ) => {
  return (
    <button className={twMerge(`bg-lightRed text-base text-white hover:bg-darkRed 
        hoverEffect md:px-8 md:py-3 font-semibold ${className}`)
        }>
            {children}
        </button>
  )
}

export default Button;