import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useState } from "react";
import { Check, Plus, X } from "lucide-react";
import { Brand, BrandAdd, BrandBackEnd } from "../../types/brand.type";
import toast from "react-hot-toast";
import Input from "../../components/commons/Input";
import Loading from "../../components/commons/Loading";
import { addBrand, updateBrand } from "../../apis/brand.api";
import Skeleton from "../../components/admin/Skeleton";
import Brands from "../../components/admin/brand/Brands";

const BrandList = () => {
  const queryClient = useQueryClient();
  const { data: brands, isLoading } = useQuery<BrandBackEnd>({
    queryKey: ["brandList"],
  });
  const [id, setId] = useState<string | null>(null);
  const [name, setName] = useState("");

  // ADD BRAND
  const { mutateAsync: addBrandApi, isPending: isAddingBrand } = useMutation({
    mutationFn: (formData: BrandAdd) => addBrand(formData),
    onSuccess: async () => {
      toast.success("Brand added");
      await queryClient.invalidateQueries({ queryKey: ["brandList"] });
      setName("");
    },
    onError: (error) => {
      toast.error(error.message);
      setName("");
    },
  });
  const handleAddBrand = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await addBrandApi({ name });
  };

  // UPDATE BRAND
  const { mutateAsync: updateBrandApi, isPending: isUpdatingBrand } =
    useMutation({
      mutationFn: (formData: Brand) => updateBrand(formData, id as string),
      onSuccess: async () => {
        toast.success("Brand updated");
        await queryClient.invalidateQueries({ queryKey: ["brandList"] });
        setName("");
        setId(null);
      },
      onError: (error) => {
        toast.error(error.message);
      },
    });
  const handleUpdateBrand = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await updateBrandApi({ _id: id as string, name });
  };

  return (
    <div className="flex flex-col w-full">
      <h1 className="text-xl font-bold uppercase tracking-wide">
        Brands Management
      </h1>
      <div className="flex flex-col md:flex-row gap-2 items-center">
        <form
          onSubmit={id ? handleUpdateBrand : handleAddBrand}
          className="flex-1 flex items-end gap-1 w-full"
        >
          <Input
            placeholder="Add Brand..."
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          {id && (
            <button
              type="button"
              className="btn btn-neutral"
              onClick={() => {
                setId(null);
                setName("");
              }}
            >
              <X />
            </button>
          )}
          <button
            type="submit"
            className="btn btn-neutral"
            disabled={isAddingBrand || isUpdatingBrand}
          >
            {id ? (
              isUpdatingBrand ? (
                <Loading />
              ) : (
                <Check />
              )
            ) : isAddingBrand ? (
              <Loading />
            ) : (
              <Plus />
            )}
          </button>
        </form>

        <div className="flex-1 w-full">
          <Input placeholder="Search..." type="search" />
        </div>
      </div>

      <div className="divider" />

      <section className="grid gap-x-4 gap-y-2 grid-cols-[repeat(auto-fill,minmax(200px,1fr))]">
        {isLoading ? (
          <Skeleton />
        ) : (
          <Brands brandList={brands?.brands} setId={setId} setName={setName} />
        )}
      </section>
    </div>
  );
};

export default BrandList;
