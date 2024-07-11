import { useContext } from "react";
import { ShopContext } from "../../context/ShopContext";
import { useParams } from "react-router-dom";
import Breadcrumbs from "../../components/commons/Breadcrumbs";
import ProductDisplay from "../../components/ProductDisplay";
import DescriptionBox from "../../components/DescriptionBox";
import RelatedProduct from "../../components/RelatedProduct";

const ProductDetails = () => {
  const all_product = useContext(ShopContext);
  const { productId } = useParams();
  const product = all_product?.all_product.find((e) => e._id === productId);
  return (
    <div className="container mx-auto">
      <Breadcrumbs product={product} />
      <ProductDisplay product={product} />
      <div className="divider my-12" />
      <DescriptionBox />
      <RelatedProduct />
    </div>
  );
};

export default ProductDetails;
