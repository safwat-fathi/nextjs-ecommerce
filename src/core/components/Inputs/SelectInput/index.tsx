import { SelectInputProps } from "../../meta";

// TODO: handle unselected value
// TODO: handle register with react hook form
// TODO: handle style
const SelectField = ({ label, name, options, ...rest }: SelectInputProps) => {
  return (
    <div className="form-group">
      {label && <label htmlFor={name}>{label}</label>}
      <select name={name} {...rest}>
        {options.map(option => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SelectField;
