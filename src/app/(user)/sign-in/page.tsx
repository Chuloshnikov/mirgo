import { auth, signIn } from '@/auth';
import Container from '@/components/Container'
import { redirect } from 'next/navigation';

import React from 'react';

import { FcGoogle } from "react-icons/fc";


export default async function SignIn() {
  const session = await auth();

  if (session?.user) {
    redirect('/');
  }
  return (
    <Container className="py-20 flex flex-col justify-center items-center h-[400px]">
        <form 
        action={async () => {
          'use server';
          await signIn('google', {redirectTo: "/"})
        }}
        className="flex items-center gap-1 border border-blue-500 
        font-semibold bg-blue-50 px-4 py-1.5 hover:bg-blue-800
        hover:text-white hoverEffect"
        >
            <button className='flex gap-2 items-center'>
              Signin with Google
              <FcGoogle />
            </button>
        </form>
    </Container>
  )
}
