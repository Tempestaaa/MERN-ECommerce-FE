import { useFormContext } from "react-hook-form";
import { ProductAdd } from "../../../types/product.type";

const CategorySelect = () => {
  const {
    register,
    formState: { errors },
  } = useFormContext<ProductAdd>();
  return (
    <label className="form-control w-full flex-1">
      <span className="label label-text">Category</span>
      <select {...register("category")} className="select select-bordered">
        <option value="men">Men</option>
        <option value="women">Women</option>
        <option value="kids">Kids</option>
      </select>
      {errors.category && (
        <span className="text-error text-xs font-bold">
          {errors.category.message as string}
        </span>
      )}
    </label>
  );
};

export default CategorySelect;
