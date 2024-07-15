import { Controller, useFormContext } from "react-hook-form";
import { ProductAdd } from "../../../../types/product.type";
import Select from "react-select";

const ProductSizes = () => {
  const { control } = useFormContext<ProductAdd>();

  const sizeOptions = ["XS", "S", "M", "L", "XL", "XXL"].map((item) => {
    return { label: item, value: item };
  });

  return (
    <Controller
      control={control}
      name="sizes"
      render={({ field, formState: { errors } }) => (
        <label>
          Sizes
          <Select
            {...field}
            options={sizeOptions}
            isClearable
            isMulti
            className={`border border-[var(--fallback-bc,oklch(var(--bc)/0.2))] rounded-lg bg-[var(--fallback-b1,oklch(var(--b1)/var(--tw-bg-opacity)))] ${
              errors.sizes && "!border-error"
            }`}
            styles={{
              control: () => ({
                minHeight: "3rem",
                display: "flex",
              }),
              menu: () => ({
                background:
                  "var(--fallback-b1, oklch(var(--b1) / var(--tw-bg-opacity)))]",
              }),
            }}
          />
          {errors.sizes && (
            <span className="text-xs text-error font-bold">
              {errors.sizes.message}
            </span>
          )}
        </label>
      )}
    />
  );
};

export default ProductSizes;
