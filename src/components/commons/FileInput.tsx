import { forwardRef, InputHTMLAttributes } from "react";
import { FieldError, FieldErrorsImpl, Merge } from "react-hook-form";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: FieldError | Merge<FieldError, FieldErrorsImpl<any>> | undefined;
  className?: string;
}

const FileInput = forwardRef<HTMLInputElement, InputProps>(
  ({ label, className, error, ...rest }, ref) => {
    return (
      <label className="form-control w-full flex-1">
        <span className="label label-text">{label}</span>
        <input
          type="file"
          ref={ref}
          {...rest}
          className={`file-input file-input-bordered w-full ${className} ${
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

FileInput.displayName = "FileInput";

export default FileInput;
