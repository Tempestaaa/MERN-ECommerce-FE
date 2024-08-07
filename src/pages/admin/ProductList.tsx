import { useQuery } from "@tanstack/react-query";
import { ProductBackEnd } from "../../types/product.type";

const ProductList = () => {
  const { data: products } = useQuery<ProductBackEnd>({
    queryKey: ["productList"],
  });
  return (
    <div className="overflow-x-auto h-full max-w-max">
      {/* <table className="table">
        <thead className="bg-neutral text-neutral-content">
          <tr>
            <th>Product</th>
            <th>Name</th>
            <th>Old price</th>
            <th>New price</th>
            <th>Category</th>
            <th>Remove</th>
          </tr>
        </thead>

        <tbody>
          {shopContext?.all_product.map((item) => (
            <tr key={item._id} className="hover text-center">
              <th>
                <div className="w-20 aspect-square">
                  <img src={item.image as string} alt="Product Image" />
                </div>
              </th>
              <td>{item.name}</td>
              <td>${item.oldPrice}</td>
              <td>${item.newPrice}</td>
              <td className="capitalize">{item.category}</td>
              <th>
                <button>
                  <X className="text-red-500" />
                </button>
              </th>
            </tr>
          ))}
        </tbody>
      </table> */}
      {products?.products.map((item) => (
        <div className="" key={item._id}>
          {item.name}
        </div>
      ))}
    </div>
  );
};

export default ProductList;
