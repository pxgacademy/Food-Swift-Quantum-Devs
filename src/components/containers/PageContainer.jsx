import PropTypes from "prop-types";

const PageContainer = ({
  children,
  className = "",
  padding = "px-5 md:px-8 lg:px-12",
}) => {
  return (
    <section
      className={`w-full max-w-[1600px] mx-auto ${className} ${padding}`}
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
