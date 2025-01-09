import SuccessContainer from '@/components/SuccessContainer';
import { redirect } from 'next/navigation';
import React from 'react'

interface Props {
    searchParams: {
        session_id: string | null;
    };
}

export default async function Success({ searchParams }: Props) {
    const id = await searchParams?.session_id;

    if (!id) {
        redirect("/");
    }
  return (
    <div>
        <SuccessContainer id={id}/>
    </div>
  )
}
