import { ImCross } from "react-icons/im";
import { ProductData } from "../../type";
import Link from "next/link";
import Image from "next/image";
import { useDispatch } from "react-redux";
import { decreaseQuantity, increaseQuantity, removeFromCart } from "@/redux/miragoSlice";
import toast from "react-hot-toast";
import { urlFor } from "@/sanity/lib/image";
import FormattedPrice from "./FormattedPrice";
import { FaMinus, FaPlus } from "react-icons/fa";
import { useEffect, useState } from "react";

interface Props {
    cart: ProductData[];
    item: ProductData;
}

const CartItem = ({ cart, item }: Props) => {
    const [existingProduct, setExistingProduct] = useState<ProductData | null>(null);
    const dispatch = useDispatch();

    useEffect(() => {
        const availableProduct = cart?.find(
            (product: ProductData) => product?._id === item?._id);
        if (availableProduct) {
            setExistingProduct(availableProduct)
        }
    }, [cart, item]);

    const handleMinus = () => {
        if ((existingProduct?.quantity as number) > 1) {
            dispatch(decreaseQuantity(item?._id))
            toast.success('Quantity decreased successfully')
        } else {
            toast.error('Quantity can not decrease less then 1')
        }
    }


  return (
    <div className="w-full grid grid-cols-5 mb-4 border py-2">
        <div className="flex col-span-5 md:col-span-2 items-center gap-4 ml-4">
            <ImCross 
            onClick={() => {
                dispatch(removeFromCart(item?._id));
                toast.success(`${item?.title.substring(0, 12)}... deleted from cart`);
            }}
            className="text-accent hover:text-lightRed cursor-pointer duration-300"
            />
            <Link href={`/product/${item?.slug.current}`}>
                <Image 
                src={urlFor(item?.image).url()} 
                alt={item?.title}
                width={200} 
                height={200}
                className="w-32 h-32 object-contain"
                />
            </Link>
            <h1 className="font-semibold">{item?.title.substring(0, 20)}</h1>
        </div>  
        <div className="co;-span-5 md:col-span-3 flex items-center justify-between py-4 md:py-0 px-4 lg:px-0">
            <p className="flex w-1/3 items-center text-lg font-semibold">
                <FormattedPrice amount={item?.price} />
            </p>
            <div className="w-1/3 flex items-center gap-6 text-lg">
                <button 
                onClick={handleMinus}
                className="w-6 h-6 bg-gray-100 flex items-center justify-center
                 hover:bg-darkRed/10 cursor-pointer border-[1px] border-gray-300
                  hover:border-darkRed hoverEffect">
                    <FaMinus/>
                </button>
                <p className="text-sm font-semibold">
                    {item?.quantity}
                </p>
                <button 
                onClick={() => {
                    dispatch(increaseQuantity(item?._id));
                    toast.success('Quantity increased successfully');
                }}
                className="w-6 h-6 bg-gray-100 flex items-center justify-center
                 hover:bg-darkRed/10 cursor-pointer border-[1px] border-gray-300
                  hover:border-darkRed hoverEffect"
                  >
                    <FaPlus/>
                </button>
            </div>
            <div className="w-1/3 flex items-center font-bold text-lg">
            <FormattedPrice amount={item?.quantity * item?.price} />
            </div>
        </div>
    </div>
  )
}

export default CartItem;