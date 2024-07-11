import { forwardRef, InputHTMLAttributes } from "react";
import { FieldError } from "react-hook-form";

interface RadioProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: FieldError | undefined;
}
const options = ["men", "women", "kids"];

const CategoryRadio = forwardRef<HTMLInputElement, RadioProps>(
  ({ label, error, ...rest }, ref) => {
    return (
      <div className="flex flex-col gap-2 w-full">
        {label}
        <div className="flex gap-6 items-center">
          {options.map((item) => (
            <label key={item} className="flex items-center gap-1">
              <input
                type="radio"
                className="radio"
                value={item}
                {...rest}
                ref={ref}
              />
              <span className="capitalize">{item}</span>
            </label>
          ))}
        </div>
        {error && (
          <span className="text-error text-xs font-bold">
            {error.message as string}
          </span>
        )}
      </div>
    );
  }
);

export default CategoryRadio;
