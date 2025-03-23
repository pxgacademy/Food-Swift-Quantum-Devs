const FoodDetails = () => {
  return (
    <div className="grid md:grid-cols-3 gap-5">
      <div className="md:col-span-2">
        {/* immag */}
        <div className="">
          <img
            className="w-full "
            src="https://i.ibb.co.com/gXwM72D/restaurant-detail-big-img1-3.webp"
            alt="Food"
          />
        </div>
        <div>
          <h2>Nik Baker's</h2>
          <p>rating section</p>
        </div>
      </div>
      {/* Price */}
      <div className="text-6xl md:col-span-1">Your Order section Price</div>
    </div>
  );
};

export default FoodDetails;
