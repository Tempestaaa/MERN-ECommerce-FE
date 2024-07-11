import { Link } from "react-router-dom";
import { Product as ProductType } from "../types/product.type";

type Props = {
  item: Pick<ProductType, "_id" | "name" | "image" | "newPrice" | "oldPrice">;
};

const Product = ({ item }: Props) => {
  return (
    <Link
      to={`/product/${item._id}`}
      onClick={() => window.scrollTo(0, 0)}
      className="max-w-[350px] hover:scale-105 duration-75"
    >
      <img src={item.image} alt="Product Image" />
      <p className="py-2">{item.name}</p>
      <div className="flex gap-5 text-lg">
        <div className="font-semibold">${item.newPrice}</div>
        <div className="font-medium line-through">${item.oldPrice}</div>
      </div>
    </Link>
  );
};

export default Product;
