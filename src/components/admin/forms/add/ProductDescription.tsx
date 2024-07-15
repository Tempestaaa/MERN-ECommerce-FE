import { useFormContext } from "react-hook-form";
import { ProductAdd } from "../../../../types/product.type";
import JoditEditor from "jodit-react";
import { useEffect, useMemo, useRef, useState } from "react";

const ProductDescription = () => {
  const {
    formState: { errors },
    setValue,
  } = useFormContext<ProductAdd>();

  const [content, setContent] = useState("");
  const editor = useRef(null);
  const config = useMemo(
    () => ({
      readonly: false,
      height: "300px",
      tabIndex: 1,
      placeholder: "Enter the description about product...",
    }),
    []
  );

  useEffect(() => {
    setValue("desc", content);
  }, [content]);

  return (
    <label className="form-control">
      <span className="label label-text">Description</span>
      <div className={`${errors.desc && "border-error"}`}>
        <JoditEditor
          ref={editor}
          config={config}
          value={content}
          onChange={(newContent) => setContent(newContent)}
        />
      </div>
    </label>
  );
};

export default ProductDescription;
