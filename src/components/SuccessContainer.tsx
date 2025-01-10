"use client"

import { resetCart } from "@/redux/miragoSlice";
import { StoreState } from "@/type";
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Loader from "./Loader";
import { HiCheckCircle, HiHome } from "react-icons/hi";
import Link from "next/link";

const SuccessContainer = ({ id }: { id: string }) => {
    const { cart } = useSelector((state: StoreState) => state?.mirago);
    const dispatch = useDispatch();
    const { data: session } = useSession();
    const [ totalAmt, setTotalAmt ] = useState(0);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        let price = 0;
        cart.map((item) => {
            price += item?.price * item?.quantity
            return price;
        });
        setTotalAmt(price)
    }, [cart]);

    const handleSaveOrder = async () => {
        try {
            setLoading(true);
            const response = await fetch('/api/save-order', {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    cart,
                    email: session?.user?.email as string,
                    id: id,
                    totalAmt,
                }),
            });
            const data = await response.json();
            if (data?.success) {
                setLoading(false);
                dispatch(resetCart());
            }
        } catch (error) {
            console.log("Error", error);
        } finally {
            setLoading(false);
        }
    } 

    useEffect(() => {
        if (session?.user && cart?.length) {
            handleSaveOrder();
        }
    }, [session?.user, cart?.length]);

  return (
    <div>
        {loading ? 
        (<Loader title="Payment is processing... Please do not press back button"/>) 
        : 
        (
        <div className="bg-gradient-to-b from-green-50 to-white flex items-center justify-center px-4 py-28">
            <div className="max-w-md w-full space-y-8 text-center">
                <div className="relative">
                    <div className="relative inset-0 flex items-center justify-center">
                        <div className="w-32 h-32 bg-green-100 rounded-full"></div>
                        <div className="absolute">
                            <HiCheckCircle className="mx-auto h-24 w-24 text-green-500"/>
                        </div>
                    </div>
                 
                    <div className="mt-8 space-y-6">
                    <h2 className="text-2xl font-bold">
                        Success!
                    </h2>
                    <p className="text-sm mt-2 text-gray-600">
                        Your payment has been completed successfully.
                    </p>
                        <p className="text-base text-gray-700">
                            Thank you for your submission. We&apos;ve received your information and will process it shortly.
                            You should receive a confirmation email within the next few minutes.
                        </p>
                        <div className="flex flex-wrap justify-center gap-4">
                            <Link href={'/'}>
                            <button className="inline-flex items-center px-4 py-2
                            bg-green-500 hover:bg-green-600 hoverEffect
                            text-white font-semibold rounded-lg shadow-md transition 
                            duration-300 ease-in-out transform-hover:-translate-y-1">
                                <HiHome className="mr-2 h-5 w-5"/>
                                Home
                            </button>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="mt-10 flex justify-center">
                    <div className="w-3 h-3 bg-green-200 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-300 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                </div>
            </div>
        </div>
        )}
    </div>
  )
}

export default SuccessContainer;