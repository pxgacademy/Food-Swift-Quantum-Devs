import PropTypes from "prop-types";

const PageContainer = ({
  children,
  className = "",
  padding = "",
  margin = "",
}) => {
  return (
    <section
      className={`w-full max-w-[1600px] mx-auto ${className} ${padding} ${margin}`}
    >
      {children}
    </section>
  );
};

PageContainer.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  padding: PropTypes.string,
  margin: PropTypes.string,
};

export default PageContainer;
