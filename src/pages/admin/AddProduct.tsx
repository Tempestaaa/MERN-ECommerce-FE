import { useForm } from "react-hook-form";
import Input from "../../components/commons/Input";
import { zodResolver } from "@hookform/resolvers/zod";
import { ProductAdd, ProductDataAdd } from "../../types/product.type";
import FileInput from "../../components/commons/FileInput";
import CategoryRadio from "../../components/commons/CategoryRadio";

const AddProduct = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ProductAdd>({
    resolver: zodResolver(ProductDataAdd),
  });
  const onSubmit = async (data: ProductAdd) => {
    console.log(data);
  };

  return (
    <div className="flex flex-col gap-2 px-2">
      <h1 className="text-4xl font-bold">Add Product</h1>
      <div className="divider" />
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col md:gap-2 max-w-xl"
      >
        <Input label="Name" {...register("name")} error={errors.name} />
        <Input
          type="number"
          step="any"
          label="Price"
          {...register("newPrice")}
          error={errors.newPrice}
        />
        <CategoryRadio
          label="Category"
          {...register("category")}
          error={errors.category}
        />
        <FileInput
          type="file"
          label="Image"
          accept="image/*"
          {...register("image")}
          error={errors.image}
        />
        <button className="btn btn-neutral mt-4">Save Product</button>
      </form>
    </div>
  );
};

export default AddProduct;
