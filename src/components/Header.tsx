import Container from './Container';
import React from 'react'
import Logo from './Logo';
import SearchInput from './SearchInput';

const Header = () => {
  return (
    <header className='w-full h-20 bg-accentWhite border-b-[1px] border-b-lightText'>
        <nav>
            <Container className='h-full flex items-center justify-between gap-5 lg:gap-10'>
                <Logo/>
                <SearchInput/>
                <div>navBarList</div>
            </Container>
        </nav>
    </header>
  )
}

export default Header;