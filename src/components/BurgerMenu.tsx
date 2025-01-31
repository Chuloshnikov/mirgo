"use client"
import React, { useState } from 'react'
import { HiMenuAlt2, HiX } from 'react-icons/hi';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { Session } from 'next-auth';

const BurgerMenu = ({session, navBarList, admin}: {session: Session | null, navBarList: { title: string; link: string }[], admin: boolean}) => {
    const [isOpen, setIsOpen] = useState(false);
  return (
    <>
    <button onClick={() => setIsOpen(!isOpen)} className='inline-flex mdl:hidden text-3xl hover:text-darkRed hoverEffect'>
        {isOpen ? <HiX /> : <HiMenuAlt2 />}
    </button>
    <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className='absolute top-20 left-0 w-full bg-accentWhite shadow-md p-5 flex flex-col items-center gap-5 mdl:hidden'
          >
            {navBarList?.map((item, index) => (
              <Link className='navBarItem' key={index} href={item?.link} onClick={() => setIsOpen(false)}>
                {item?.title}
              </Link>
            ))}
            {!session?.user && (
              <Link href={'/sign-in'} className='navBarItem' onClick={() => setIsOpen(false)}>
                Sign in
              </Link>
            )}
            <Link href={'/orders'} target='_blank' className='navBarItem' onClick={() => setIsOpen(false)}>
              Orders
            </Link>
            {admin && (
              <Link href={'/studio'} target='_blank' className='navBarItem' onClick={() => setIsOpen(false)}>
                Studio
              </Link>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </>
    
  )
}

export default BurgerMenu;