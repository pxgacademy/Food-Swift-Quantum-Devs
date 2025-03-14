import useContextValue from "../../../../hooks/useContextValue";
import AtAGlance from "../at-a-glance/AtAGlance";
import Banner from "../banner/Banner";
import HowToWork from "../how-to-work/HowToWork";
import PopularCard from "../popular-card/PopularCard";
import Subscribe from "../subscribe/Subscribe";

const Home = () => {
  const { name } = useContextValue();
  return (
    <div>
      <h2 className="text-5xl font-semibold text-center my-16">{name}</h2>
      <Banner></Banner>
      <HowToWork></HowToWork>
      {/* Popular card Section */}
      <PopularCard/>
      <AtAGlance></AtAGlance>
      <Subscribe></Subscribe>
    </div>

  );
};

export default Home;
