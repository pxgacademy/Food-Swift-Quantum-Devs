import { IoMdStarOutline } from "react-icons/io";
import { Link, useParams } from "react-router-dom";
import PageContainer from "../../../components/containers/PageContainer";
import SectionContainer from "../../../components/containers/SectionContainer";
import SectionTitle from "../../../components/containers/SectionTitle";
import Loading from "../../../components/loading/Loading";
import { useQuery } from "@tanstack/react-query";
import usePrivateLink from "../../../hooks/usePrivateLink";

const RestaurantList = () => {
  const { city_name } = useParams();
  const privateAPI = usePrivateLink();

  const { data: restaurants, isLoading } = useQuery({
    queryKey: ["restaurants", city_name],
    enabled: !!city_name,
    queryFn: async () => {
      const { data } = await privateAPI.get(`/restaurants/${city_name}`);
      return data;
    },
  });

  if (isLoading || !city_name) return <Loading />;
  console.log(restaurants);

  return (
    <PageContainer>
      <SectionContainer margin="my-12">
        <SectionTitle>Find best restaurant in {city_name}</SectionTitle>
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gird-cols-1 gap-6">
          {restaurants.map((restaurant) => (
            <Link
              key={restaurant?._id}
              to="/foodList"
              className="rounded-md overflow-hidden border border-amber-100 bg-amber-50"
            >
              <div className="restaurantImg">
                <img
                  src={restaurant?.banner}
                  referrerPolicy="no-referrer"
                  alt="restaurant banner"
                />
              </div>
              <div className="flex justify-between px-3 py-1">
                <div>
                  <h3 className="text-xl font-bold text-slate-800">
                    {restaurant?.name}
                  </h3>
                  <p className="text-lg text-slate-600">Pizza</p>
                </div>
                <div>
                  <p className="flex gap-1 items-center text-slate-700">
                    <IoMdStarOutline className="text-yellow-500 text-xl" /> 4.5
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </SectionContainer>
    </PageContainer>
  );
};

export default RestaurantList;
