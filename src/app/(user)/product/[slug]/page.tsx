import Container from '@/components/Container';
import { ProductData } from '../../../../../type';
import { client } from '@/sanity/lib/client';
import { getBestSellersData } from '@/lib/getData';
import { groq } from 'next-sanity';
import Image from 'next/image';
import { urlFor } from '@/sanity/lib/image';
import ProductCard from '@/components/ProductCard';
import FormattedPrice from '@/components/FormattedPrice';

interface Props {
    params: {
        slug: string;
    }
}

export default async function SingleProductPage({ params }: Props) {
    const {slug} = await Promise.resolve(params);
    const query = groq`*[_type == 'product' && slug.current == $slug][0]{
    ...
}`;

    const product: ProductData = await client.fetch(query, { slug });
    const bestSellersData: ProductData[] = await getBestSellersData();
  return (
    <Container className='my-10 bg-bgLight'>
        <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-col-6 gap-4 h-full p-4'>
            <div className='h-full xl:col-span-2'>
                <Image 
                src={urlFor(product?.image).url()} 
                alt={product?.title} 
                width={500} 
                height={500} 
                className='w-full h-full object-contain'
                />
            </div>
            <div className='w-full md:col-span-2 xl:col-span-3 xl:p-14 flex flex-col gap-6 justify-center'>
                <div className='flex flex-col gap-5'>
                    <h2 className='text-4xl font-semibold'>{product?.title}</h2>
                    <div className='flex items-center gap-4'>
                    <p className='text-lg font-normal text-gray-500 line-through'>
                        <FormattedPrice amount={product?.rowprice}/>
                    </p>
                    <FormattedPrice 
                    amount={product?.price} 
                    className='text-lg font-bold'
                    />

                    <p className='text-sm'>
                        you saved{" "}
                        <FormattedPrice
                        amount={product?.rowprice - product?.price}
                        className='bg-lightGreen text-white px-2 rounded-md text-xs py-1'
                        />{" "}
                        from this item
                    </p>
                    </div>
                    <div className='text-base text-lightText flex items-center'>
                       
                    </div>
                </div>    
            </div>   
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5'>
            {bestSellersData?.map((item) => (
                <ProductCard key={item?._id} item={item}/>
            ))}
        </div>
    </Container>
  )
}
