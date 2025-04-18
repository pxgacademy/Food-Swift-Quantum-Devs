const Select = ({
  disabled = false,
  name = "",
  defaultValue = "",
  option,
  label,
  className = "",
}) => {
  return (
    <div>
      {label && <label className="block mb-2 ml-0.5">{label}</label>}
      <select
        name={name}
        defaultValue={defaultValue}
        disabled={disabled || false}
        className={`${className} select w-full outline-none focus:outline-none`}
      >
        {option && option}
      </select>
    </div>
  );
};

export default Select;

