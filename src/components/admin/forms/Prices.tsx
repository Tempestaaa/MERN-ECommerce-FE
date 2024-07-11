import { useFormContext } from "react-hook-form";
import { ProductAdd } from "../../../types/product.type";
import Input from "../../commons/Input";

const Prices = () => {
  const {
    register,
    formState: { errors },
  } = useFormContext<ProductAdd>();
  return (
    <div className="flex flex-col md:flex-row gap-4">
      <Input
        type="number"
        step="any"
        label="Price"
        {...register("oldPrice")}
        error={errors.oldPrice}
      />
      <Input
        type="number"
        step="any"
        label="Offer price"
        {...register("newPrice")}
        error={errors.newPrice}
      />
    </div>
  );
};

export default Prices;
