import Container from './Container';
import React from 'react'
import Logo from './Logo';
import SearchInput from './SearchInput';
import Link from 'next/link';
import { navBarList } from '@/constants';
import { HiMenuAlt2 } from 'react-icons/hi';
import { auth } from '@/auth';

import { ProductData } from '../../type';
import { getProductsData } from '@/lib/getData';

const Header = async () => {
  const session = await auth();
  const products: ProductData[] = await getProductsData();
 console.log(products);
  return (
    <header className='w-full h-20 bg-accentWhite border-b-[1px] border-b-lightText pt-4 sticky z-50 top-0 left-0'>
        <nav>
            <Container className='h-full flex items-center justify-between gap-5 lg:gap-10'>
                <Logo/>
                <SearchInput products={products}/>
                <div className='hidden mdl:inline-flex item-center gap-7'>
                  {navBarList?.map((item, index) =>(
                    <Link 
                    className='navBarItem'
                    key={index} 
                    href={item?.link}
                    >
                      {item?.title}
                    </Link>
                  ))}
                  {!session?.user && (
                    <Link href={'/sign-in'} className='navBarItem'>
                      Sign in
                    </Link>
                  )}
                    
                  <Link href={'/orders'} target='_blank' className='navBarItem'>
                    Orders
                  </Link>
                  {session?.user?.email === process.env.ADMIN_EMAIL && (
                     <Link href={'/studio'} target='_blank' className='navBarItem'>
                        Studio
                      </Link>
                  )}
                 
                </div>
                <HiMenuAlt2 className="inline-flex mdl:hidden cursor-pointer text-3xl hover:text-darkRed hoverEffect"/>
            </Container>
        </nav>
    </header>
  )
}

export default Header;