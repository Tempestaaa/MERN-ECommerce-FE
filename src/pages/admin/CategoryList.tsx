import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useState } from "react";
import { Check, Plus, X } from "lucide-react";
import {
  Category,
  CategoryAdd,
  CategoryBackEnd,
} from "../../types/category.type";
import toast from "react-hot-toast";
import Input from "../../components/commons/Input";
import Loading from "../../components/commons/Loading";
import Skeleton from "../../components/admin/Skeleton";
import { addCategory, updateCategory } from "../../apis/category.api";
import Categories from "../../components/admin/category/Categories";

const CategoryList = () => {
  const queryClient = useQueryClient();
  const { data: categories, isLoading } = useQuery<CategoryBackEnd>({
    queryKey: ["categoryList"],
  });
  const [id, setId] = useState<string | null>(null);
  const [name, setName] = useState("");

  // ADD CATEGORY
  const { mutateAsync: addCategoryApi, isPending: isAddingcategory } =
    useMutation({
      mutationFn: (formData: CategoryAdd) => addCategory(formData),
      onSuccess: async () => {
        toast.success("Category added");
        await queryClient.invalidateQueries({ queryKey: ["categoryList"] });
        setName("");
      },
      onError: (error) => {
        toast.error(error.message);
        setName("");
      },
    });
  const handleAddcategory = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await addCategoryApi({ name });
  };

  // UPDATE CATEGORY
  const { mutateAsync: updateCategoryApi, isPending: isUpdatingcategory } =
    useMutation({
      mutationFn: (formData: Category) =>
        updateCategory(formData, id as string),
      onSuccess: async () => {
        toast.success("category updated");
        await queryClient.invalidateQueries({ queryKey: ["categoryList"] });
        setName("");
        setId(null);
      },
      onError: (error) => {
        toast.error(error.message);
      },
    });
  const handleUpdatecategory = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await updateCategoryApi({ _id: id as string, name });
  };

  return (
    <div className="flex flex-col w-full">
      <h1 className="text-xl font-bold uppercase tracking-wide">
        categories Management
      </h1>
      <div className="flex flex-col md:flex-row gap-2 items-center">
        <form
          onSubmit={id ? handleUpdatecategory : handleAddcategory}
          className="flex-1 flex items-end gap-1 w-full"
        >
          <Input
            placeholder="Add category..."
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
            disabled={isAddingcategory || isUpdatingcategory}
          >
            {id ? (
              isUpdatingcategory ? (
                <Loading />
              ) : (
                <Check />
              )
            ) : isAddingcategory ? (
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
          <Categories
            categoryList={categories?.categories}
            setId={setId}
            setName={setName}
          />
        )}
      </section>
    </div>
  );
};

export default CategoryList;
