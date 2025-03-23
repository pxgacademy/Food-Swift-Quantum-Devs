import { useState } from "react";

const FoodDetails = () => {
  const [quentity, setQuentity] = useState(1);
  const handelOdd = () => {
    if (quentity === 1) return;
    setQuentity(quentity - 1);
  };
  const handelEven = () => {
    setQuentity(quentity + 1);
  };
  return (
    <div className="grid md:grid-cols-3 gap-5 text-black dark:text-white mb-10">
      {/* immag and description section */}
      <div className="md:col-span-2">
        {/* immag */}
        <div>
          <img
            className="w-full "
            src="https://i.ibb.co.com/gXwM72D/restaurant-detail-big-img1-3.webp"
            alt="Food"
          />
        </div>
        {/* text and contity */}
        <div className="flex items-center justify-between mt-10">
          <div className="mb-5 space-y-2">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold">
              Nik Baker's
            </h2>
            <p className="text-gray-600 dark:text-white text-sm">
              Greater Kailash (GK) 2 Domino's
            </p>
          </div>
          {/* reting */}
          <div className="rating">
            <input
              type="radio"
              name="rating-2"
              className="mask mask-star-2 bg-orange-400"
              aria-label="1 star"
            />
            <input
              type="radio"
              name="rating-2"
              className="mask mask-star-2 bg-orange-400"
              aria-label="2 star"
            />
            <input
              type="radio"
              name="rating-2"
              className="mask mask-star-2 bg-orange-400"
              aria-label="3 star"
            />
            <input
              type="radio"
              name="rating-2"
              className="mask mask-star-2 bg-orange-400"
              aria-label="4 star"
              defaultChecked
            />
            <input
              type="radio"
              name="rating-2"
              className="mask mask-star-2 bg-orange-400"
              aria-label="5 star"
            />
          </div>
        </div>
        <p className="text-xl font-bold">$99.00</p>

        <fieldset className="fieldset flex gap-3 mb-3">
          <button onClick={handelOdd} className="text-4xl cursor-pointer">
            -
          </button>
          <input
            type="number"
            className="input w-[60px] text-center text-xl"
            value={quentity}
          />
          <button onClick={handelEven} className="text-3xl cursor-pointer">
            +
          </button>
        </fieldset>

        <p className="text-sm text-gray-700 dark:text-white">
          Rennie White, an advertising manager in Dhaka City, leaves for work 10
          minutes later these days because she no longer has to wait in line for
          coffee at a Dunkin' Donuts outlet. Instead, she preorders coffee by
          sending a text message from her cellphone on the way to work. "I can
          get off the train and get the coffee and not break my flow," Ms. White
          says Similique sunt in culpa qui officia deserunt mollitia animi, id
          est laborum et dolorum fuga. uni harum quidem sed rerum facilis est et
          expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi
          optio cumque nihilares impedit quo repellendus eligendi optio cumque
          nihilare impedit quo minus id quod maxime.
        </p>
        {/* Order Now btn */}
        <div className="mt-5 md:mt-8">
          <button className="btn text-xl text-white md:text-2xl bg-primaryColor hover:bg-[#F29F05]border-none w-full">
            Order Now
          </button>
        </div>
      </div>
      {/* Order and Price section */}
      <div className="md:col-span-1 bg-gradient-to-r from-red-500 via-green-950 to-cyan-600 p-[1px]">
        <div className="h-full w-full bg-white dark:bg-black relative">
          <h3 className="text-2xl text-center pt-5">Your Order</h3>
          {/* 1 Chicken tandori Special */}
          <div className="px-3 mt-7">
            <h3 className="font-bold flex items-center justify-between text-gray-600 dark:text-white">
              <span> 1. Chicken Tandoori</span>
              <span className="text-lg text-black dark:text-white">$99.00</span>
            </h3>
            {/* drink and butters */}
            <div className="flex justify-between space-y-2 mt-2">
              <div className="flex gap-3">
                <input
                  type="checkbox"
                  className="checkbox validator"
                  value={""}
                />
                <p>Drinks</p>
              </div>
              <p className="font-bold">$10.00</p>
            </div>
            <div className="flex justify-between">
              <div className="flex gap-3">
                <input
                  type="checkbox"
                  className="checkbox validator"
                  value={""}
                />
                <p>Butter</p>
              </div>
              <p className="font-bold">$12.00</p>
            </div>
          </div>
          {/* 2 Beef Tandori Special */}
          <div className="px-3 mt-7">
            <h3 className="font-bold flex items-center justify-between text-gray-600 dark:text-white">
              <span> 2. Beef Tandoori</span>
              <span className="text-lg text-black dark:text-white">
                $120.00
              </span>
            </h3>
            {/* drink and butters */}
            <div className="flex justify-between space-y-2 mt-2">
              <div className="flex gap-3">
                <input
                  type="checkbox"
                  className="checkbox validator"
                  value={""}
                />
                <p>Drinks</p>
              </div>
              <p className="font-bold">$10.00</p>
            </div>
            <div className="flex justify-between">
              <div className="flex gap-3">
                <input
                  type="checkbox"
                  className="checkbox validator"
                  value={""}
                />
                <p>Butter</p>
              </div>
              <p className="font-bold">$12.00</p>
            </div>
          </div>
          {/* prement btn */}
          <div className="mt-12 px-3 md:absolute bottom-0 bg-black dark:bg-white w-full text-white dark:text-black py-5">
            <p>
              SubTotal
              <span className="float-right">$170.00</span>
            </p>
            <p>
              Delivery
              <span className="float-right">$5.00</span>
            </p>
            <p className="w-full border border-b-2 mt-3"></p>
            <p>
              Total
              <span className="float-right">$175.00</span>
            </p>
            <div className="flex justify-center mt-5 w-full">
              <button className="btn text-lg text-white md:text-xl bg-primaryColor hover:bg-[#F29F05] mt-5 border-none w-full">
                confirm order
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FoodDetails;
