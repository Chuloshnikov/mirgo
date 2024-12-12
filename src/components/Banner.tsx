import { getBannersData } from '@/lib/getData';
import React from 'react'

const Banner = async () => {
    const danners = await getBannersData();
    console.log(banners);
  return (
    <div>Banner</div>
  )
}

export default Banner;