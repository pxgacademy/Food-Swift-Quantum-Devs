import PropTypes from "prop-types";

const SectionTitle = ({ children }) => {
  return (
    <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">
      {children}
    </h2>
  );
};

SectionTitle.propTypes = {
  children: PropTypes.node.isRequired,
};

export default SectionTitle;
