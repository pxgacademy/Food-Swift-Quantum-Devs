import PropTypes from "prop-types";

const Textarea = ({
  placeholder = "",
  disabled = false,
  readOnly = false,
  required = true,
  name = "",
  defaultValue = "",
  label,
  divStyles='',
  className = "textarea w-full max-h-40 outline-none focus:outline-none",
  padding = "",
  margin = "",
}) => {
  return (
    <div className={`${divStyles}`} >
      {label && <label className="block mb-2 ml-0.5">{label}</label>}
      <textarea
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

Textarea.propTypes = {
  placeholder: PropTypes.string,
  disabled: PropTypes.bool,
  readOnly: PropTypes.bool,
  required: PropTypes.bool,
  name: PropTypes.string,
  defaultValue: PropTypes.string,
  label: PropTypes.string,
  divStyles: PropTypes.string,
  className: PropTypes.string,
  padding: PropTypes.string,
  margin: PropTypes.string,
};

export default Textarea;





