import PropTypes from "prop-types";
// import loaderGif from "../../assets/lottie/Loading.json";
import Lottie from "lottie-react";

const Loading = ({
  width = "w-full",
  minWidth = "",
  maxWidth = "max-w-screen-2xl",
  height = "h-full",
  minHeight = "min-h-[650px]",
  maxHeight = "",
  className = "",
}) => {
  const style = `${width} ${minWidth} ${maxWidth} ${height} ${minHeight} ${maxHeight} ${className}`;

  // return (
  //   <section
  //     className={`${style} mx-auto flex items-center justify-center bg-gray-50 dark:bg-[#1d3335]`}
  //   >
  //     <Lottie animationData={loaderGif} loop={true} />
  //   </section>
  // );

  return (
    <section className={`${style} mx-auto flex items-center justify-center `}>
      <div className="relative size-24 rounded-full flex items-center justify-center animate-spin">
        <div className="size-4 bg-primary rounded-full absolute right-0" />
        <div className="size-4 bg-primary absolute rotate-45 right-0 rounded-t-full rounded-l-full" />
        <div className="size-3 bg-primary rounded-full absolute right-[5px] -translate-y-[150%]" />
        <div className="size-2 bg-primary rounded-full absolute right-[13px] -translate-y-[380%]" />
        <div className="size-1 bg-primary rounded-full absolute right-[22px] -translate-y-[950%]" />
      </div>
    </section>
  );
};

Loading.propTypes = {
  width: PropTypes.string,
  minWidth: PropTypes.string,
  maxWidth: PropTypes.string,
  height: PropTypes.string,
  minHeight: PropTypes.string,
  maxHeight: PropTypes.string,
  className: PropTypes.string,
};

export default Loading;
