"use client"
import { useSession } from 'next-auth/react';
import { useState } from 'react';
import { collection, deleteDoc, doc, query } from 'firebase/firestore';
import { useCollection } from 'react-firebase-hooks/firestore';
import { db } from '@/firebase';
import { ProductData } from '@/type';
import Table, { Badge, Card, CardContent, CardHeader, CardTitle, OrderPageButton, TableBody, TableCell, TableHead, TableHeader, TableRow } from './ui';
import FormattedPrice from './FormattedPrice';
import { AnimatePresence, motion } from 'framer-motion';
import toast from 'react-hot-toast';

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
    console.log(orders);

    const handleDeleteOrder = async (id: string) => {
        try {
            await deleteDoc(doc(db, 'users', session?.user?.email as string, 'orders', id))
        } catch (error: unknown) {
            if (error instanceof Error) {
                toast.error(error?.message);
            } else {
                toast.error(`An unexpected error occurred.`);
            }
        } finally {
            toast.success('Order deleted successfully');
        }
    }

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
        <div className='flex flex-col gap-5'>
           {orders?.length ? (orders?.map((item) => (
            <div key={item?.id}>
                <Card
                className={expandedOrderId === item.id ? "border-darkOrange/30" : ""}
                >
                    <CardHeader>
                        <div className='text-base font-semibold'>
                            Order ID:{" "}
                            <span className='text-base tracking-wide'>
                                {item?.id.slice(-10)}
                            </span>
                        </div>
                    </CardHeader>
                    <CardContent>
                        <div className='grid grid-cols-1 md:grid-cols-4 gap-4'>
                            <div>
                                <p className='text-sm font-medium text-black/60'>
                                    Total Amount
                                </p>

                                <FormattedPrice
                                    amount={item?.value?.amount}
                                    className='text-lg font-semibold'
                                    />
                            </div>
                            <div>
                                <p className='text-sm font-medium text-black/60'>
                                    Payment Status
                                </p>
                                <Badge variant="success">Paid</Badge>
                            </div>
                            <OrderPageButton
                            onClick={() => toggleDetails(item.id)}
                            variant="default"
                            >
                                {expandedOrderId === item.id ? "Hide Details" : "Show Details"}
                            </OrderPageButton>
                            <OrderPageButton
                            onClick={() => handleDeleteOrder(item?.id)}
                            variant="delete"
                            className='flex items-center justify-center'
                            
                            >
                                Delete order
                            </OrderPageButton>
                        </div>
                    </CardContent>
                    <AnimatePresence>
                        {expandedOrderId === item?.id && (
                            <motion.div 
                            initial={{opacity: 0, height: 0}}
                            animate={{ opacity: 1, height: 'auto'}}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.3 }}
                            >
                                <Card>
                                    <CardHeader>
                                        <CardTitle>
                                            Order Items
                                        </CardTitle>
                                    </CardHeader>
                                    <CardContent>
                                        <Table>
                                            <TableHeader>
                                                <TableRow>
                                                    <TableHead>
                                                        Item
                                                    </TableHead>
                                                    <TableHead
                                                    className='text-center'
                                                    >
                                                        Price
                                                    </TableHead>
                                                    <TableHead
                                                    className='text-center'
                                                    >
                                                        Quantity
                                                    </TableHead>
                                                    <TableHead
                                                    className='text-center'
                                                    >
                                                        Subtotal
                                                    </TableHead>
                                                </TableRow>
                                            </TableHeader>
                                            <TableBody>
                                                {item?.value?.items?.map((product: ProductData) => (
                                                    <TableRow key={product?._id}>
                                                        <TableCell>{product?.title}</TableCell>
                                                        <TableCell
                                                        className='text-center'>
                                                            <FormattedPrice
                                                                amount={product?.price}
                                                                />
                                                        </TableCell>
                                                        <TableCell
                                                        className='text-center'>
                                                                {product?.quantity}
                                                        </TableCell>
                                                        <TableCell
                                                        className='text-right font-semibold'>
                                                            <FormattedPrice
                                                                amount={product?.price * product?.quantity}
                                                                />
                                                        </TableCell>
                                                    </TableRow>
                                                ))}
                                            </TableBody>
                                        </Table>
                                    </CardContent>
                                </Card>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </Card>
            </div>
        ))) : (
        <div>
                <h2 className='text-xl font-semibold mt-4'>Your order data is empty</h2>
        </div>)}
        </div>
    )}
    </div>
  )
}

export default OrdersPage;