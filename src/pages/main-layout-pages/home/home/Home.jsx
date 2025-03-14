import PageContainer from "../../../../components/containers/PageContainer";
import useContextValue from "../../../../hooks/useContextValue";

import AtAGlance from "../at-a-glance/AtAGlance";
import Banner from "../banner/Banner";
import HowToWork from "../how-to-work/HowToWork";

import Restaurant from "../restaurant/Restaurant";
import PopularCard from "../popular-card/PopularCard";
import Subscribe from "../subscribe/Subscribe";

const Home = () => {
  return (
    <PageContainer>
      <Banner></Banner>
      <HowToWork></HowToWork>
      <Restaurant></Restaurant>
      {/* Popular card Section */}
      <PopularCard />
      <AtAGlance></AtAGlance>
      <Subscribe></Subscribe>
    </PageContainer>
  );
};

export default Home;
