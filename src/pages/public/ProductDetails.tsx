import { useParams } from "react-router-dom";
import DescriptionBox from "../../components/user/DescriptionBox";
import RelatedProduct from "../../components/user/RelatedProduct";

const ProductDetails = () => {
  const { productId } = useParams();

  return (
    <div className="container mx-auto">
      {/* <Breadcrumbs product={product} />
      <ProductDisplay product={product} /> */}
      <div className="divider my-12" />
      <DescriptionBox />
      <RelatedProduct />
    </div>
  );
};

export default ProductDetails;
