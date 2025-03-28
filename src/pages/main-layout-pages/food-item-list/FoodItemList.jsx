import React from "react";
import { FaHeart, FaShoppingCart, FaStar, FaRegStar } from "react-icons/fa";
import SectionContainer from "../../../components/containers/SectionContainer";
import SectionTitle from "../../../components/containers/SectionTitle";
import PageContainer from "../../../components/containers/PageContainer";

const foods = [
  {
    id: 1,
    name: "Bacon Cheeseburger",
    price: "9.9",
    image: "https://i.ibb.co.com/bHrhrHP/Pan-Fried-Asparagus.jpg",
    rating: 4,
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
    rating: 4,
  },
  {
    id: 4,
    name: "Chicken Sandwich",
    price: "5.9",
    image: "https://i.ibb.co.com/CBcyYgK/Pumpkin-soup.jpg",
    rating: 4,
  },
];

const FoodItemList = () => {
  return (
    <PageContainer>
      <SectionContainer margin="my-12">
        <SectionTitle>Restaurant food item list</SectionTitle>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {foods.map((food) => (
            <div
              key={food.id}
              whileHover={{ scale: 1.05 }}
              className="relative flex flex-col items-center p-4 border border-yellow-300 dark:border-yellow-700 rounded-xl bg-base-200 shadow-lg"
            >
              <button className="absolute top-3 right-3 text-red-500">
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
                      index < food.rating ? "text-yellow-500" : "text-gray-400"
                    }
                  >
                    {index < food.rating ? <FaStar /> : <FaRegStar />}
                  </span>
                ))}
              </div>
              <p className="text-xl font-bold">${food.price}</p>
              <button className="btn bg-yellow-500 mt-4 flex items-center gap-2">
                <FaShoppingCart /> Order Now
              </button>
            </div>
          ))}
        </div>
      </SectionContainer>
    </PageContainer>
  );
};

export default FoodItemList;
