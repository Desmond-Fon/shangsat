import women from '../../assets/women.png'
import man from '../../assets/officel.jpeg'
import arrow from '../../assets/arrow-right.png'
import service2 from '../../assets/housingService.png'
import topBar from '../../assets/Top Bar.png'
import playCircle from '../../assets/playCircle.png'
import play from '../../assets/play.png'
import solar1 from '../../assets/solar1p.jpeg'
import service1 from '../../assets/solar2p.jpeg'
import rice1 from '../../assets/rice1l.jpeg'
import rice2 from '../../assets/rice2l.jpeg'
import rice3 from '../../assets/rice3p.jpeg'
import room1 from '../../assets/room1p.jpeg'
import room3 from '../../assets/room3p.jpeg'
import room4 from '../../assets/room4p.jpeg'
import waterr from '../../assets/waterr.jpeg'
import img from '../../assets/storyPic.png'
import slide1 from '../../assets/slide1.svg'
import slide2 from '../../assets/slide2.svg'
import slide3 from '../../assets/slide3.svg'
import slide4 from '../../assets/slide4.svg'

import { Link } from 'react-router-dom'
import { useState, useRef } from 'react'
import Expertise from '../../components/Expertise'
import Medal from '../../components/Medal'
import Team from '../../components/Team'

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/virtual";

import "swiper/css/scrollbar";
import "swiper/css/autoplay";

// import required modules
import { Navigation, Pagination, Scrollbar, A11y, Autoplay, Virtual } from 'swiper/modules';

