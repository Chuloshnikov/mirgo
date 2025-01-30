"use client"
import Link from 'next/link';
import { useState } from 'react';
import { CiSearch } from "react-icons/ci";
import { IoMdClose } from 'react-icons/io';

import { ProductData } from '../../type';


const SearchInput = ({ products }: {products: ProductData[]}) => {
    const [search, setSearch] = useState<string>("");
    const [isPopupVisible, setPopupVisible] = useState<boolean>(false);

    const filteredProducts = Array.isArray(products)
    ? products.filter(product =>
        product.title.toLowerCase().includes(search.toLowerCase())
      )
    : [];

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
                    <p className="text-sm text-gray-500">Popular items</p>
                    {isPopupVisible && search && (
                          <div className="absolute top-full left-0 w-full bg-white shadow-lg border border-gray-300 mt-1 p-2 rounded-sm z-50">
                            {filteredProducts.length > 0 ? (
                              <ul className="text-sm">
                                {filteredProducts.map((item: ProductData) => (
                                  <Link key={item.title} href={`/product/${item?.slug.current}`}>
                                    <li className="py-1 hover:bg-gray-100 cursor-pointer px-2">
                                      {item.title}
                                    </li>
                                  </Link>
                                ))}
                              </ul>
                            ) : (
                              <p className="text-sm text-gray-500 px-2">No products found</p>
                            )}
                          </div>
                        )}
                      {isPopupVisible && !search && (
                          <ul className="text-sm">
                          <Link href={'/shop'}>
                            <li className="py-1 hover:bg-gray-100 cursor-pointer px-2">Xbox S</li>
                          </Link>
                          <Link href={'/shop'}>
                            <li className="py-1 hover:bg-gray-100 cursor-pointer px-2">Nintendo Switch</li>
                          </Link>
                          <Link href={'/shop'}>
                            <li className="py-1 hover:bg-gray-100 cursor-pointer px-2">Dandy II</li>
                          </Link>
                      </ul>
                      )
                    }
                </div>
            )}
      </div>
    </>
  )
}

export default SearchInput;