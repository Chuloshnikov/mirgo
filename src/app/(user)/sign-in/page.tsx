import { signIn } from '@/auth';
import Container from '@/components/Container'
import React from 'react';

import { FcGoogle } from "react-icons/fc";


export default function SignIn() {
  return (
    <Container className="py-20 flex flex-col justify-center items-center">
        <form 
        action={async () => {
          'use server';
          await signIn('google', {redirectTo: "/"})
        }}
        className="flex items-center gap-1 border border-blue-500 
        font-semibold bg-blue-50 px-4 py-1.5 hover:bg-blue-800
        hover:text-white hoverEffect"
        >
            <button>
              Signin with Google
              <FcGoogle/>
            </button>
        </form>
    </Container>
  )
}