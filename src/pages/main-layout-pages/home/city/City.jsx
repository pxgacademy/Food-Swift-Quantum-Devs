import cityOne from "../../../../assets/city/dhaka.webp";
import cityTwo from "../../../../assets/city/chittagong.webp";
import cityThree from "../../../../assets/city/sylhet.webp";
import cityFour from "../../../../assets/city/rajshahi.webp";
import cityFive from "../../../../assets/city/khulna.webp";
import citySix from "../../../../assets/city/Barisal.webp";
import citySeven from "../../../../assets/city/rangpur.webp";
import cityEight from "../../../../assets/city/mymensingh.webp";
import SectionContainer from "../../../../components/containers/SectionContainer";
import SectionTitle from "../../../../components/containers/SectionTitle";

const City = () => {
  return (
    <SectionContainer>
      <div>
        <SectionTitle>Find your city Restaurant</SectionTitle>

        <div className="grid lg:grid-cols-4 md:grid-cols-2 gird-cols-1 gap-6">
          <div className="rounded-md overflow-hidden">
            <div className="restaurantImg relative">
              <img src={cityOne} alt="" />
              <h3 className="absolute top-2 right-2 text-black bg-amber-200 px-4 py-2 rounded-lg font-bold text-lg lg:text-2xl">
                Dhaka
              </h3>
            </div>
          </div>
          <div className="rounded-md overflow-hidden">
            <div className="restaurantImg relative">
              <img src={cityTwo} alt="" />
              <h3 className="absolute top-2 right-2 text-black bg-amber-200 px-4 py-2 rounded-lg font-bold text-lg lg:text-2xl">
                Chittagaon
              </h3>
            </div>
          </div>
          <div className="rounded-md overflow-hidden">
            <div className="restaurantImg relative">
              <img src={cityThree} alt="" />
              <h3 className="absolute top-2 right-2 text-black bg-amber-200 px-4 py-2 rounded-lg font-bold text-lg lg:text-2xl">
                Sylhet
              </h3>
            </div>
          </div>
          <div className="rounded-md overflow-hidden">
            <div className="restaurantImg relative">
              <img src={cityFour} alt="" />
              <h3 className="absolute top-2 right-2 text-black bg-amber-200 px-4 py-2 rounded-lg font-bold text-lg lg:text-2xl">
                Rajshahi
              </h3>
            </div>
          </div>
          <div className="rounded-md overflow-hidden">
            <div className="restaurantImg relative">
              <img src={cityFive} alt="" />
              <h3 className="absolute top-2 right-2 text-black bg-amber-200 px-4 py-2 rounded-lg font-bold text-lg lg:text-2xl">
                Khulna
              </h3>
            </div>
          </div>
          <div className="rounded-md overflow-hidden">
            <div className="restaurantImg relative">
              <img src={citySix} alt="" />
              <h3 className="absolute top-2 right-2 text-black bg-amber-200 px-4 py-2 rounded-lg font-bold text-lg lg:text-2xl">
                Barishal
              </h3>
            </div>
          </div>
          <div className="rounded-md overflow-hidden">
            <div className="restaurantImg relative">
              <img src={citySeven} alt="" />
              <h3 className="absolute top-2 right-2 text-black bg-amber-200 px-4 py-2 rounded-lg font-bold text-lg lg:text-2xl">
                Rangpur
              </h3>
            </div>
          </div>
          <div className="rounded-md overflow-hidden">
            <div className="restaurantImg relative">
              <img src={cityEight} alt="" />
              <h3 className="absolute top-2 right-2 text-black bg-amber-200 px-4 py-2 rounded-lg font-bold text-lg lg:text-2xl">
                Mymensingh
              </h3>
            </div>
          </div>
        </div>
      </div>
    </SectionContainer>
  );
};

export default City;
