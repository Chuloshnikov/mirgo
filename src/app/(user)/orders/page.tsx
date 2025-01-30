import Container from '@/components/Container'
import OrdersPage from '@/components/OrdersPage'
import React from 'react'

export default function Orders() {
  return (
    <Container className='min-h-[400px] py-10'>
        <h2 className='text-2xl font-semibold'>Your Orders</h2>
        <OrdersPage/>
    </Container>
  )
}
