import PropTypes from "prop-types";

const Input = ({
  label = "",
  id = "",
  type = "text",
  placeholder = "",
  disabled = false,
  readOnly = false,
  accept = "",
  className = "",
  padding = "",
  margin = "",
  width = "w-full",
  inputType = "input",
  clearStyles = false,
  validation,
  errorText,
}) => {
  const style = `outline-none focus:outline-none ${errorText && "border-error"}`;

  return (
    <div>
      {label && <label className="block mb-2 ml-0.5">{label}</label>}
      <input
        id={id}
        type={type}
        placeholder={placeholder}
        disabled={disabled || false}
        readOnly={readOnly}
        accept={accept}
        {...validation}
        className={`${className} ${width} ${padding} ${margin} ${inputType} ${!clearStyles && style} `}
      />
      {errorText && (
        <span className="text-error inline-block mt-1">{errorText}</span>
      )}
    </div>
  );
};

Input.propTypes = {
  label: PropTypes.string,
  id: PropTypes.string,
  type: PropTypes.string,
  placeholder: PropTypes.string,
  disabled: PropTypes.bool,
  readOnly: PropTypes.bool,
  accept: PropTypes.string,
  className: PropTypes.string,
  width: PropTypes.string,
  padding: PropTypes.string,
  margin: PropTypes.string,
  inputType: PropTypes.string,
  clearStyles: PropTypes.bool,
  validation: PropTypes.object,
  errorText: PropTypes.string,
};

export default Input;
