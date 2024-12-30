"use client"

import React from 'react'
import { ProductData } from '../../type';
import { twMerge } from "tailwind-merge";
import { useDispatch } from 'react-redux';
import { addToCart } from '@/redux/miragoSlice';
import toast from 'react-hot-toast';

interface Props {
  item: ProductData,
  className?: string
}

const AddToCartButton = ({ item, className }: Props) => {
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(addToCart(item));
    toast.success(`${item?.title.substring(0, 16)}... added to cart`);
  }

  return (
    <button 
    onClick={handleAddToCart}
    className={twMerge(`bg-accent text-white w-full py-2 border-px
      border-accent hover:bg-darkRed hover:border-darkRed hoverEffect 
      font-semibold  tracking-wide flex items-center justify-center gap-1`, className)}
      >
        AddToCartButton
      </button>
  )
}

export default AddToCartButton;