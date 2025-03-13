

const AtAGlance = () => {
    return (
        <div className="px-24 py-12">
            <h2 className="text-5xl text-center pb-8">At a Glance</h2>
            <div className="grid grid-cols-3 gap-6">
                <div className="shadow-sm shadow-sm shadow-slate-300 p-6 text-center rounded-2xl">
                    <h3 className="text-[#F29F05]  text-5xl font-bold">976 +</h3>
                    <p className="text-3xl pt-3">Satisfied Customer</p>
                </div>
                <div className="shadow-sm shadow-sm shadow-slate-300 p-6 text-center rounded-2xl">
                    <h3 className="text-[#F29F05]  text-5xl font-bold">20 +</h3>
                    <p className="text-3xl pt-3">Best Restaurants</p>
                </div>
                <div className="shadow-sm shadow-sm shadow-slate-300 p-6 text-center rounded-2xl">
                    <h3 className="text-[#F29F05]  text-5xl font-bold">5k +</h3>
                    <p className="text-3xl pt-3">Food Delivered</p>
                </div>
            </div>
        </div>
    );
};

export default AtAGlance;