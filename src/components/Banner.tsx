import { getBannersData } from '@/lib/getData';
import React from 'react'

const Banner = async () => {
    const banners = await getBannersData();
    console.log(banners);
  return (
    <div>Banner</div>
  )
}

export default Banner;