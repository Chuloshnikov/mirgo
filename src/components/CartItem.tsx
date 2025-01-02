import { ProductData } from "../../type";

interface Props {
    cart: ProductData[];
    item: ProductData;
}

const CartItem = ({ cart, item }: Props) => {
  return (
    <div className="w-full grid grid-cols-5 mb-4 border py-2">
        <div></div>  
    </div>
  )
}

export default CartItem;