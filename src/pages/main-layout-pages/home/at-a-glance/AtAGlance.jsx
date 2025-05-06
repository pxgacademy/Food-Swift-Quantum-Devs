import SectionContainer from "../../../../components/containers/SectionContainer";
import SectionTitle from "../../../../components/containers/SectionTitle";

const glances = [
  {
    label: "Satisfied Customer",
    number: 53756,
    image: "https://i.ibb.co.com/TM7tr9rL/img2.jpg",
    lastMonthUpdate: "21% more than last month",
  },
  {
    label: "Best Restaurants",
    number: 1242,
    image: "https://i.ibb.co.com/9mh48qYn/img3.jpg",
    lastMonthUpdate: "06% more than last month",
  },
  {
    label: "Food Delivered",
    number: 368642,
    image: "https://i.ibb.co.com/cKKBXV24/img1.jpg",
    lastMonthUpdate: "28% more than last month",
  },
];

const AtAGlance = () => {
  // return (
  //   <SectionContainer>
  //     <SectionTitle>At a Glance</SectionTitle>

  //     <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6">
  //       {glances?.map((glance, i) => (
  //         <div
  //           key={i}
  //           className=" shadow-sm shadow-primary bg-base-200/60 p-6 text-center rounded-2xl"
  //         >
  //           <h3 className="text-primary text-5xl font-bold">
  //             {glance.number} +
  //           </h3>
  //           <p className="lg:text-3xl text-xl pt-3">{glance.label}</p>
  //         </div>
  //       ))}
  //     </div>
  //   </SectionContainer>
  // );

  return (
    <SectionContainer>
      <SectionTitle>At a Glance</SectionTitle>

      <div className="flex justify-center">
        <div className="stats stats-vertical md:stats-horizontal text-center sm:text-left shadow-lg bg-base-200/70 w-full max-w-6xl">
          {glances?.map((glance, i) => (
            <div key={i} className="stat flex justify-between items-center">
              <div>
                <div className="stat-title text-lg">{glance.label}</div>
                <div className={`stat-value text-primary`}>
                  {glance.number} +
                </div>
                <div className="stat-desc">{glance.lastMonthUpdate}</div>
              </div>
              <div className="h-28 w-20">
                <img
                  src={glance.image}
                  alt="Image"
                  className="h-full w-full object-cover rounded-md"
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="border-t-4 border-primary/40 max-w-xl mx-auto mt-14" />
    </SectionContainer>
  );
};

export default AtAGlance;
