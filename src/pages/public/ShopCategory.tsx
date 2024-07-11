import { useContext } from "react";
import { ShopContext } from "../../context/ShopContext";
import Product from "../../components/Product";
import { ChevronDown } from "lucide-react";

type Props = {
  banner: string;
  category: string;
};

const ShopCategory = ({ banner, category }: Props) => {
  const all_product = useContext(ShopContext);

  return (
    <div className="w-full container mx-auto flex flex-col gap-2">
      <img src={banner} alt="Banner" className="my-8" />
      <div className="flex items-center justify-between">
        <p>
          <span className="font-semibold">Showing 1-12</span> out of 36 products
        </p>
        <button className="py-3 px-5 rounded-box flex items-center gap-1 border">
          Sort by <ChevronDown />
        </button>
      </div>

      <div className="grid grid-cols-[repeat(auto-fill,minmax(250px,1fr))] gap-10 my-5">
        {all_product?.all_product.map((item) => {
          if (category === item.category) {
            return <Product key={item._id} item={item} />;
          } else {
            return null;
          }
        })}
      </div>
      <button className="btn btn-outline rounded-full font-semibold px-10 self-center mt-4">
        Explore more
      </button>
    </div>
  );
};

export default ShopCategory;
