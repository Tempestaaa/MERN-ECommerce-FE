import { useFormContext } from "react-hook-form";
import Input from "../../../commons/Input";
import { ProductAdd } from "../../../../types/product.type";

const ProductColors = () => {
  const {
    register,
    formState: { errors },
  } = useFormContext<ProductAdd>();

  return (
    <Input
      label="Colors ( Comma-seperated )"
      {...register("colors")}
      error={errors.colors}
    />
  );
};

export default ProductColors;
