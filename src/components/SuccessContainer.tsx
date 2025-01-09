"use client"

import { StoreState } from "@/type";
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

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

    } 

    useEffect(() => {
        if (session?.user && cart?.length) {
            handleSaveOrder();
        }
    }, [session?.user, cart?.length]);

  return (
    <div>SuccessContainer</div>
  )
}

export default SuccessContainer;