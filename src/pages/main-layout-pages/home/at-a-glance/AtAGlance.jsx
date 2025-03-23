const AtAGlance = () => {
  return (
    <div className="lg:py-12 py-6">
      <h2 className="lg:text-3xl text-2xl font-bold text-center pb-8">
        At a Glance
      </h2>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6">
        <div className=" shadow-sm shadow-slate-300 p-6 text-center rounded-2xl">
          <h3 className="text-[#F29F05]  text-5xl font-bold">976 +</h3>
          <p className="lg:text-3xl text-xl pt-3">Satisfied Customer</p>
        </div>
        <div className=" shadow-sm shadow-slate-300 p-6 text-center rounded-2xl">
          <h3 className="text-[#F29F05]  text-5xl font-bold">20 +</h3>
          <p className="lg:text-3xl text-xl pt-3">Best Restaurants</p>
        </div>
        <div className=" shadow-sm shadow-slate-300 p-6 text-center rounded-2xl">
          <h3 className="text-[#F29F05]  text-5xl font-bold">5k +</h3>
          <p className="lg:text-3xl text-xl pt-3">Food Delivered</p>
        </div>
      </div>
    </div>
  );
};

export default AtAGlance;
