import PropTypes from "prop-types";

const SectionTitle = ({ children }) => {
  return (
    <div className="flex justify-center mb-14">
      <h2 className="bg-base-200/70 shadow-[0px_0px_15px_2px] shadow-primary/20 py-3 px-7 rounded-md text-2xl md:text-3xl text-primary font-extrabold text-center font-Lato">
        {children}
      </h2>
    </div>
  );
};

SectionTitle.propTypes = {
  children: PropTypes.node.isRequired,
};

export default SectionTitle;
