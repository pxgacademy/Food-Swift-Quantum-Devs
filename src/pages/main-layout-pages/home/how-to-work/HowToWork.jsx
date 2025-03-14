import workOne from '../../../../assets/work/work-1.png'

const HowToWork = () => {
    return (
        <div className='lg:px-24 md:px-12 px-6 lg:py-12 py-6'>
             <h2 className="lg:text-3xl text-2xl font-bold text-center pb-8">How To Work</h2>
             <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-24'>
                <div>
                    <img src={workOne} alt="" />
                    <h2 className='text-slate-800 dark:text-white text-2xl font-bold my-4'><span className='text-slate-300 text-4xl'>01 </span>Select Restaurant</h2>
                    <p className='text-xl text-justify'>Non enim praesent elementum facilisis leo vel fringilla. Lectus proin nibh nisl condimentum id. Quis varius quam quisque id diam vel.</p>
                </div>
                <div>
                    <img src={workOne} alt="" />
                    <h2 className='text-slate-800 dark:text-white text-2xl font-bold my-4'><span className='text-slate-300 text-4xl'>02 </span>Select menu</h2>
                    <p className='text-xl text-justify'>Eu mi bibendum neque egestas congue quisque. Nulla facilisi morbi tempus iaculis urna id volutpat lacus. Odio ut sem nulla pharetra diam sit amet.</p>
                </div>
                <div>
                    <img src={workOne} alt="" />
                    <h2 className='text-slate-800 dark:text-white text-2xl font-bold my-4'><span className='text-slate-300 text-4xl'>03 </span>Wait for delivery</h2>
                    <p className='text-xl text-justify'>Nunc lobortis mattis aliquam faucibus. Nibh ipsum consequat nisl vel pretium lectus quam id leo. A scelerisque purus semper eget. Tincidunt arcu non.</p>
                </div>
                
             </div>
        </div>
    );
};

export default HowToWork;