import React from "react";
import PageContainer from "../../../../components/containers/PageContainer";
import { FaHeart, FaShoppingCart, FaStar, FaRegStar } from "react-icons/fa";
import { Link } from "react-router-dom";

const foods = [
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
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 py-6">
      {foods.map((food) => (
        <div
          key={food.id}
          whileHover={{ scale: 1.05 }}
          className="relative flex flex-col items-center p-4 border border-gray-300 dark:border-gray-700 rounded-xl bg-base-200 shadow-lg"
        >
          <button className="absolute top-3 right-3 text-red-500">
            <FaHeart />
          </button>
          <img
            src={food.image}
            alt={food.name}
            className="w-24 h-24 object-contain mb-3"
          />
          <h3 className="text-lg font-semibold">{food.name}</h3>
          <div className="flex justify-center my-2">
            {Array.from({ length: 5 }).map((_, index) => (
              <span
                key={index}
                className={
                  index < food.rating ? "text-yellow-500" : "text-gray-400"
                }
              >
                {index < food.rating ? <FaStar /> : <FaRegStar />}
              </span>
            ))}
          </div>
          <p className="text-xl font-bold">${food.price}</p>
          <Link
            to={"/foodDetails"}
            className="btn bg-primary mt-4 flex items-center gap-2"
          >
            <FaShoppingCart /> Order Now
          </Link>
        </div>
      ))}
    </div>
  );
};

export default PopularCard;
