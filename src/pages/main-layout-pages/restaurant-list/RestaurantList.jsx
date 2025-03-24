import { IoMdStarOutline } from "react-icons/io";
import restaurantOne from '../../../assets/restaurant/restaurant1.jpg'
import restaurantTwo from '../../../assets/restaurant/restaurant2.jpg'
import restaurantThree from '../../../assets/restaurant/restaurant3.jpg'
import restaurantFour from '../../../assets/restaurant/restaurant4.jpg'
import restaurantFive from '../../../assets/restaurant/restaurant5.jpg'
import restaurantSix from '../../../assets/restaurant/restaurant6.jpg'
import restaurantSeven from '../../../assets/restaurant/restaurant7.jpg'
import restaurantEight from '../../../assets/restaurant/restaurant8.jpg'

const RestaurantList = () => {
    return (
        <div className='lg:py-12 py-6'>
            <h2 className="lg:text-3xl text-2xl font-bold text-center pb-8">Find best restaurant in Dhaka </h2>
            <div className='grid lg:grid-cols-4 md:grid-cols-2 gird-cols-1 gap-6'>
                <div className="rounded-md overflow-hidden border border-amber-100 bg-amber-50">
                    <div className="restaurantImg">
                        <img src={restaurantOne} alt="" />
                    </div>
                    <div className="flex justify-between px-3 py-1">
                        <div>
                            <h3 className="text-xl font-bold text-slate-800">Pizza House</h3>
                            <p className="text-lg text-slate-600">Pizza</p>
                        </div>
                        <div>
                            <p className="flex gap-1 items-center text-slate-700"><IoMdStarOutline className="text-yellow-500 text-xl" /> 4.5</p>
                        </div>
                    </div>
                </div>
                <div className="rounded-md overflow-hidden border border-amber-100 bg-amber-50">
                    <div className="restaurantImg">
                        <img src={restaurantTwo} alt="" />
                    </div>
                    <div className="flex justify-between px-3 py-1">
                        <div>
                            <h3 className="text-xl font-bold text-slate-800">Burger Corner</h3>
                            <p className="text-lg text-slate-600">Burger, </p>
                        </div>
                        <div>
                            <p className="flex gap-1 items-center text-slate-700"><IoMdStarOutline className="text-yellow-500 text-xl" /> 4.5</p>
                        </div>
                    </div>
                </div>
                <div className="rounded-md overflow-hidden border border-amber-100 bg-amber-50">
                    <div className="restaurantImg">
                        <img src={restaurantThree} alt="" />
                    </div>
                    <div className="flex justify-between px-3 py-1">
                        <div>
                            <h3 className="text-xl font-bold text-slate-800">Haji Birayany</h3>
                            <p className="text-lg text-slate-600">Birayani, Teheri</p>
                        </div>
                        <div>
                            <p className="flex gap-1 items-center text-slate-700"><IoMdStarOutline className="text-yellow-500 text-xl" /> 4.5</p>
                        </div>
                    </div>
                </div>
                <div className="rounded-md overflow-hidden border border-amber-100 bg-amber-50">
                    <div className="restaurantImg">
                        <img src={restaurantFour} alt="" />
                    </div>
                    <div className="flex justify-between px-3 py-1">
                        <div>
                            <h3 className="text-xl font-bold text-slate-800">Mohammoadiya Hotel</h3>
                            <p className="text-lg text-slate-600">Chiken, Roast</p>
                        </div>
                        <div>
                            <p className="flex gap-1 items-center text-slate-700"><IoMdStarOutline className="text-yellow-500 text-xl" /> 4.5</p>
                        </div>
                    </div>
                </div>
                <div className="rounded-md overflow-hidden border border-amber-100 bg-amber-50">
                    <div className="restaurantImg">
                        <img src={restaurantFive} alt="" />
                    </div>
                    <div className="flex justify-between px-3 py-1">
                        <div>
                            <h3 className="text-xl font-bold text-slate-800">Pizza House</h3>
                            <p className="text-lg text-slate-600">Pizza</p>
                        </div>
                        <div>
                            <p className="flex gap-1 items-center text-slate-700"><IoMdStarOutline className="text-yellow-500 text-xl" /> 4.5</p>
                        </div>
                    </div>
                </div>
                <div className="rounded-md overflow-hidden border border-amber-100 bg-amber-50">
                    <div className="restaurantImg">
                        <img src={restaurantSix} alt="" />
                    </div>
                    <div className="flex justify-between px-3 py-1">
                        <div>
                            <h3 className="text-xl font-bold text-slate-800">Burger Corner</h3>
                            <p className="text-lg text-slate-600">Burger, </p>
                        </div>
                        <div>
                            <p className="flex gap-1 items-center text-slate-700"><IoMdStarOutline className="text-yellow-500 text-xl" /> 4.5</p>
                        </div>
                    </div>
                </div>
                <div className="rounded-md overflow-hidden border border-amber-100 bg-amber-50">
                    <div className="restaurantImg">
                        <img src={restaurantSeven} alt="" />
                    </div>
                    <div className="flex justify-between px-3 py-1">
                        <div>
                            <h3 className="text-xl font-bold text-slate-800">Haji Birayany</h3>
                            <p className="text-lg text-slate-600">Birayani, Teheri</p>
                        </div>
                        <div>
                            <p className="flex gap-1 items-center text-slate-700"><IoMdStarOutline className="text-yellow-500 text-xl" /> 4.5</p>
                        </div>
                    </div>
                </div>
                <div className="rounded-md overflow-hidden border border-amber-100 bg-amber-50">
                    <div className="restaurantImg">
                        <img src={restaurantEight} alt="" />
                    </div>
                    <div className="flex justify-between px-3 py-1">
                        <div>
                            <h3 className="text-xl font-bold text-slate-800">Mohammoadiya Hotel</h3>
                            <p className="text-lg text-slate-600">Chiken, Roast</p>
                        </div>
                        <div>
                            <p className="flex gap-1 items-center text-slate-700"><IoMdStarOutline className="text-yellow-500 text-xl" /> 4.5</p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default RestaurantList;