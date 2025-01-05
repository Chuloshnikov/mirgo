"use client"

import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { ProductData, StoreState } from '../../type';
import CartItem from './CartItem';
import { resetCart } from '@/redux/miragoSlice';
import toast from 'react-hot-toast';

import {motion} from 'framer-motion';
import Image from 'next/image';
import { emptyCart } from '@/assets';
import Link from 'next/link';
import FormattedPrice from './FormattedPrice';
import Button from './Button';

const CartContainer = () => {
    const { cart } = useSelector((state: StoreState) => state?.mirago);
    const dispatch = useDispatch();

    const handleResetCart = () => {
        const confirmed = window.confirm('Are you sure to reset your Cart?');
        if (confirmed) {
            dispatch(resetCart());
            toast.success('Cart reset successfully');
        }
    };

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
            <div className='max-w-7xl flex justify-end'>
                <div className='w-96 flex flex-col gap-4'>
                    <h1 className='text-2xl font-semibold text-right'>
                        Cart totals
                    </h1>
                        <div>
                            <p className='flex items-center justify-between border-[1px] border-gray-400 border-b-0 py-1.5 px-4 text-lg font-medium'>
                                Subtotal: 
                                <FormattedPrice amount={250}/>
                            </p>
                            <p className='flex items-center justify-between border-[1px] border-gray-400 border-b-0 py-1.5 px-4 text-lg font-medium'>
                                Shipping Charge: 
                                <FormattedPrice amount={250}/>
                            </p>
                            <p className='flex items-center justify-between border-[1px] border-gray-400 py-1.5 px-4 text-lg font-medium'>
                                Total: 
                                <FormattedPrice amount={250}/>
                            </p>
                            <Button disabled={true} className='w-full mt-4 disabled:bg-darkRed/40'>
                                Proceed to Checkout
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
              
         : (<motion.div 
         initial={{y: 20, opacity: 0}} 
         animate={{y: 0, opacity: 1}}
         transition={{duration: 0.4}}
         className='flex flex-col lg:flex-row items-center justify-center py-20 gap-5'
         >
                <div>
                    <Image src={emptyCart} alt="empty cart"/>
                </div>
                <div className='max-w-[500px] p-4 py-8 bg-white 
                flex flex-col gap-4 items-center rounded-md shadow-lg'
                >
                    <h1 className='text-xl font-bold uppercase'>
                        Your Cart feels lonely
                    </h1>
                    <p className='text-sm text-cnter px-10 -mt-2'>
                        Your Shopping cart lives to serve. Give it purpose fill it with games, consoles and accessories and make it happy.
                    </p>
                    <Link href={"/"}
                    className="bg-lightRed text-white hover:bg-darkRed hoverEffect px-8 py-3 rounded-lg font-semibold"
                    >
                        Continue Shopping
                    </Link>
                </div>
            </motion.div>
        )}
    </div>
  )
}

export default CartContainer;