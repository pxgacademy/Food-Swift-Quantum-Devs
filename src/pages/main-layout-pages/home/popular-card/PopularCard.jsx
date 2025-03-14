import React from "react";
import PageContainer from "../../../../components/containers/PageContainer";
import { FaHeart, FaShoppingCart, FaStar, FaRegStar } from "react-icons/fa";

const burgers = [
  {
    id: 1,
    name: "Bacon Cheeseburger",
    price: "9.9",
    image: "/bacon-cheeseburger.png",
    rating: 4,
  },
  {
    id: 2,
    name: "Classic Cheeseburger",
    price: "8.9",
    image: "/classic-cheeseburger.png",
    rating: 4,
  },
  {
    id: 3,
    name: "Chicken Burger",
    price: "7.9",
    image: "/chicken-burger.png",
    rating: 4,
  },
  {
    id: 4,
    name: "Chicken Sandwich",
    price: "5.9",
    image: "/chicken-sandwich.png",
    rating: 4,
  },
];

const PopularCard = () => {
  return (
    <PageContainer>
      <div className="grid grid-cols-1 bg-gray-50 dark:bg-primaryColor md:grid-cols-2 lg:grid-cols-4 gap-6 p-6">
        {burgers.map((burger) => (
          <div
            key={burger.id}
            whileHover={{ scale: 1.05 }}
            className="border rounded-2xl shadow-lg transition bg-white text-black"
          >
            <div className="relative col-span-2 flex flex-col items-center p-4 border border-gray-300 rounded-xl bg-base-100 shadow-md">
              <button className="absolute top-3 right-3 text-red-500">
                <FaHeart />
              </button>
              <img
                src={burger.image}
                alt={burger.name}
                className="w-24 h-24 object-contain mb-3"
              />
              <h3 className="text-lg font-semibold">{burger.name}</h3>
              <div className="flex justify-center my-2">
                {Array.from({ length: 5 }).map((_, index) => (
                  <span
                    key={index}
                    className={
                      index < burger.rating
                        ? "text-yellow-500"
                        : "text-gray-400"
                    }
                  >
                    {index < burger.rating ? <FaStar /> : <FaRegStar />}
                  </span>
                ))}
              </div>
              <p className="text-xl font-bold">${burger.price}</p>
              <button className="btn bg-primary mt-4 flex items-center gap-2">
                <FaShoppingCart /> Order Now
              </button>
            </div>
          </div>
        ))}
      </div>
    </PageContainer>
  );
};

export default PopularCard;
