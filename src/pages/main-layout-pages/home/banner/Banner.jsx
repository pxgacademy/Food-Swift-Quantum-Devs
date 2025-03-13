import bannerImg from '../../../../assets/banner/banner.png'

const Banner = () => {
    return (
        <div className='px-24'>
            <div className='grid grid-cols-2 gap-24 content-between'>
                <div className='py-48'>
                    <h2 className='lg:text-6xl'>The Best <br /> Food Swift <br /> Service in your home</h2>
                    <p className='lg:text-xl text-md pt-4'>Your order from Food Swift has been successfully delivered to your address. We hope you enjoy your meal! If you have any feedback, please let us know.</p>
                </div>
                <div>
                    <img src={bannerImg} alt="" className='w-full' />
                </div>
            </div>
        </div>
    );
};

export default Banner;