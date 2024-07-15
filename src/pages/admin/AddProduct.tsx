import { FormProvider, useForm } from "react-hook-form";
import Input from "../../components/commons/Input";
import { zodResolver } from "@hookform/resolvers/zod";
import { ProductAdd, ProductDataAdd } from "../../types/product.type";
import ProductDescription from "../../components/admin/forms/add/ProductDescription";
import ProductColors from "../../components/admin/forms/add/ProductColors";
import BrandAndCategory from "../../components/admin/forms/add/BrandAndCategory";
import ProductSizes from "../../components/admin/forms/add/ProductSizes";
import ProductOtherDetalts from "../../components/admin/forms/add/ProductOtherDetalts";
import ProductImages from "../../components/admin/forms/add/ProductImages";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { addProduct } from "../../apis/product.api";
import toast from "react-hot-toast";
import Loading from "../../components/commons/Loading";

const AddProduct = () => {
  const queryClient = useQueryClient();
  const formMethods = useForm<ProductAdd>({
    resolver: zodResolver(ProductDataAdd),
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = formMethods;
  const { mutateAsync: addProductApi, isPending } = useMutation({
    mutationFn: (formData: FormData) => addProduct(formData),
    onSuccess: async () => {
      toast.success("Product added");
      await queryClient.invalidateQueries({ queryKey: ["productList"] });
      reset();
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });

  const onSubmit = async (data: ProductAdd) => {
    const formData = new FormData();
    formData.append("name", data.name);
    formData.append("desc", data.desc);
    formData.append("oldPrice", data.oldPrice.toString());
    data.newPrice && formData.append("newPrice", data?.newPrice.toString());
    formData.append("rating", data.rating.toString());
    formData.append("brand", data.brand._id);
    formData.append("category", data.category._id);
    formData.append("inStock", data.inStock.toString());

    data.colors.split(", ").forEach((item, i) => {
      formData.append(`colors[${i}]`, item);
    });

    data.sizes.forEach((item, i) => {
      formData.append(`sizes[${i}]`, item.value);
    });

    Array.from(data.images).forEach((item) => {
      formData.append("images", item);
    });

    await addProductApi(formData);
  };

  return (
    <div className="flex flex-col gap-2 px-2 h-full">
      <h1 className="text-xl font-bold">Add Product</h1>
      <hr />

      <FormProvider {...formMethods}>
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col">
          <Input
            label="Product name"
            {...register("name")}
            error={errors.name}
          />
          <ProductDescription />
          <BrandAndCategory />
          <ProductColors />
          <ProductSizes />
          <ProductOtherDetalts />
          <ProductImages />

          <button
            disabled={isPending}
            type="submit"
            className="btn btn-neutral mt-4"
          >
            {isPending ? <Loading /> : "Save Product"}
          </button>
        </form>
      </FormProvider>
    </div>
  );
};

export default AddProduct;
