import { Link } from "react-router-dom";
import { Product } from "../../types/product.type";

type Props = {
  product: Product;
};

const Breadcrumbs = ({ product }: Props) => {
  return (
    <div className="breadcrumbs text-sm py-8">
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li className="capitalize">
          <Link to={`/${product?.category}`}>{product?.category}</Link>
        </li>
        <li className="font-semibold">{product?.name}</li>
      </ul>
    </div>
  );
};

export default Breadcrumbs;
