import { auth, signIn } from '@/auth';
import Container from '@/components/Container'
import { SignInForm } from '@/components/SignInForm';
import { redirect } from 'next/navigation';

import React from 'react';

import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa6";


export default async function SignIn() {
  const session = await auth();

  if (session?.user) {
    redirect('/');
  }
  return (
    <Container className="py-20 flex flex-col justify-center items-center">
       <div className="w-[500px] bg-bgLight p-10 rounded-lg shadow-sm shadow-darkRed/50">
          <div className="mb-5">
          <h2 className="text-xl font-bold">Oauth sign in</h2>
            <div className="flex items-center gap-3 mt-2">
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
                      Sign in with Google
                      <FcGoogle />
                    </button>
                </form>
                <form
                  action={async () => {
                    "use server";
                    await signIn("google", { redirectTo: "/" });
                  }}
                  className="flex items-center gap-1 border border-slate-500 font-semibold bg-slate-50 px-2 py-1.5 hover:bg-slate-200 hoverEffect ease-in-out"
                  >
                    <FaGithub />
                    <button type="submit">Signin with Github</button>
                </form>
            </div>
          </div>
          <SignInForm />
       </div>
    </Container>
  )
}
