import { useFormContext } from "react-hook-form";
import { ProductAdd } from "../../../types/product.type";
import { useEffect, useState } from "react";

const Images = () => {
  const {
    register,
    formState: { errors },
    watch,
  } = useFormContext<ProductAdd>();
  const [image, setImage] = useState<File>();
  useEffect(() => {
    const subscription = watch(({ images }) => {
      console.log(images);
    });
    return () => subscription.unsubscribe();
  }, [watch]);

  return (
    <label className="form-control flex-1 w-full md:mx-0 md:w-1/2">
      <span className="label label-text">Images</span>
      {/* <img
        src={image ? URL.createObjectURL(image) : upload_area}
        alt="Images Holder"
        className={`${image && "border-4 rounded-xl"}`}
      /> */}
      <input multiple type="file" accept="image/*" {...register("images")} />
      {errors.images && (
        <span className="text-error text-xs font-bold">
          {errors.images.message as string}
        </span>
      )}
    </label>
  );
};

export default Images;
