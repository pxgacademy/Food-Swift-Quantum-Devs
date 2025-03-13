import subscribe from "../../../../assets/subscribe.png";

const Subscribe = () => {
    return (
        <div className="px-24 py-24">
            <div className="grid grid-cols-2 gap-24">
                <div>
                     <img src={subscribe} alt="" />
                </div>
                <div className="py-6">
                    <h3 className="text-6xl">Get the menu of your favorite restaurants every day</h3>
                    <form className="mt-6">
                       <input type="text" placeholder="Enter email address" className="text-lg text-slate-500 shadow-sm shadow-slate-300 rounded-md px-3 py-3 mr-6" />
                       <button className="text-lg px-6 py-3 bg-[#F29F05] text-white rounded-lg">SUBSCRIBE</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Subscribe;