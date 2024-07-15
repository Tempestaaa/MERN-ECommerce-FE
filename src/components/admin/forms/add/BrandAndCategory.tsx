import { Controller, useFormContext } from "react-hook-form";
import { useQuery } from "@tanstack/react-query";
import Select from "react-select";
import { ProductAdd } from "../../../../types/product.type";
import { BrandBackEnd } from "../../../../types/brand.type";
import { CategoryBackEnd } from "../../../../types/category.type";

const BrandAndCategory = () => {
  const { control } = useFormContext<ProductAdd>();
  const { data: brands } = useQuery<BrandBackEnd>({ queryKey: ["brandList"] });
  const { data: categories } = useQuery<CategoryBackEnd>({
    queryKey: ["categoryList"],
  });

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 md:gap-4">
      <Controller
        control={control}
        name="brand"
        render={({ field, formState: { errors } }) => (
          <label className="form-control">
            <span className="label label-text">Brand</span>
            <Select
              {...field}
              options={brands?.brands}
              getOptionLabel={(option) => option["name"]}
              getOptionValue={(option) => option["_id"]}
              isClearable
              className={`border border-[var(--fallback-bc,oklch(var(--bc)/0.2))] rounded-lg bg-[var(--fallback-b1,oklch(var(--b1)/var(--tw-bg-opacity)))] ${
                errors.brand && "!border-error"
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
            {errors.brand && (
              <span className="text-xs text-error font-bold">
                {errors.brand.message}
              </span>
            )}
          </label>
        )}
      />

      <Controller
        control={control}
        name="category"
        render={({ field, formState: { errors } }) => (
          <label className="form-control">
            <span className="label label-text">Categories</span>
            <Select
              {...field}
              options={categories?.categories}
              getOptionLabel={(option) => option["name"]}
              getOptionValue={(option) => option["_id"]}
              isClearable
              className={`border border-[var(--fallback-bc,oklch(var(--bc)/0.2))] rounded-lg bg-[var(--fallback-b1,oklch(var(--b1)/var(--tw-bg-opacity)))] ${
                errors.category && "!border-error"
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
            {errors.category && (
              <span className="text-xs text-error font-bold">
                {errors.category.message}
              </span>
            )}
          </label>
        )}
      />
    </div>
  );
};

export default BrandAndCategory;
