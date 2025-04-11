import SectionContainer from "../../../../components/containers/SectionContainer";
import SectionTitle from "../../../../components/containers/SectionTitle";
import { Link } from "react-router-dom";
import { cities } from "../../../../utilities/arrays-and-objects/ArraysAndObjects";

const City = () => {
  return (
    <SectionContainer>
      <SectionTitle>Find the Restaurant of your City</SectionTitle>
      <div className="grid lg:grid-cols-4 md:grid-cols-2 gird-cols-1 gap-6">
        {cities?.slice(0, 8).map((city, i) => (
          <Link key={i} to="/restaurant" className="rounded-md overflow-hidden">
            <div className="restaurantImg relative">
              <img src={city?.image} alt="" />
              <h3 className="absolute top-2 right-2 text-black bg-amber-200 px-4 py-2 rounded-lg font-bold text-lg lg:text-2xl">
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
