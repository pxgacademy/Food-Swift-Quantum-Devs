import PropTypes from "prop-types";

const Input = ({
  type = "text",
  placeholder = "",
  disabled = false,
  readOnly = false,
  required= true,
  name = "",
  defaultValue = "",
  label,
  className = "input w-full outline-none focus:outline-none",
  padding = "",
  margin = "",
}) => {
  return (
    <div>
      {label && <label className="block mb-2 ml-0.5">{label}</label>}
      <input
        type={type}
        placeholder={placeholder}
        name={name}
        defaultValue={defaultValue}
        required={required}
        disabled={disabled || false}
        readOnly={readOnly}
        className={`${className} ${padding} ${margin} `}
      />
    </div>
  );
};



export default Input;
