import cityOne from '../../../../assets/city/dhaka.webp'
import cityTwo from '../../../../assets/city/chittagong.webp'
import cityThree from '../../../../assets/city/sylhet.webp'
import cityFour from '../../../../assets/city/rajshahi.webp'
const City = () => {
    return (
        <div className='lg:py-12 py-6'>
                    <h2 className="lg:text-3xl text-2xl font-bold text-center pb-8">Find your city Resturant</h2>
                    <div className='grid lg:grid-cols-4 md:grid-cols-2 gird-cols-1 gap-6'>
                        <div className="rounded-md overflow-hidden">
                            <div className="restaurantImg relative">
                                <img src={cityOne} alt="" />
                                <h3 className='absolute top-2 right-2 text-black bg-amber-200 px-4 py-2 rounded-lg font-bold text-lg lg:text-2xl'>Dhaka</h3>
                            </div>
                        </div>
                        <div className="rounded-md overflow-hidden">
                            <div className="restaurantImg relative">
                                <img src={cityTwo} alt="" />
                                <h3 className='absolute top-2 right-2 text-black bg-amber-200 px-4 py-2 rounded-lg font-bold text-lg lg:text-2xl'>Chittagaon</h3>
                            </div>
                        </div>
                        <div className="rounded-md overflow-hidden">
                            <div className="restaurantImg relative">
                                <img src={cityThree} alt="" />
                                <h3 className='absolute top-2 right-2 text-black bg-amber-200 px-4 py-2 rounded-lg font-bold text-lg lg:text-2xl'>Sylhet</h3>
                            </div>
                        </div>
                        <div className="rounded-md overflow-hidden">
                            <div className="restaurantImg relative">
                                <img src={cityFour} alt="" />
                                <h3 className='absolute top-2 right-2 text-black bg-amber-200 px-4 py-2 rounded-lg font-bold text-lg lg:text-2xl'>Dhaka</h3>
                            </div>
                        </div>
        
                    </div>
                </div>
    );
};

export default City;