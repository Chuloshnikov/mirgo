import React, { MouseEventHandler } from 'react';
import { twMerge } from "tailwind-merge";

interface Props {
    children: React.ReactNode,
    className?: string,
    disabled?: boolean,
    onClick?: MouseEventHandler<HTMLButtonElement> | undefined,
}

const Button = ( { children, className, disabled, onClick }: Props ) => {
  return (
    <button
    onClick={onClick} 
    disabled={disabled}
    className={twMerge(`bg-lightRed text-base text-white hover:bg-darkRed 
        hoverEffect md:px-8 md:py-3 font-semibold ${className}`)
        }>
            {children}
        </button>
  )
}

export default Button;