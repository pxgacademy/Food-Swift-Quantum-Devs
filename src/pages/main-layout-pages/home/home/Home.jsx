import useContextValue from "../../../../hooks/useContextValue";

const Home = () => {
  const { name } = useContextValue();
  return (
    <div>
      <h2 className="text-5xl font-semibold text-center my-16">{name}</h2>
    </div>
  );
};

export default Home;
