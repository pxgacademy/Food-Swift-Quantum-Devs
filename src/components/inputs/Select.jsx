import PropTypes from "prop-types";

const Select = ({
  disabled = false,
  name = "",
  defaultValue = "",
  option,
  label,
  className = "",
  padding = "",
  margin = "",
}) => {
  return (
    <div>
      {label && <label className="block mb-2 ml-0.5">{label}</label>}
      <select
        name={name}
        defaultValue={defaultValue}
        disabled={disabled || false}
        className={`${className} ${padding} ${margin} select w-full outline-none focus:outline-none`}
      >
        {option && option}
      </select>
    </div>
  );
};

Select.propTypes = {
  disabled: PropTypes.bool,
  name: PropTypes.string,
  defaultValue: PropTypes.string,
  option: PropTypes.element,
  label: PropTypes.string,
  className: PropTypes.string,
  padding: PropTypes.string,
  margin: PropTypes.string,
};

export default Select;
