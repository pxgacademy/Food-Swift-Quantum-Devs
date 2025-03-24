import PropTypes from "prop-types";

const SectionContainer = ({
  children,
  className = "",
  padding = "px-5 md:px-8 lg:px-12",
  margin = "",
}) => {
  return (
    <div className={`${className} ${padding} ${margin} `}>{children}</div>
  );
};

SectionContainer.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  padding: PropTypes.string,
  margin: PropTypes.string,
};

export default SectionContainer;
