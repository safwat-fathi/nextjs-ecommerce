import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { InputBaseProps } from "../types";
import { useFormContext } from "react-hook-form";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

const TextInput = ({
  label,
  name,
  type = "text",
  placeholder,
}: InputBaseProps) => {
  const { register, formState } = useFormContext();

  return (
    <div className="relative">
      <div className="absolute w-10 h-10 inset-y-0 z-10 left-0 flex items-center pl-3 pointer-events-none">
        <FontAwesomeIcon icon={faSearch} />
      </div>
      {label && <label htmlFor={name}>{label}</label>}
      <input
        {...register(name)}
        type={type}
        placeholder={placeholder}
        className={`${
          formState.errors[name] && "error"
        } w-full py-2 pl-10 pr-3 placeholder-gray-400 placeholder-opacity-100 text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 sm:text-sm`}
      />
      {formState.errors[name] && (
        // @ts-ignore
        <span className="error-message">{formState.errors[name].message}</span>
      )}
    </div>
  );
};

export default TextInput;