const Landing = () => {
    const [playing, setPlaying] = useState(false);

    const iframeRef = useRef();

    const handlePlay = () => {
        // iframeRef.current.playVideo();
        setPlaying(!playing);
        iframeRef.current.playVideo()
    };

    return (<div>
        <div className="flex justify-center items-center">
            <div className="w-[100%] flex justify-center items-center h-[700px] lg:h-[650px]">
                <Swiper
                    spaceBetween={0}
                    slidesPerView={1}
                    // virtual
                    modules={[
                        Navigation,
                        Pagination,
                        Scrollbar,
                        A11y,
                        Virtual,
                        Autoplay,
                    ]}
                    // navigation
                    autoplay={{
                        delay: 5000,
                        disableOnInteraction: false,
                    }}
                pagination={{ clickable: true }}
                // scrollbar={{ draggable: true }}
                >
                    <SwiperSlide>
                        <div className="flex greenBg justify-between items-center h-[700px] lg:h-[640px] gap-10 w-full px-[16px] flex-col lg:flex-row lg:px-[70px] pt-[96px] lg:pt-0">
                            <div className='w-full lg:w-1/2 text-left text-white'>
                                <h1 className='font-anton text-[40px] lg:text-[72px] leading-[44px] lg:leading-[80px]'>Welcome to Shangsat Nigeria</h1>
                                <p className='font-poppins text-[16px] lg:text-[18px] pt-[32px] pb-0  lg:pb-0'> Welcome to Shangsat Nigeria, where quality, sustainability, and comfort come together in perfect harmony. We&apos;re a commitment to enhancing your everyday life.</p>
                            </div>
                            <div className='w-full lg:w-1/2 h-full flex justify-center lg:justify-end lg:items-end'>
                                <img src={slide1} alt="" className='w-[100%] mb-[-20px]' />
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="flex greenBg justify-between items-center h-[700px] lg:h-[640px] gap-10 w-full px-[16px] flex-col lg:flex-row lg:px-[70px] pt-[96px] lg:pt-0">
                            <div className='w-full lg:w-1/2 text-left text-white'>
                                <h1 className='font-anton text-[40px] lg:text-[72px] leading-[44px] lg:leading-[80px]' >Premium Rice, Refined Presentation</h1>
                                <p className='font-poppins text-[16px] lg:text-[18px] pt-[32px] pb-0  lg:pb-0'> Indulge in culinary excellence with our premium rice selection. Each grain is meticulously chosen to elevate your dining experience, bringing exquisite flavors to your table.</p>
                            </div>
                            <div className='w-full lg:w-1/2 h-full flex justify-center lg:justify-end lg:items-end'>
                                <img src={slide2} alt="" className='w-[100%]' />
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="flex orangeBg justify-between items-center h-[700px] lg:h-[640px] gap-10 w-full px-[16px] flex-col lg:flex-row lg:px-[70px] pt-[96px] lg:pt-0">
                            <div className='w-full lg:w-1/2 text-left text-white'>
                                <h1 className='font-anton text-[40px] lg:text-[72px] leading-[44px] lg:leading-[80px]' >Your Dream Home Awaits</h1>
                                <p className='font-poppins text-[16px] lg:text-[18px] pt-[32px] pb-0  lg:pb-0'> Step into a world of elegance and comfort. Explore our premium housing solutions where each detail is thoughtfully designed to ensure your dream home awaits you.</p>
                            </div>
                            <div className='w-full lg:w-1/2 h-full flex justify-center lg:justify-end  lg:items-end'>
                                <img src={slide3} alt="" className='w-[100%] mb-[-25px]' />
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="flex orangeBg justify-between items-center h-[700px] lg:h-[640px] gap-10 w-full px-[16px] flex-col lg:flex-row lg:px-[70px] pt-[96px] lg:pt-0">
                            <div className='w-full lg:w-1/2 text-left text-white'>
                                <h1 className='font-anton text-[40px] lg:text-[72px] leading-[44px] lg:leading-[80px]' >Sustainable Luxury, Effortlessly</h1>
                                <p className='font-poppins text-[16px] lg:text-[18px] pt-[32px] pb-0  lg:pb-0'>Embark on a journey of sustainable luxury with our state-of-the-art solar water heaters, seamlessly designed to effortlessly elevate your living while contributing to a greener tomorrow.</p>
                            </div>
                            <div className='w-full lg:w-1/2 h-full flex justify-center lg:justify-center  lg:items-center'>
                                <img src={slide4} alt="" className='w-[100%] mb-[-20px]' />
                            </div>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
        </div>

        <div className='homeBg px-[32px] md:px-[48px] lg:px-[170px] pb-[40px] pt-[24px] lg:pt-[70px]'>
            <div className='h-[240px] md:h-[430px] lg:h-[630px] w-[100%] border-primary border-[4px] rounded-[20px] bg-white'>
                <img src={topBar} alt="" className='h-[6%] w-full' />
                <div className='relative h-[100%]'>
                    {playing ? <iframe width="100%" height="94%" className='rounded-b-[16px]' src="https://www.youtube.com/embed/rYx272cOHnk" aria-controls='false' title="YouTube video player"
                        allowfullscreen ref={iframeRef} autoPlay="true" /> :
                        <img src={img} alt="" width="100%" height="100%" className='rounded-b-[16px] object-cover h-[94%]' />}
                    <div className={`${playing ? 'hidden' : 'absolute'} top-[34%] left-[41%] md:left-[45%] lg:left-[41%] cursor-pointer`} onClick={handlePlay}>
                        <img src={playCircle} alt="" className='w-[50px] md:w-[70px] lg:w-[100%]' />
                    </div>
                </div>
            </div>

            <div className='flex justify-center items-center mt-4'>
                <button className='bg-secondary font-poppins text-white px-[24px] font-[500] rounded-[8px] border-secondary border-[2px] py-[8px] flex justify-center items-center' onClick={handlePlay}>
                    <img src={play} alt="" />
                    <p>Watch Video</p>
                </button>
            </div>
        </div>

        <Expertise text={'Our Expertise'} />

        <div className='flex flex-col justify-between lg:h-full items-center w-[100%] gap-[8px]'>
            <div className='flex justify-between items-center w-[100%] gap-[8px] lg:h-[400px] flex-col lg:flex-row'>
                <div className='w-[100%] lg:w-[50%] h-[100%]'>
                    <img src={women} alt="" className='h-[100%] w-[100%] object-cover' />
                </div>
                <div className='w-[100%] lg:w-[50%] lg:h-[100%] px-[16px] lg:px-[60px] flex justify-between items-center lg:items-start flex-col bg-primary py-[48px] lg:py-[30px]'>
                    <h2 className='font-roboto text-org font-[700] text-[20px] text-center lg:text-left'>SERVICES</h2>
                    <h1 className='font-anton text-white text-[32px] lg:text-[50px] leading-[35px] lg:pt-0 pt-[16px] lg:leading-[60px] text-center lg:text-left'>Browse through our amazing services</h1>
                    <p className='text-white font-poppins text-[16px] lg:text-[18px] py-[32px] lg:py-0 text-center lg:text-left'>At Shangsat Nigeria, we take pride in offering a diverse range of premium products and services designed to elevate your lifestyle. Our dedication to excellence shines through in four key pillars:</p>
                    <div>
                        <Link to={'/services'} onClick={() => {
                            window.scroll(0, 0);
                        }}>
                            <button className='bg-secondary text-white text-[22px] px-[28px] font-[500] rounded-[8px] border-secondary border-[2px] py-[8px] font-poppins shad'>View More</button>
                        </Link>
                    </div>
                </div>
            </div>

            <div className='flex justify-between items-center gap-[8px] w-[100%] h-[75px] md:h-[120px] lg:h-[200px]'>
                <img src={service1} alt="" className='w-[33%] h-[100%] object-[cover]' />
                <img src={service2} alt="" className='w-[33%] h-[100%] object-[cover]' />
                <img src={waterr} alt="" className='w-[33%] h-[100%] object-[cover]' />
            </div>
        </div>

        <div className="px-[16px] pt-[48px] lg:p-[80px]">
            <h1 className='font-anton text-darkText text-[32px] lg:text-[50px] lg:leading-[35px] leading-[60px] text-center'>Here&apos;s Our Story</h1>
            <p className='text-darkText text-center font-poppins text-[14px] lg:text-[18px] lg:pb-[80px] pb-[32px]  pt-[28px] lg:pt-[40px]'>We are a brand that celebrates diversity, inclusivity, and the power of community. We believe in bringing people together, bridging gaps, and creating shared experiences through our offerings. We are passionate about quality, integrity and authenticity.</p>

            <div className='mb-[180px] px-0 lg:px-0 md:px-[52px] lg:mb-0' >
                <div className='relative'>
                    <div className='w-[100%] lg:w-[55%] flex justify-center items-center lg:block'>
                        <img src={man} alt="" className='object-[cover] bg-red-400 rounded-[7px]' />
                    </div>
                    <div className='px-[16px] lg:px-[48px] pt-[24px] lg:pt-[44px] pb-[24px] rounded-[5px] w-[90%] lg:w-[52%] bg-white dow absolute top-[145px] md:top-[300px] lg:top-[35px] left-[5%] lg:left-[48%] lg:right-0'>
                        <p className='font-poppins text-[14px] lg:text-[16px]'>
                            Our name comes from Shangsat CEOs paternal grandmother&apos;s name meaning &apos;lovely to talk about&apos; in the Mwaghavul language in Jos, Plateau state (Mangu LGA). With &apos;Shang&apos; meaning &apos;lovely&apos; and &apos;sat&apos; meaning &apos;to talk about&apos;. <span className='hidden lg:inline'>  We are a brand that celebrates diversity, inclusivity, and the power of community.</span>
                        </p>
                        <Link to={'/about'} onClick={() => {
                            window.scroll(0, 0);
                        }}>
                            <div className='flex justify-start items-center gap-[16px] mt-[12px] lg:mt-[36px]'>
                                <p className='font-roboto font-[500] text-org '>Read Full Story</p>
                                <img src={arrow} alt="" />
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        </div>

        <Medal />

        <div className='lg:px-[80px] pt-[80px] bg-sectionBg w-[100%] flex justify-between flex-col lg:flex-row items-start gap-[20px] relative'>
            <div className='lg:w-[40%] px-[16px] lg:px-0 flex justify-center items-center lg:block flex-col'>
                <h2 className='font-roboto text-footerLink font-[700] text-[20px] pb-[16px] text-center lg:text-left'>PHOTO GALLERY</h2>
                <h1 className='font-anton text-darkText text-[32px] lg:text-[50px] leading-[32px] lg:leading-[60px]  text-center lg:text-left'>Explore the world of Shangsat</h1>
                <p className='text-darkText font-poppins text-[18px] py-[32px] text-center lg:text-left'>Let us take you on a visual journey through our world of excellence. Explore our photo gallery, and see for yourself the standards we uphold in every aspect of Shangsat Nigeria. From the verdant rice fields to the gleaming solar panels, the crystal-clear water bottles to the meticulously furnished apartments, we invite you to witness the beauty that is Shangsat.</p>
                <div>
                    <Link to={'/gallery'} onClick={() => {
                        window.scroll(0, 0);
                    }}>
                        <button className='bg-primary text-white text-[22px] px-[28px] font-[500] rounded-[8px] border-primary border-[2px] py-[8px] font-poppins'>View Gallery</button>
                    </Link>
                </div>
            </div>

            <div className='lg:w-[60%] flex justify-center items-center mx-auto px-5 lg:px-0 pb-4'>
                <div className="grid grid-cols-3 md:grid-cols-3 gap-4">
                    <div className="grid gap-5 md:gap-6">
                        <div>
                            <img className="h-auto max-w-full rounded-lg" src={room1} alt="" />
                        </div>
                        <div>
                            <img className="h-auto max-w-full rounded-lg" src={rice1} alt="" />
                        </div>
                        <div>
                            <img className="h-auto max-w-full rounded-lg" src={service1} alt="" />
                        </div>
                    </div>
                    <div className="grid gap-2">
                        <div>
                            <img className="h-auto max-w-full rounded-lg" src={rice2} alt="" />
                        </div>
                        <div>
                            <img className="h-auto max-w-full rounded-lg" src={room3} alt="" />
                        </div>
                        <div>
                            <img className="h-auto max-w-full rounded-lg" src={solar1} alt="" />
                        </div>
                    </div>
                    <div className="grid gap-3">
                        <div>
                            <img className="h-auto max-w-full rounded-lg" src={rice3} alt="" />
                        </div>
                        <div>
                            <img className="h-auto max-w-full rounded-lg" src={room4} alt="" />
                        </div>
                        {/* <div>
                            <img className="h-auto max-w-full rounded-lg" src={rice2} alt="" />
                        </div>  */}
                    </div>

                </div>
            </div>

        </div>

        <Team />

    </div>);
}

export default Landing;