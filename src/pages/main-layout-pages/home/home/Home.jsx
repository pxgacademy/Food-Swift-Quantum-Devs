import PageContainer from "../../../../components/containers/PageContainer";
import AtAGlance from "../at-a-glance/AtAGlance";
import Banner from "../banner/Banner";
import City from "../city/City";
import HowToWork from "../how-to-work/HowToWork";
import Restaurant from "../restaurant/Restaurant";
import PopularCard from "../popular-card/PopularCard";
import Subscribe from "../subscribe/Subscribe";
import PartnerBiker from "../partnerBiker/PartnerBiker";
import Faq from "../Faq/Faq";

const Home = () => {
  return (
    <PageContainer>
<<<<<<< HEAD
      <Banner />
      <HowToWork />
=======
      <Banner></Banner>
      <HowToWork></HowToWork>
      <City></City>
      <Restaurant></Restaurant>
      {/* Popular card Section */}
>>>>>>> 58c652f4c1cd38b76f3588ae032763f3de303628
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
