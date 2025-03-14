import bannerImg from '../../../../assets/banner/banner.png'

const Banner = () => {
    return (
        <div className='lg:py-12 py-6'>
            <div className='flex md:flex-nowrap flex-wrap lg:gap-24 gap-12 justify-between items-center content-between'>
                <div className='lg:w-1/2 w-full'>
                    <h2 className='lg:text-6xl md:text-4xl text-3xl'>The Best <br /> Food Swift <br /> Service in your home</h2>
                    <p className='lg:text-xl text-md pt-4'>Your order from Food Swift has been successfully delivered to your address. We hope you enjoy your meal! If you have any feedback, please let us know.</p>
                </div>
                <div className='md:w-1/2 w-full'>
                    <img src={bannerImg} alt="" className='w-full' />
                </div>
            </div>
        </div>
    );
};

export default Banner;