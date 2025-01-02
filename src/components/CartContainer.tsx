"use client"

import React from 'react'
import { useSelector } from 'react-redux';
import { StoreState } from '../../type';
import CartItem from './CartItem';

const CartContainer = () => {
    const { cart } = useSelector((state: StoreState) => state?.mirago)
  return (
    <div>
        {cart?.length > 0 ? 
        <div className='pb-20'>
            <div className='w-full h-20 bg-bgLight text-accent hidden lg:grid grid-cols-5 place-content-center px-6 text-lg font-semibold'>
                <h2 className='col-span-2'>Product</h2>
                <h2>Price</h2>
                <h2>Quantity</h2>
                <h2>Sub Total</h2>
            </div>
            <div className='mt-5'>
                {cart?.map((item: ProductData) => (
                    <CartItem key={item?._id} cart={cart} item={item}/>
                ))}
            </div> 
        </div>
         : <div>No Product</div>}
    </div>
  )
}

export default CartContainer;