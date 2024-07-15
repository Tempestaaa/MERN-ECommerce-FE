import { useFormContext } from "react-hook-form";
import { ProductAdd } from "../../../../types/product.type";
import Input from "../../../commons/Input";

const ProductOtherDetalts = () => {
  const {
    register,
    formState: { errors },
  } = useFormContext<ProductAdd>();
  return (
    <div className="flex flex-col">
      <div className="flex flex-col md:flex-row md:gap-4">
        <Input
          label="Rating"
          type="number"
          step="any"
          {...register("rating")}
          error={errors.rating}
        />
        <Input
          label="In stock"
          {...register("inStock")}
          error={errors.inStock}
        />
      </div>

      <div className="flex flex-col md:flex-row md:gap-4">
        <Input
          label="Price"
          type="number"
          step="any"
          {...register("oldPrice")}
          error={errors.oldPrice}
        />
        <Input
          label="Sale price"
          type="number"
          step="any"
          {...register("newPrice")}
          error={errors.newPrice}
        />
      </div>
    </div>
  );
};

export default ProductOtherDetalts;
