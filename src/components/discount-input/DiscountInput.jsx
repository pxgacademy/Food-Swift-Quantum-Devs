import PropTypes from "prop-types";

const DiscountInput = ({ className = "" }) => {
  return (
    <div
      className={`${className} border border-primary/50 p-4 rounded-lg max-w-lg`}
    >
      <p className="text-lg">Get discount and enjoy your meal!</p>
      <div className="mt-3 flex">
        <input
          type="text"
          className="input input-primary flex-1 "
          placeholder="type your coupon here"
        />
        <button className="btn btn-primary md:px-8 uppercase ml-3">Get</button>
      </div>
    </div>
  );
};

DiscountInput.propTypes = {
  className: PropTypes.string,
};

export default DiscountInput;
