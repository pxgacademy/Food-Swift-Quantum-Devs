import SectionContainer from "../../../../components/containers/SectionContainer";
import SectionTitle from "../../../../components/containers/SectionTitle";
import { Link } from "react-router-dom";
import { cities as Cities } from "../../../../utilities/arrays-and-objects/ArraysAndObjects";
import { useState } from "react";

const City = () => {
  const [cities, setCities] = useState(Cities);

  const handleFindCity = (e) => {
    const searchTerm = e.toLowerCase().trim();
    const filteredCities = Cities.filter((city) =>
      city.name.toLowerCase().includes(searchTerm)
    );
    setCities(filteredCities);
  };

  return (
    <SectionContainer className="">
      <SectionTitle>Find the Restaurant of your City</SectionTitle>
      <input
        type="text"
        placeholder="Find your city"
        onChange={(e) => handleFindCity(e.target.value)}
        className="input mb-3 focus:outline-none"
      />
      <div className=" flex overflow-x-auto gap-6 pb-2">
        {cities?.map((city, i) => (
          <Link key={i} to={`/restaurant/${city?.name}`}>
            <div className="w-80 h-54  relative flex">
              <img
                src={city?.image}
                alt={city?.name}
                className="w-full h-full object-cover"
              />
              <h3 className="absolute bottom-0 p-2 bg-base-200/70 backdrop-blur w-full font-bold text-lg lg:text-2xl">
                {city?.name}
              </h3>
            </div>
          </Link>
        ))}
      </div>
    </SectionContainer>
  );
};

export default City;
