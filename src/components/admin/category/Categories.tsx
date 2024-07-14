import { X } from "lucide-react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { Category } from "../../../types/category.type";
import { deleteCategory } from "../../../apis/category.api";

type Props = {
  categoryList: Category[] | undefined;
  setId: React.Dispatch<React.SetStateAction<string | null>>;
  setName: React.Dispatch<React.SetStateAction<string>>;
};

const Categories = ({ categoryList, setId, setName }: Props) => {
  const queryClient = useQueryClient();

  // DELETE BRAND
  const { mutateAsync: deleteBrandApi } = useMutation({
    mutationFn: (categoryId: string) => deleteCategory(categoryId),
    onSuccess: async () => {
      toast.success("Brand deleted");
      await queryClient.invalidateQueries({ queryKey: ["categoryList"] });
      setId(null);
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });

  return (
    <>
      {categoryList?.map((item) => (
        <div
          key={item._id}
          className="btn btn-outline duration-300 flex items-center justify-between"
        >
          <span
            onClick={() => {
              setId(item._id);
              setName(item.name);
            }}
            className="flex-1 h-full grid place-items-center truncate font-normal"
          >
            {item.name}
          </span>
          <button onClick={async () => await deleteBrandApi(item._id)}>
            <X />
          </button>
        </div>
      ))}
    </>
  );
};

export default Categories;
