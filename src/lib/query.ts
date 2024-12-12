import { groq } from "next-sanity";

const bannerQuery = groq`*[_type == 'banner']{
...
}|other(_createdAt asc)`; 

const productsQuery = groq`*[_type == 'product']{
...
}|other(_createdAt asc)`; 

const bestSellersQuery = groq`*[_type == 'product' && position == 'Bestsellers']{
...
}|other(_createdAt asc)`; 

export { bannerQuery, productsQuery, bestSellersQuery };