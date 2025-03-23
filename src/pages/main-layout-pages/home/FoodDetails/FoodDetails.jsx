const FoodDetails = () => {
  return (
    <div className="grid md:grid-cols-3 gap-5 text-black dark:text-white">
      <div className="md:col-span-2">
        {/* immag */}
        <div className="">
          <img
            className="w-full "
            src="https://i.ibb.co.com/gXwM72D/restaurant-detail-big-img1-3.webp"
            alt="Food"
          />
        </div>
        {/* text and contity */}
        <div className="flex items-center justify-between ">
          <div className="mb-5 space-y-2">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold">
              Nik Baker's
            </h2>
            <p className="text-gray-600 dark:text-white text-sm">
              Greater Kailash (GK) 2 Domino's
            </p>
          </div>
          <p>rating section</p>
        </div>
        <p className="text-xl font-bold">$99.00</p>
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
        <div className="mt-5 md:mt-8">
          <button className="btn text-xl">Order Now</button>
        </div>
      </div>
      {/* Price */}
      <div className="md:col-span-1 bg-gradient-to-r from-red-500 via-green-950 to-cyan-600 p-[1px]">
        <div className="h-full w-full bg-white dark:bg-black">
          Your Order section Price
        </div>
      </div>
    </div>
  );
};

export default FoodDetails;
