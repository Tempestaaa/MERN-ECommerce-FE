import { useFormContext } from "react-hook-form";
import { ProductAdd } from "../../../../types/product.type";
import { useEffect, useState } from "react";

const ProductImages = () => {
  const {
    register,
    formState: { errors },
    watch,
  } = useFormContext<ProductAdd>();
  const [imageList, setImageList] = useState<FileList>();
  useEffect(() => {
    const subscription = watch(({ images }) => {
      setImageList(images);
    });
    return () => subscription.unsubscribe();
  }, [watch]);

  return (
    <div className="">
      <label className="form-control flex-1 w-full md:mx-0 md:w-1/2">
        <span className="label label-text">Images</span>
        <input
          multiple
          type="file"
          accept="image/*"
          {...register("images")}
          className={`file-input file-input-bordered w-full ${
            errors.images && "!border-error"
          }`}
        />
        {errors.images && (
          <span className="text-error text-xs font-bold">
            {errors.images.message as string}
          </span>
        )}
      </label>

      <div className="mt-4 grid grid-cols-[repeat(auto-fill,minmax(300px,1fr))] gap-4">
        {imageList &&
          Array.from(imageList as ArrayLike<File>).map((item) => (
            <div key={item.name}>
              <img
                src={URL.createObjectURL(item)}
                alt="Item Image"
                className="rounded-md"
              />
            </div>
          ))}
      </div>
    </div>
  );
};

export default ProductImages;
