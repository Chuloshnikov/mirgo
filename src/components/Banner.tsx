import { getBannersData } from '@/lib/getData';
import React from 'react'
import Container from './Container';

const Banner = async () => {
    const banners = await getBannersData();
    const singleBanner = banners[0];
  return (
   <Container>
    {/* left half = single image */}
        <div>

        </div>
        <div>

        </div>
   </Container>
  )
}

export default Banner;