import Container from './Container';
import React from 'react'
import Logo from './Logo';
import SearchInput from './SearchInput';
import Link from 'next/link';
import { navBarList } from '@/constants';

const Header = () => {
  return (
    <header className='w-full h-20 bg-accentWhite border-b-[1px] border-b-lightText'>
        <nav>
            <Container className='h-full flex items-center justify-between gap-5 lg:gap-10'>
                <Logo/>
                <SearchInput/>
                <div className='hidden md:inline-flex item-center gap-7'>
                  {navBarList?.map((item, index) =>(
                    <Link 
                    className='navBarItem'
                    key={index} 
                    href={item?.link}
                    >
                      {item?.title}
                    </Link>
                  ))}
                  <Link href={'/sign-in'} className='navBarItem'>
                    Sign in
                  </Link>
                  <Link href={'/studio'} className='navBarItem'>
                    Studio
                  </Link>
                </div>
            </Container>
        </nav>
    </header>
  )
}

export default Header;