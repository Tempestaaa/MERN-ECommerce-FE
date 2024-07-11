import { forwardRef, TextareaHTMLAttributes } from "react";
import { FieldError } from "react-hook-form";

interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  error?: FieldError | undefined;
}

const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ label, error, ...rest }, ref) => {
    return (
      <label className="form-control w-full max-w-xs">
        <span className="label label-text">{label}</span>
        <textarea
          ref={ref}
          {...rest}
          className={`textarea textarea-bordered textarea-sm w-full max-w-xs ${
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

Textarea.displayName = "Textarea";

export default Textarea;
