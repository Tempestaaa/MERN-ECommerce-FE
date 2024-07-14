import { X } from "lucide-react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Brand } from "../../../types/brand.type";
import { deleteBrand } from "../../../apis/brand.api";
import toast from "react-hot-toast";

type Props = {
  brandList: Brand[] | undefined;
  setId: React.Dispatch<React.SetStateAction<string | null>>;
  setName: React.Dispatch<React.SetStateAction<string>>;
};

const Brands = ({ brandList, setId, setName }: Props) => {
  const queryClient = useQueryClient();

  // DELETE BRAND
  const { mutateAsync: deleteBrandApi } = useMutation({
    mutationFn: (brandId: string) => deleteBrand(brandId),
    onSuccess: async () => {
      toast.success("Brand deleted");
      await queryClient.invalidateQueries({ queryKey: ["brandList"] });
      setId(null);
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });

  return (
    <>
      {brandList?.map((item) => (
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

export default Brands;
