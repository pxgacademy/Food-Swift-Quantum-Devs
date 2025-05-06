import SectionContainer from "../../../../components/containers/SectionContainer";
import SectionTitle from "../../../../components/containers/SectionTitle";

const glances = [
  {
    label: "Satisfied Customer",
    number: 53756,
  },
  {
    label: "Best Restaurants",
    number: 1242,
  },
  {
    label: "Food Delivered",
    number: 368642,
  },
];

const AtAGlance = () => {
  return (
    <SectionContainer>
      <SectionTitle>At a Glance</SectionTitle>

      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6">
        {glances?.map((glance, i) => (
          <div
            key={i}
            className=" shadow-sm shadow-primary bg-base-200/60 p-6 text-center rounded-2xl"
          >
            <h3 className="text-primary text-5xl font-bold">
              {glance.number} +
            </h3>
            <p className="lg:text-3xl text-xl pt-3">{glance.label}</p>
          </div>
        ))}
      </div>
    </SectionContainer>
  );
};

export default AtAGlance;
