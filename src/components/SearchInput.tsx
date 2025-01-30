"use client"
import { useState } from 'react';
import { CiSearch } from "react-icons/ci";
import { IoMdClose } from 'react-icons/io';

const SearchInput = () => {
    const [search, setSearch] = useState<string>("");
    const [isPopupVisible, setPopupVisible] = useState<boolean>(false);
  return (
    <>
      <div className='w-full hidden mdl:inline-flex flex-1 h-12 relative'>
          <CiSearch className='text-lg absolute left-2.5 mt-4 text-lightRed'/>
          <input 
          onChange={(e) => setSearch(e.target.value)}
          onFocus={() => setPopupVisible(true)}
          onBlur={() => setTimeout(() => setPopupVisible(false), 200)}
          value={search}
          type="text" 
          placeholder="Search products...." 
          className='flex-1 h-full outline-none bg-transparent 
          placeholder-lightText border-[1px] border-accent/30
          rounded-sm pl-8 pr-28'
          />
          {search && (
              <IoMdClose 
              onClick={() => setSearch("")}
              className='text-accent/50 hover:text-lightRed hoverEffect cursor-pointer absolute right-20 top-4'/>
              )}
          <button className='bg-lightRed text-accentWhite absolute right-1 
          px-3.5 py-1.5 text-sm hover:bg-darkRed hoverEffect font-medium top-2'
          >
              Search
          </button>
          {isPopupVisible && (
                <div className="absolute top-full left-0 w-full bg-white shadow-lg border border-gray-300 mt-1 p-2 rounded-sm z-50">
                    <p className="text-sm text-gray-500">Популярные запросы</p>
                    <ul className="text-sm">
                        <li className="py-1 hover:bg-gray-100 cursor-pointer px-2">iPhone 15</li>
                        <li className="py-1 hover:bg-gray-100 cursor-pointer px-2">MacBook Pro</li>
                        <li className="py-1 hover:bg-gray-100 cursor-pointer px-2">Samsung Galaxy S24</li>
                    </ul>
                </div>
            )}
      </div>
    </>
  )
}

export default SearchInput;