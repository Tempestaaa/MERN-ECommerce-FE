import { FormProvider, useForm } from "react-hook-form";
import Input from "../../components/commons/Input";
import { zodResolver } from "@hookform/resolvers/zod";
import { ProductAdd, ProductDataAdd } from "../../types/product.type";
import Prices from "../../components/admin/forms/Prices";
import CategorySelect from "../../components/admin/forms/CategorySelect";
import Images from "../../components/admin/forms/Images";
import convertToBase64 from "../../utils/convertBase64";

const AddProduct = () => {
  const formMethods = useForm<ProductAdd>({
    resolver: zodResolver(ProductDataAdd),
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = formMethods;
  const onSubmit = async (data: ProductAdd) => {
    const b64 = await convertToBase64(data.image[0] as File);
    const productData = { ...data, image: b64 };
    console.log(productData);
  };

  return (
    <div className="flex flex-col gap-2 px-2 h-full">
      <h1 className="text-4xl font-bold">Add Product</h1>
      <FormProvider {...formMethods}>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col md:gap-2 max-w-xl"
        >
          <Input
            label="Product name"
            {...register("name")}
            error={errors.name}
          />
          <Prices />
          <CategorySelect />
          <Images />
          <button type="submit" className="btn btn-neutral mt-4">
            Save Product
          </button>
        </form>
      </FormProvider>
    </div>
  );
};

export default AddProduct;
