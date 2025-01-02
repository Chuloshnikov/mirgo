import { ProductData } from "../../type";

interface Props {
    cart: ProductData[];
    item: ProductData;
}

const CartItem = ({ cart, item }: Props) => {
  return (
    <div>CartItem</div>
  )
}

export default CartItem;