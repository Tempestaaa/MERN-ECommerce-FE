import data_product from "../assets/Frontend_Assets/data";
import Product from "./Product";

const Popular = () => {
  return (
    <div className="flex flex-col items-center gap-2 container mx-auto px-4 py-12">
      <h1 className="text-5xl font-semibold uppercase">Popular in women</h1>
      <hr className="w-52 h-[6px] rounded-xl bg-neutral" />
      <div className="grid grid-cols-4 mt-12 gap-8">
        {data_product.map((item) => (
          <Product key={item._id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default Popular;
