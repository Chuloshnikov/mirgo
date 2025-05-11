import SuccessContainer from '@/components/SuccessContainer';
import { redirect } from 'next/navigation';
import React from 'react'



export default async function Success({ searchParams }: any) {
    const id = await (searchParams?.session_id);

    if (!id) {
        redirect("/");
    }
  return (
    <div>
        <SuccessContainer id={id}/>
    </div>
  )
}
