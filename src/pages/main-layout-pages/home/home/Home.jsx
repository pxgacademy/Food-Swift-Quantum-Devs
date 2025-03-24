import PageContainer from "../../../../components/containers/PageContainer";
import AtAGlance from "../at-a-glance/AtAGlance";
import Banner from "../banner/Banner";
import HowToWork from "../how-to-work/HowToWork";
import Restaurant from "../restaurant/Restaurant";
import PopularCard from "../popular-card/PopularCard";
import Subscribe from "../subscribe/Subscribe";
import PartnerBiker from "../partnerBiker/PartnerBiker";
import Faq from "../Faq/Faq";

const Home = () => {
  return (
    <PageContainer>
      <Banner />
      <HowToWork />
      <PopularCard />
      <Restaurant />
      <AtAGlance />
      <Subscribe />
      <PartnerBiker />
      <Faq></Faq>
    </PageContainer>
  );
};

export default Home;
