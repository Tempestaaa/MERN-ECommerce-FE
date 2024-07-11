import { forwardRef, InputHTMLAttributes } from "react";
import { FieldError } from "react-hook-form";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  type?: string;
  error?: FieldError | undefined;
  className?: string;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ label, type = "text", className, error, ...rest }, ref) => {
    return (
      <label className="form-control w-full flex-1">
        <span className="label label-text">{label}</span>
        <input
          type={type}
          ref={ref}
          {...rest}
          className={`input input-bordered w-full ${className} ${
            error && "!border-error"
          }`}
        />
        {error && (
          <span className="text-error text-xs font-bold">
            {error.message as string}
          </span>
        )}
      </label>
    );
  }
);

Input.displayName = "Input";

export default Input;
