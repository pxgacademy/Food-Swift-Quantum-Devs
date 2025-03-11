import useContextValue from "../../../../hooks/useContextValue";

const Home = () => {
  const { name } = useContextValue();
  return (
    <div>
      <h2 className="text-3xl text-center my-16">{name}Hello..</h2>
    </div>
  );
};

export default Home;
