import { ShoppingCart } from "lucide-react";
import { Link } from "react-router-dom";

const CartButton = () => {
  return (
    <Link to="/cart" className="grid place-items-center btn btn-ghost relative">
      <ShoppingCart />
      <div className="absolute top-1 right-1 bg-error p-1 w-5 aspect-square rounded-full text-[10px] grid place-items-center">
        0
      </div>
    </Link>
  );
};

export default CartButton;
