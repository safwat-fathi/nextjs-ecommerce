import { InputBaseProps } from "../../types";
import { useFormContext } from "react-hook-form";
import clsx from "clsx";

const TextInput = ({
  label,
  name,
  type = "text",
  placeholder,
  icon,
  className,
  required,
  ...rest
}: InputBaseProps) => {
  const { register, formState } = useFormContext();

  return (
    <div className="mb-6">
      {label && (
        <label htmlFor={name}>
          {label} {required && <span className="text-red-500">*</span>}
        </label>
      )}
      <div className="relative">
        {icon}
        <input
          {...register(name)}
          // type={type}
          placeholder={placeholder}
          className={clsx(
            {
              [`${className}`]: className,
              "border-red-400 focus:border-red-500 focus:ring-red-500":
                formState.errors[name],
              "border-gray-300 focus:ring-black focus:border-black":
                !formState.errors[name],
            },
            `w-full placeholder-gray-600 text-gray-700 bg-white border  rounded-md shadow-sm focus:outline-none focus:ring-1 sm:text-sm`
          )}
          {...rest}
        />
      </div>
      {formState.errors[name] && (
        <span className="absolute text-sm text-red-500">
          {String(formState.errors[name]!.message)}
        </span>
      )}
    </div>
  );
};

export default TextInput;
