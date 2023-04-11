import { InputBaseProps } from "./types";
import { useFormContext, Controller, FieldError } from "react-hook-form";

const InputField = ({
  label,
  name,
  type = "text",
  placeholder,
  validationSchema,
}: InputBaseProps) => {
  const { register, formState } = useFormContext();

  return (
    <div>
      {label && <label htmlFor={name}>{label}</label>}
      <input
        {...register(name)}
        type={type}
        placeholder={placeholder}
        className={formState.errors[name] && "error"}
      />
      {formState.errors[name] && (
        // @ts-ignore
        <span className="error-message">{formState.errors[name].message}</span>
      )}
    </div>
  );
};

export default InputField;
