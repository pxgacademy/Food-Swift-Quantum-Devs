import bannerImg from "../../../../assets/banner/banner.png";
import Btn_becomeFoodman from "../../../../components/buttons/Btn_becomeFoodman";
import Btn_partnerWithUs from "../../../../components/buttons/btn_partnerWithUs";
import SectionContainer from "../../../../components/containers/SectionContainer";

const Banner = () => {
  return (
    <SectionContainer>
      <div className="mt-10 flex lg:gap-24 gap-12 justify-between items-center">
        <div className="lg:w-1/2 w-full">
          <h2 className="lg:text-6xl md:text-4xl text-3xl">
            The Best <br /> Food Swift <br /> Service in your home
          </h2>
          <p className="lg:text-xl text-md pt-4">
            Your order from Food Swift has been successfully delivered to your
            address. We hope you enjoy your meal! If you have any feedback,
            please let us know.
          </p>

          <div className="flex gap-x-2">
            <Btn_partnerWithUs />
            <Btn_becomeFoodman />
          </div>
        </div>
        <div className="md:w-1/2 w-full flex justify-end">
          <img src={bannerImg} alt="" className="w-full md:w-[80%]" />
        </div>
      </div>
    </SectionContainer>
  );
};

export default Banner;
