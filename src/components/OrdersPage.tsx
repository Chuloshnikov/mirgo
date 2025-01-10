"use client"
import { useSession } from 'next-auth/react';
import { useState } from 'react';
import { collection, deleteDoc, doc, query } from 'firebase/firestore';
import { useCollection } from 'react-firebase-hooks/firestore';
import { db } from '@/firebase';
import { ProductData } from '@/type';

interface Order {
    id: string;
    value: {
        amount: number,
        items: ProductData[]
    }
}

const OrdersPage = () => {
    const { data: session } = useSession();
    const [expandedOrderId, setExpandedOrderId] = useState<string | null>(null);

    const toggleDetails = (orderId: string) => {
        setExpandedOrderId((prev) => (prev === orderId ? null : orderId));
    };

    const [ordersSnapShot, loading] = useCollection(
        session && 
        query(collection(db, 'users', session?.user?.email as 
        string, 'orders'))
    );

    const orders = ordersSnapShot?.docs.map((doc) => ({
        id: doc.id,
        ...doc.data()
    })) as Order[];

  return (
    <div className='flex flex-col gap-y-5 mt-5'>
        {loading ? (
        <div className='flex flex-col flex-1 space-y-6 overflow-auto'>
            {Array.from({ length: 3 }).map((_, i) => (
                <div
                key={i}
                className='w-full py-20 rounded-md shrink-0 animate-pulse bg-zinc-400'
                />
            ))}
        </div>
        ) : (
        <div>
           {orders?.length && (<div></div>)}
        </div>
    )}
    </div>
  )
}

export default OrdersPage;