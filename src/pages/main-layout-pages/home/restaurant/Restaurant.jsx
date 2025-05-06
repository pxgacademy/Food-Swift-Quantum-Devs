import restaurantOne from "../../../../assets/restaurant/restaurant1.jpg";
import restaurantTwo from "../../../../assets/restaurant/restaurant2.jpg";
import restaurantThree from "../../../../assets/restaurant/restaurant3.jpg";
import restaurantFour from "../../../../assets/restaurant/restaurant4.jpg";
import SectionContainer from "../../../../components/containers/SectionContainer";
import SectionTitle from "../../../../components/containers/SectionTitle";
import { FaStar } from "react-icons/fa";

const restaurants = [
  {
    id: 1,
    name: "Pizza House",
    image: restaurantOne,
    items: ["Pizza"],
    rating: 4.5,
  },
  {
    id: 2,
    name: "Burger Corner",
    image: restaurantTwo,
    items: ["Burger"],
    rating: 4.5,
  },
  {
    id: 3,
    name: "Haji Biriyani",
    image: restaurantThree,
    items: ["Biriyani"],
    rating: 4.5,
  },
  {
    id: 4,
    name: "Muhammadiya Hotel",
    image: restaurantFour,
    items: ["Chicken", "Roast"],
    rating: 4.5,
  },
];

const Restaurant = () => {
  return (
    <SectionContainer>
      <SectionTitle>Dhaka Best Restaurants</SectionTitle>

      <div className="grid lg:grid-cols-4 md:grid-cols-2 gird-cols-1 gap-6">
        {restaurants?.map((res) => (
          <div
            key={res.id}
            className="rounded-md overflow-hidden bg-base-200/80 border border-primary/25"
          >
            <div className="restaurantImg">
              <img src={res.image} alt={res.name} />
            </div>
            <div className="flex justify-between px-3 py-1">
              <div>
                <h3 className="text-xl font-bold">{res.name}</h3>
                <p className="text-lg ">
                  {res.items?.map((item, i) => (
                    <span key={i}>
                      {item}
                      {res.items?.length !== i + 1 && ", "}
                    </span>
                  ))}
                </p>
              </div>
              <div>
                <p className="flex gap-1 items-center text-primary">
                  <FaStar className="text-primary text-xl" />{" "}
                  <span>{res.rating}</span>
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </SectionContainer>
  );
};

export default Restaurant;
