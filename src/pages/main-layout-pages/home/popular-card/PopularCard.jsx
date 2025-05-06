import React from "react";
import { FaHeart, FaShoppingCart, FaStar, FaRegStar } from "react-icons/fa";
import { Link } from "react-router-dom";
import SectionContainer from "../../../../components/containers/SectionContainer";
import SectionTitle from "../../../../components/containers/SectionTitle";

const foods = [
  {
    id: 1,
    name: "Bacon Cheeseburger",
    price: "9.9",
    image: "https://i.ibb.co.com/bHrhrHP/Pan-Fried-Asparagus.jpg",
    rating: 5,
  },
  {
    id: 2,
    name: "Classic Cheeseburger",
    price: "8.9",
    image: "https://i.ibb.co.com/ZSh4gPd/Delicious-vegan-tacos.jpg",
    rating: 4,
  },
  {
    id: 3,
    name: "Chicken Burger",
    price: "7.9",
    image:
      "https://i.ibb.co.com/Hg5D0L4/Vegan-Gluten-Free-Creamy-Spinach-Pasta.jpg",
    rating: 3,
  },
  {
    id: 4,
    name: "Chicken Sandwich",
    price: "5.9",
    image: "https://i.ibb.co.com/CBcyYgK/Pumpkin-soup.jpg",
    rating: 4,
  },
];

const PopularCard = () => {
  return (
    <SectionContainer>
      <SectionTitle>Popular Foods</SectionTitle>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {foods.map((food) => (
          <div
            key={food.id}
            whileHover={{ scale: 1.05 }}
            className="relative flex flex-col items-center p-4 pb-6 border border-primary/25  rounded-xl bg-base-200/80 shadow-lg"
          >
            <button className="absolute top-2 right-2 btn btn-circle bg-black/80 border-none cursor-auto text-red-500 ">
              <FaHeart />
            </button>
            <img
              src={food.image}
              alt={food.name}
              className="object-contain rounded-md mb-3"
            />
            <h3 className="text-lg font-semibold">{food.name}</h3>
            <div className="flex justify-center my-2">
              {Array.from({ length: 5 }).map((_, index) => (
                <span
                  key={index}
                  className={
                    index < food.rating ? "text-primary" : "text-gray-400"
                  }
                >
                  {index < food.rating ? <FaStar /> : <FaRegStar />}
                </span>
              ))}
            </div>
            <p className="text-xl font-bold mb-3">${food.price}</p>
            <Link
              to={"/foodDetails"}
            >
              <button className="btn btn-primary">
              <FaShoppingCart /> <span>Order Now</span>
              </button>
            </Link>
          </div>
        ))}
      </div>
    </SectionContainer>
  );
};

export default PopularCard;
