import React from 'react'
import { ProductData } from '../../type';
import { twMerge } from "tailwind-merge";

interface Props {
  item: ProductData,
  className?: string
}

const AddToCartButton = ({ item, className }: Props) => {
  return (
    <button className={twMerge(`bg-accent text-white w-full py-2 border-px
      border-accent hover:bg-darkRed hover:border-darkRed hoverEffect 
      font-semibold  tracking-wide flex items-center justify-center gap-1`, className)}
      >
        AddToCartButton
      </button>
  )
}

export default AddToCartButton;