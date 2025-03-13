import PageContainer from "../../../../components/containers/PageContainer";

import AtAGlance from "../at-a-glance/AtAGlance";
import Banner from "../banner/Banner";
import HowToWork from "../how-to-work/HowToWork";
import Subscribe from "../subscribe/Subscribe";

const Home = () => {
  return (
    <PageContainer>
      <Banner></Banner>
      <HowToWork></HowToWork>
      <AtAGlance></AtAGlance>
      <Subscribe></Subscribe>
    </PageContainer>
  );
};

export default Home;
