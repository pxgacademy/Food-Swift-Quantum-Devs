import PropTypes from "prop-types";

const Select = ({
  readOnly = false,
  option,
  label,
  className = "",
  padding = "",
  margin = "",
  validation,
  errorText,
}) => {
  return (
    <div>
      {label && <label className="block mb-2 ml-0.5">{label}</label>}
      <select
        readOnly={readOnly}
        {...validation}
        className={`${className} ${padding} ${margin} select w-full outline-none focus:outline-none`}
      >
        {option && option}
      </select>
      {errorText && (
        <span className="text-error inline-block mt-1">{errorText}</span>
      )}
    </div>
  );
};

Select.propTypes = {
  readOnly: PropTypes.bool,
  option: PropTypes.element,
  label: PropTypes.string,
  className: PropTypes.string,
  padding: PropTypes.string,
  margin: PropTypes.string,
  validation: PropTypes.object.isRequired,
  errorText: PropTypes.string,
};

export default Select;
