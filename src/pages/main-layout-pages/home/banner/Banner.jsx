import bannerImg from "../../../../assets/banner/banner.png";
import SectionContainer from "../../../../components/containers/SectionContainer";
import DiscountInput from "../../../../components/discount-input/DiscountInput";

const Banner = () => {
  return (
    <>
      <SectionContainer>
        <div className="mt-10 flex lg:gap-24 gap-12 justify-between items-center">
          <div className="lg:w-1/2 w-full">
            <h2 className="lg:text-6xl md:text-4xl text-3xl">
              Best <span className="font-Lobster text-primary">Loizar</span>{" "}
              Service <br /> in your area
            </h2>

            <p className="lg:text-xl text-md pt-4">
              Your order from <span className="font-Lobster">Loizar</span> will
              be successfully delivered to your address. We hope you will enjoy
              your meal! If you have any feedback, please let us know.
            </p>

            <DiscountInput className="mt-8" />
          </div>
          <div className="md:w-1/2 w-full flex justify-end">
            <img src={bannerImg} alt="" className="w-full md:w-[70%]" />
          </div>
        </div>
      </SectionContainer>

      <SectionContainer
        className={`md:relative md:bg-[url(./assets/images/chef-banner.webp)] bg-center bg-no-repeat bg-cover md:min-h-96 lg:min-h-[500px] rounded-2xl md:mb-48 lg:mb-56`}
      >
        <div className="bg-base-100 border border-base-300 w-full md:max-w-2xl p-5 rounded-xl shadow-lg md:relative md:translate-y-[60%] lg:translate-y-[100%]">
          <div className="space-y-3 text-lg">
            <p className="text-2xl font-semibold">
              Join <span className="font-Lobster font-normal">Loizar</span> and
              grow your business!
            </p>
            <p>
              Want to reach thousands of hungry customers with your delicious
              food or quality groceries? We&apos;re here to make it happen!
            </p>
            <p>
              By partnering with <span className="font-Lobster">Loizar</span>,
              your menu or product list goes live online. We&apos;ll handle the
              orders, pickups, and deliveries — so you can focus on what you do
              best.
            </p>
            <p>
              Ready to expand your reach and boost your sales? <br /> Let,s
              start this exciting journey together!
            </p>
          </div>
          <div className="text-right mt-2">
            <button type="button" className="btn btn-primary md:px-8 uppercase">
              Get Started!
            </button>
          </div>
        </div>
      </SectionContainer>
    </>
  );
};

export default Banner;
