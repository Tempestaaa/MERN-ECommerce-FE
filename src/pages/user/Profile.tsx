import { useForm } from "react-hook-form";
import Input from "../../components/commons/Input";
import http from "../../utils/http";

type tInput = {
  img: FileList;
  name: string;
};

const Profile = () => {
  const { register, handleSubmit } = useForm<tInput>();
  const onSubmit = async (data: tInput) => {
    const formData = new FormData();
    // Single upload - somehow
    // formData.append("img", data.img[0]);

    // Multi upload
    Array.from(data.img).forEach((item) => {
      formData.append("images", item);
    });
    formData.append("name", data.name);

    const res = await http.post("/api/products/upload", formData, {
      headers: { "Content-Type": "multipart/form-data" },
    });
    console.log(res);
  };
  return (
    <div className="h-full">
      <form onSubmit={handleSubmit(onSubmit)} className="flex items-end gap-2">
        <Input
          multiple
          type="file"
          className={`file-input file-input-bordered`}
          {...register("img")}
        />
        <Input {...register("name")} />
        <button className="btn btn-outline">Submit</button>
      </form>
    </div>
  );
};

export default Profile;
