import PropTypes from "prop-types";

const PageContainer = ({
  children,
  className = "",
}) => {
  return (
    <section
      className={`w-full max-w-[1600px] mx-auto ${className}`}
    >
      {children}
    </section>
  );
};

PageContainer.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  padding: PropTypes.string,
};

export default PageContainer;
