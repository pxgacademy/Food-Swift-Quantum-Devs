import { RxDotFilled } from "react-icons/rx";

const PatnerBiker = () => {
  return (
    <div className="md:flex justify-between  gap-5 mb-10">
      <div className="space-y-5">
        <h3 className="text-2xl lg:text-3xl  font-bold mb-8">
          Got a Restaurant? Become a Partner
        </h3>
        <p className="text-lg md:text-xl flex items-center">
          <span className="text-red-500 border-none">
            <RxDotFilled />
          </span>
          Get your food featured
        </p>
        <p className="text-lg md:text-xl flex items-center">
          <span className="text-red-500 border-none ">
            <RxDotFilled />
          </span>
          Enjoy an exposure to a huge customer base
        </p>
        <p className="text-lg md:text-xl flex items-center">
          <span className="text-red-500 border-none">
            <RxDotFilled />
          </span>
          Increase your sales through collaborative campaigns
        </p>
        <div>
          <button className="btn text-lg text-white md:text-xl bg-primaryColor hover:bg-[#F29F05] mt-8">
            Partner with us
          </button>
        </div>
      </div>
      <div className="p-4">
        <div className="border border-r-2 border-gray-300 min-h-56 hidden md:block"></div>
      </div>
      <div className="space-y-5">
        <h3 className="text-2xl lg:text-3xl  font-bold mb-8">
          Got a Bike or a Cycle? Earn with us
        </h3>
        <p className="text-lg md:text-xl flex items-center">
          <span className="text-red-500 border-none">
            <RxDotFilled />
          </span>
          Earn extra with daily quests and special offers
        </p>
        <p className="text-lg md:text-xl flex items-center">
          <span className="text-red-500 border-none">
            <RxDotFilled />
          </span>
          Enjoy an exposure to a huge customer base
        </p>
        <p className="text-lg md:text-xl flex items-center">
          <span className="text-red-500 border-none">
            <RxDotFilled />
          </span>
          Always get your payment right on time!
        </p>
        <div>
          <button className="btn text-lg text-white md:text-xl bg-primaryColor hover:bg-[#F29F05] mt-8">
            Become a Foodman
          </button>
        </div>
      </div>
    </div>
  );
};

export default PatnerBiker;
