import PageContainer from "../../../../components/containers/PageContainer";

import AtAGlance from "../at-a-glance/AtAGlance";
import Banner from "../banner/Banner";
import HowToWork from "../how-to-work/HowToWork";

import Restaurant from "../restaurant/Restaurant";
import PopularCard from "../popular-card/PopularCard";
import Subscribe from "../subscribe/Subscribe";
import PatnerBiker from "../PatnerBiker/PatnerBiker";
import Faq from "../Faq/Faq";

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
      <PatnerBiker></PatnerBiker>
      <Faq></Faq>
    </PageContainer>
  );
};

export default Home;
