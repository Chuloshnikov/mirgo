"use client"

import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { ProductData, StoreState } from '../../type';
import CartItem from './CartItem';
import { resetCart } from '@/redux/miragoSlice';
import toast from 'react-hot-toast';

const CartContainer = () => {
    const { cart } = useSelector((state: StoreState) => state?.mirago);
    const dispatch = useDispatch();

    const handleResetCart = () => {
        const confirmed = window.confirm('Are you sure to reset your Cart?');
        if (confirmed) {
            dispatch(resetCart());
            toast.success('Cart reset successfully');
        }
    }

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
            <button 
            onClick={handleResetCart}
            className='py-2 px-10 bg-red-700 text-white font-semibold uppercase mb-4 hover:bg-red-600 hoverEffect text-sm'
            >
                Reset cart
            </button>
        </div>
         : <div>No Product</div>}
    </div>
  )
}

export default CartContainer;