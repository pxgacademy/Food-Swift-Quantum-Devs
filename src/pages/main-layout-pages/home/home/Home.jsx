import useContextValue from "../../../../hooks/useContextValue";
import About from "../about/About";

const Home = () => {
  const { name } = useContextValue();
  return (
    <div>
      <h2 className="text-3xl text-center my-16">{name}</h2>
      <About></About>
    </div>
  );
};

export default Home;
