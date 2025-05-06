import workOne from "../../../../assets/work/work-1.png";
import SectionContainer from "../../../../components/containers/SectionContainer";
import SectionTitle from "../../../../components/containers/SectionTitle";

const howToWorkData = [
  {
    id: "01",
    image: workOne,
    label: "Select Restaurant",
    description:
      "Non enim praesent elementum facilisis leo vel fringilla. Lectus proin nibh nisl condimentum id. Quis varius quam quisque id diam vel.",
  },
  {
    id: "02",
    image: workOne,
    label: "Select Menu",
    description:
      "Non enim praesent elementum facilisis leo vel fringilla. Lectus proin nibh nisl condimentum id. Quis varius quam quisque id diam vel.",
  },
  {
    id: "03",
    image: workOne,
    label: "Wain for Delivery",
    description:
      "Non enim praesent elementum facilisis leo vel fringilla. Lectus proin nibh nisl condimentum id. Quis varius quam quisque id diam vel.",
  },
];

const HowToWork = () => {
  return (
    <SectionContainer>
      <SectionTitle>How To Work</SectionTitle>

      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-24">
        {howToWorkData?.map((v) => (
          <div key={v.id} className="text-center">
            <img src={v.image} alt={v.label} className="mx-auto " />
            <h2 className="text-primary text-2xl font-bold my-4">
              <span className="text-4xl">{v.id}</span> <br /> {v.label}
            </h2>
            <p className="text-lg">{v.description}</p>
          </div>
        ))}
      </div>
    </SectionContainer>
  );
};

export default HowToWork;
