import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import { Link } from 'react-router';

const Banner = () => {
    return (
        <div>
            <Carousel
            autoPlay={false}
            infiniteLoop={true}
            interval={2500}
            stopOnHover={false}
            >
                <div className='relative'>
                    {/* <img src={bannerImg1} /> */}
                    <img src="https://html.dynamiclayers.net/dl/charitify/img/slider-3.jpg" alt="" />
                    <div className='absolute  bottom-0 lg:bottom-[300px] ml-0 lg:left-[100px] lg:w-[600px] flex flex-col gap-2 ms-20 text-left'>
                    <h3 className='text-lg md:text-5xl text-white font-bold'>Empowering Smart Microloans</h3>
                    <p className='text-xl text-white my-5'>Track requests, approvals, and repayments with complete clarity and real-time insights.</p>
                        <Link to="/" className='btn bg-primary rounded-lg md:text-lg'>Apply For Loan</Link>
                    </div>
                </div>
                <div className='relative' >
                    {/* <img src={bannerImg2} /> */}
                    <img src="https://html.dynamiclayers.net/dl/charitify/img/slider-2.jpg" alt="" />
                    <div className='absolute bottom-0 lg:bottom-[300px] ml-0 lg:left-[100px] lg:w-[600px] flex flex-col gap-2 ms-20 text-left'>
                    <h3 className='text-lg md:text-5xl text-white font-bold'>Your Microloan Workflow, Simplified</h3>
                    <p className='text-xl text-white my-5'>Manage loan applications, verify borrowers, and streamline approvals—all in one place..</p>
                        <Link className='btn bg-primary rounded-lg md:text-lg'>Apply For Loan</Link>
                    </div>
                </div>
                <div className='relative'>
                    {/* <img src={bannerImg3} /> */}
                    <img src="https://html.dynamiclayers.net/dl/charitify/img/slider-1.jpg" alt="" />

                     <div className='absolute  bottom-0 lg:bottom-[300px] ml-0 lg:left-[100px] lg:w-[600px] flex flex-col gap-2 ms-20 text-left'>
                    <h3 className='text-lg md:text-5xl text-white font-bold'>Fast, Transparent & Reliable Microloan Management</h3>
                    <p className='text-xl text-white my-5'>A modern system to request, monitor, and approve microloans with zero manual hassle.</p>
                        <Link className='btn bg-primary rounded-lg md:text-lg'>Apply For Loan</Link>
                    </div>
                </div>
            </Carousel>
        </div>
    );
};

export default Banner;