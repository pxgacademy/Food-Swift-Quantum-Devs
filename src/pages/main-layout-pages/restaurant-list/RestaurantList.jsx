import { IoMdStarOutline } from "react-icons/io";
import restaurantOne from "../../../assets/restaurant/restaurant1.jpg";
import restaurantTwo from "../../../assets/restaurant/restaurant2.jpg";
import restaurantThree from "../../../assets/restaurant/restaurant3.jpg";
import restaurantFour from "../../../assets/restaurant/restaurant4.jpg";
import restaurantFive from "../../../assets/restaurant/restaurant5.jpg";
import restaurantSix from "../../../assets/restaurant/restaurant6.jpg";
import restaurantSeven from "../../../assets/restaurant/restaurant7.jpg";
import restaurantEight from "../../../assets/restaurant/restaurant8.jpg";
import { Link } from "react-router-dom";
import PageContainer from "../../../components/containers/PageContainer";
import SectionContainer from "../../../components/containers/SectionContainer";
import SectionTitle from "../../../components/containers/SectionTitle";

const RestaurantList = () => {
  return (
    <PageContainer>
      <SectionContainer margin="my-12">
        <SectionTitle>Find best restaurant in Dhaka</SectionTitle>
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gird-cols-1 gap-6">
          <Link
            to="/foodList"
            className="rounded-md overflow-hidden border border-amber-100 bg-amber-50"
          >
            <div className="restaurantImg">
              <img src={restaurantOne} alt="" />
            </div>
            <div className="flex justify-between px-3 py-1">
              <div>
                <h3 className="text-xl font-bold text-slate-800">
                  Pizza House
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
          <Link
            to="/foodList"
            className="rounded-md overflow-hidden border border-amber-100 bg-amber-50"
          >
            <div className="restaurantImg">
              <img src={restaurantTwo} alt="" />
            </div>
            <div className="flex justify-between px-3 py-1">
              <div>
                <h3 className="text-xl font-bold text-slate-800">
                  Burger Corner
                </h3>
                <p className="text-lg text-slate-600">Burger, </p>
              </div>
              <div>
                <p className="flex gap-1 items-center text-slate-700">
                  <IoMdStarOutline className="text-yellow-500 text-xl" /> 4.5
                </p>
              </div>
            </div>
          </Link>
          <Link
            to="/foodList"
            className="rounded-md overflow-hidden border border-amber-100 bg-amber-50"
          >
            <div className="restaurantImg">
              <img src={restaurantThree} alt="" />
            </div>
            <div className="flex justify-between px-3 py-1">
              <div>
                <h3 className="text-xl font-bold text-slate-800">
                  Haji Birayany
                </h3>
                <p className="text-lg text-slate-600">Birayani, Teheri</p>
              </div>
              <div>
                <p className="flex gap-1 items-center text-slate-700">
                  <IoMdStarOutline className="text-yellow-500 text-xl" /> 4.5
                </p>
              </div>
            </div>
          </Link>
          <Link
            to="/foodList"
            className="rounded-md overflow-hidden border border-amber-100 bg-amber-50"
          >
            <div className="restaurantImg">
              <img src={restaurantFour} alt="" />
            </div>
            <div className="flex justify-between px-3 py-1">
              <div>
                <h3 className="text-xl font-bold text-slate-800">
                  Mohammoadiya Hotel
                </h3>
                <p className="text-lg text-slate-600">Chiken, Roast</p>
              </div>
              <div>
                <p className="flex gap-1 items-center text-slate-700">
                  <IoMdStarOutline className="text-yellow-500 text-xl" /> 4.5
                </p>
              </div>
            </div>
          </Link>
          <Link
            to="/foodList"
            className="rounded-md overflow-hidden border border-amber-100 bg-amber-50"
          >
            <div className="restaurantImg">
              <img src={restaurantFive} alt="" />
            </div>
            <div className="flex justify-between px-3 py-1">
              <div>
                <h3 className="text-xl font-bold text-slate-800">
                  Pizza House
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
          <Link
            to="/foodList"
            className="rounded-md overflow-hidden border border-amber-100 bg-amber-50"
          >
            <div className="restaurantImg">
              <img src={restaurantSix} alt="" />
            </div>
            <div className="flex justify-between px-3 py-1">
              <div>
                <h3 className="text-xl font-bold text-slate-800">
                  Burger Corner
                </h3>
                <p className="text-lg text-slate-600">Burger, </p>
              </div>
              <div>
                <p className="flex gap-1 items-center text-slate-700">
                  <IoMdStarOutline className="text-yellow-500 text-xl" /> 4.5
                </p>
              </div>
            </div>
          </Link>
          <Link
            to="/foodList"
            className="rounded-md overflow-hidden border border-amber-100 bg-amber-50"
          >
            <div className="restaurantImg">
              <img src={restaurantSeven} alt="" />
            </div>
            <div className="flex justify-between px-3 py-1">
              <div>
                <h3 className="text-xl font-bold text-slate-800">
                  Haji Birayany
                </h3>
                <p className="text-lg text-slate-600">Birayani, Teheri</p>
              </div>
              <div>
                <p className="flex gap-1 items-center text-slate-700">
                  <IoMdStarOutline className="text-yellow-500 text-xl" /> 4.5
                </p>
              </div>
            </div>
          </Link>
          <Link
            to="/foodList"
            className="rounded-md overflow-hidden border border-amber-100 bg-amber-50"
          >
            <div className="restaurantImg">
              <img src={restaurantEight} alt="" />
            </div>
            <div className="flex justify-between px-3 py-1">
              <div>
                <h3 className="text-xl font-bold text-slate-800">
                  Mohammoadiya Hotel
                </h3>
                <p className="text-lg text-slate-600">Chiken, Roast</p>
              </div>
              <div>
                <p className="flex gap-1 items-center text-slate-700">
                  <IoMdStarOutline className="text-yellow-500 text-xl" /> 4.5
                </p>
              </div>
            </div>
          </Link>
        </div>
      </SectionContainer>
    </PageContainer>
  );
};

export default RestaurantList;
