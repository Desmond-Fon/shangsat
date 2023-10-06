import women from '../../assets/women.png'
import man from '../../assets/storyPic.png'
import arrow from '../../assets/arrow-right.png'
import img1 from '../../assets/homeG1.png'
import img2 from '../../assets/homeG2.png'
import img3 from '../../assets/homeG3.png'
import img4 from '../../assets/homeG4.png'
import img5 from '../../assets/homeG5.png'
import img6 from '../../assets/homeG6.png'
import img7 from '../../assets/homeG7.png'
import service1 from '../../assets/heaterServices.png'
import service2 from '../../assets/housingService.png'
import service3 from '../../assets/waterServices.png'
import topBar from '../../assets/Top Bar.png'
import playCircle from '../../assets/playCircle.png'
import play from '../../assets/play.png'
import whiteArrow from '../../assets/arrow-right-white.svg'
import { Link } from 'react-router-dom'
import { useState, useRef } from 'react'
import Expertise from '../../components/Expertise'
import Medal from '../../components/Medal'
import Team from '../../components/Team'


const Landing = () => {
    const [playing, setPlaying] = useState(false);

    const iframeRef = useRef();

    const handlePlay = () => {
        // iframeRef.current.playVideo();
        setPlaying(!playing);
        iframeRef.current.playVideo()
    };

    return (<div>
        <div className="px-[16px] pt-[48px] md:px-[24px] lg:px-[80px] lg:pt-[80px] lg:py-[70px]">
            <h1 className='font-anton text-darkText text-[40px] lg:text-[72px] leading-[44px] lg:leading-[80px] text-center'>Welcome to Shangsat Nigeria</h1>
            <p className='text-darkText font-poppins text-[16px] lg:text-[18px] pt-[32px] p-[16px] lg:p-[32px] text-center'> Sit elit feugiat turpis sed integer integer accumsan turpis. Sed suspendisse nec lorem mauris. <br /> Pharetra, eu imperdiet ipsum ultrices amet, dui sit suspendisse.</p>

            <div className='lg:hidden flex justify-center items-center p-[16px]'>
                <button className='bg-secondary text-white px-[24px] font-[500] font-poppins rounded-[8px] border-secondary border-[2px] py-[8px] flex justify-center items-center gap-3'>Join The Community <img src={whiteArrow} alt="" />
                </button>
            </div>
        </div>

        <div className='homeBg px-[32px] md:px-[48px] lg:px-[170px] pb-[40px] pt-[24px] lg:pt-[70px]'>
            <div className='h-[240px] md:h-[430px] lg:h-[630px] w-[100%] border-primary border-[4px] rounded-[20px] bg-white'>
                <img src={topBar} alt="" className='h-[6%] w-full' />
                <div className='relative h-[100%]'>
                    {playing ? <iframe width="100%" height="94%" className='rounded-b-[16px]' src="https://www.youtube.com/embed/rYx272cOHnk" aria-controls='false' title="YouTube video player"
                        allowfullscreen ref={iframeRef} autoPlay="true" /> :
                        <img src={man} alt="" width="100%" height="100%" className='rounded-b-[16px] object-cover h-[94%]' />}
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
                    <p className='text-white font-poppins text-[16px] lg:text-[18px] py-[32px] lg:py-0 text-center lg:text-left'>Scelerisque auctor dolor diam tortor, fames faucibus non interdum nunc. Ultrices nibh sapien elit gravida ac, rutrum molestie adipiscing lacinia.</p>
                    <div>
                        <Link to={'/services'}>
                            <button className='bg-secondary text-white text-[22px] px-[28px] font-[500] rounded-[8px] border-secondary border-[2px] py-[8px] font-poppins shad'>View More</button>
                        </Link>
                    </div>
                </div>
            </div>

            <div className='flex justify-between items-center gap-[8px] w-[100%] h-[65px] md:h-[120px] lg:h-[200px]'>
                <img src={service1} alt="" className='w-[33%] h-[100%] object-[cover]' />
                <img src={service2} alt="" className='w-[33%] h-[100%] object-[cover]' />
                <img src={service3} alt="" className='w-[33%] h-[100%] object-[cover]' />
            </div>
        </div>

        <div className="px-[16px] pt-[48px] lg:p-[80px]">
            <h1 className='font-anton text-darkText text-[32px] lg:text-[50px] lg:leading-[35px] leading-[60px] text-center'>Here&apos;s Our Story</h1>
            <p className='text-darkText text-center font-poppins text-[14px] lg:text-[18px] lg:pb-[80px] pb-[32px]  pt-[28px] lg:pt-[40px]'>Aliquet sed nulla tincidunt pulvinar sed fames sit facilisis dictumst. Ornare faucibus quis velit fringilla aliquam ultricies. Malesuada ut aliquam at ac est nisi, interdum etiam dignissim. Sed ut vestibulum eget purus ornare. Risus elit et fringilla habitant ut facilisi.</p>

            <div className='mb-[180px] px-0 lg:px-0 md:px-[52px] lg:mb-0' >
                <div className='relative'>
                    <div className='w-[100%] lg:w-[55%] flex justify-center items-center lg:block'>
                        <img src={man} alt="" />
                    </div>
                    <div className='px-[16px] lg:px-[48px] pt-[24px] lg:pt-[48px] pb-[24px] rounded-[5px] w-[90%] lg:w-[52%] bg-white dow absolute top-[185px] md:top-[340px] lg:top-[60px] left-[5%] lg:left-[48%] lg:right-0'>
                        <p className='font-poppins text-[14px] lg:text-[16px]'>
                            Aliquet sed nulla tincidunt pulvinar sed fames sit facilisis dictumst. Ornare faucibus quis velit fringilla aliquam ultricies. Malesuada ut aliquam at ac est nisi, interdum etiam dignissim. <span className='hidden lg:inline'> Sed ut vestibulum eget purus ornare. Risus elit et fringilla habitant ut facilisi.</span>
                        </p>
                        <Link to={'/about'}>
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
            {/* <div className='absolute bottom-0 lg:right-[480px] xl:right-[355px]'>
                <img src={img6} alt="" className='w-[50%] hidden lg:block' />
            </div> */}
            <div className='lg:w-[40%] px-[16px] lg:px-0 flex justify-center items-center lg:block flex-col'>
                <h2 className='font-roboto text-footerLink font-[700] text-[20px] pb-[16px] text-center lg:text-left'>PHOTO GALLERY</h2>
                <h1 className='font-anton text-darkText text-[32px] lg:text-[50px] leading-[32px] lg:leading-[60px]  text-center lg:text-left'>Explore the world of Shangsat</h1>
                <p className='text-darkText font-poppins text-[18px] py-[32px] text-center lg:text-left'>Scelerisque auctor dolor diam tortor, fames faucibus non interdum nunc. Ultrices nibh sapien elit gravida ac, rutrum molestie adipiscing lacinia.</p>
                <div>
                    <Link to={'/gallery'}>
                        <button className='bg-primary text-white text-[22px] px-[28px] font-[500] rounded-[8px] border-primary border-[2px] py-[8px] font-poppins'>View Gallery</button>
                    </Link>
                </div>
            </div>
            {/* <div className='lg:w-[60%] flex justify-between lg:justify-center gap-[15px] items-center h-[400px] lg:h-[100%]'>
                <div className='w-[35%]'>
                    <img src={img3} alt="" />
                </div>
                <div className=''>
                    <div className='flex justify-betweenlg:justify-start items-end gap-[10px] w-full h-full'>
                        <img src={img1} alt="" className='w-[30%] lg:w-[23%] lg:h-[80%] object-contain' />
                        <img src={img2} alt="" className='w-[100%] lg:w-[75%] h-[100%] lg:object-contain' />
                    </div>
                    <div className=' w-full'>
                        <img src={img4} alt="" className='ml-[-14px] lg:ml-[-22px] w-full h-[100%] object-cover' />
                    </div>
                    <div className='lg:mt-[-28px] flex gap-[8px]'>
                        <img src={img5} alt="" className='w-[30%]' />
                        <img src={img7} alt="" className='w-[70%]' />
                    </div>
                </div>
            </div> */}

            <div className='lg:w-[60%] flex justify-center items-center mx-auto'>
                <div className="grid grid-cols-3 md:grid-cols-3 gap-4">
                    <div className="grid gap-4">
                        <div>
                            <img className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image.jpg" alt="" />
                        </div>
                        <div>
                            <img className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-1.jpg" alt="" />
                        </div>
                        <div>
                            <img className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-2.jpg" alt="" />
                        </div>
                    </div>
                    <div className="grid gap-4">
                        <div>
                            <img className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-3.jpg" alt="" />
                        </div>
                        <div>
                            <img className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-4.jpg" alt="" />
                        </div>
                        <div>
                            <img className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-5.jpg" alt="" />
                        </div>
                    </div>
                    <div className="grid gap-4">
                        <div>
                            <img className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-6.jpg" alt="" />
                        </div>
                        <div>
                            <img className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-7.jpg" alt="" />
                        </div>
                        <div>
                            <img className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-8.jpg" alt="" />
                        </div>
                    </div>
                    {/* <div class="grid gap-4">
                        <div>
                            <img class="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-9.jpg" alt="">
                        </div>
                        <div>
                            <img class="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-10.jpg" alt="">
                        </div>
                        <div>
                            <img class="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-11.jpg" alt="">
                        </div>
                    </div> */}
                </div>
            </div>

        </div>

        <Team />

    </div>);
}

export default Landing;