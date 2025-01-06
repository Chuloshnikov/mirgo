import { auth } from '@/auth';
import CartContainer from '@/components/CartContainer';
import Container from '@/components/Container';
import React from 'react';

export default async function CartPage() {

  const session = await auth();
  return (
    <Container className='py-10'>
        <CartContainer session={session}/>
    </Container>
  )
}
