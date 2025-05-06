import subscribe from "../../../../assets/subscribe.png";
import SectionContainer from "../../../../components/containers/SectionContainer";

const Subscribe = () => {
  return (
    <SectionContainer>
      <div className="flex justify-between md:flex-nowrap flex-wrap items-center md:gap-24 gap-4">
        <div>
          <img src={subscribe} alt="" />
        </div>
        <div className="">
          <h3 className="lg:text-5xl md:text-3xl text-2xl md:text-right text-center">
            Get the menu of your favorite restaurants every day
          </h3>
          <form className="mt-6 md:text-right text-center">
            <input
              type="text"
              placeholder="Enter email address"
              className="input input-lg"
            />
            <button type="button" className="btn btn-lg btn-primary ml-3">
              SUBSCRIBE
            </button>
          </form>
        </div>
      </div>
    </SectionContainer>
  );
};

export default Subscribe;
