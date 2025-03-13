import PageContainer from "../../../../components/containers/PageContainer";
import useContextValue from "../../../../hooks/useContextValue";

const Home = () => {
  const { name } = useContextValue();
  return (
    <PageContainer>
      <h2>Welcome to {name}!</h2>
    </PageContainer>
  );
};

export default Home;
