import PropTypes from "prop-types";

const SectionTitle = ({ children }) => {
  return (
    <div className="flex justify-center">
      <h2 className="inset-shadow-[0px_0px_10px_1px] inset-shadow-primary/60 shadow-[6px_6px_15px_0px] shadow-black/20 py-3 px-7 rounded-md text-2xl md:text-3xl text-primary font-extrabold text-center mb-8 font-Lato">
        {children}
      </h2>
    </div>
  );
};

SectionTitle.propTypes = {
  children: PropTypes.node.isRequired,
};

export default SectionTitle;
