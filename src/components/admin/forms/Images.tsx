import { useFormContext } from "react-hook-form";
import { ProductAdd } from "../../../types/product.type";
import { useEffect, useState } from "react";
import upload_area from "../../../assets/Admin_Assets/upload_area.svg";

const Images = () => {
  const {
    register,
    formState: { errors },
    watch,
  } = useFormContext<ProductAdd>();
  const [image, setImage] = useState<File>();
  useEffect(() => {
    const subscription = watch(({ image }) => {
      if (Number(image?.length) > 0) {
        setImage(image![0] as File);
      }
    });
    return () => subscription.unsubscribe();
  }, [watch]);

  return (
    <label className="form-control flex-1 w-full md:mx-0 md:w-1/2">
      <span className="label label-text">Images</span>
      <img
        src={image ? URL.createObjectURL(image) : upload_area}
        alt="Images Holder"
        className={`${image && "border-4 rounded-xl"}`}
      />
      <input
        multiple
        type="file"
        accept="image/*"
        {...register("image")}
        hidden
      />
      {errors.image && (
        <span className="text-error text-xs font-bold">
          {errors.image.message as string}
        </span>
      )}
    </label>
  );
};

export default Images;
