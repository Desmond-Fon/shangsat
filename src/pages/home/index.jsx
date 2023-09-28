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
import { Link } from 'react-router-dom'
import { useState, useRef } from 'react'
import Expertise from '../../components/Expertise'



const Landing = () => {
    const [playing, setPlaying] = useState(false);

    const iframeRef = useRef();

    const handlePlay = () => {
        // iframeRef.current.playVideo();
        setPlaying(!playing);
        iframeRef.current.playVideo()
    };

    return (<div>
        <div className="px-[80px] pt-[80px] py-[70px]">
            <h1 className='font-anton text-darkText text-[72px] leading-[80px] text-center'>Welcome to Shangsat Nigeria</h1>
            <p className='text-darkText font-poppins text-[18px] p-[32px] text-center'> Sit elit feugiat turpis sed integer integer accumsan turpis. Sed suspendisse nec lorem mauris. <br /> Pharetra, eu imperdiet ipsum ultrices amet, dui sit suspendisse.</p>
        </div>

        <div className='homeBg px-[170px] pb-[40px] pt-[70px]'>
            <div className='h-[630px] w-[100%] border-primary border-[4px] rounded-[20px] bg-white'>
                <img src={topBar} alt="" className='h-[6%] w-full' />
                <div className='relative h-[100%]'>
                    <iframe width="100%" height="94%" className='rounded-b-[16px]' src="https://www.youtube.com/embed/rYx272cOHnk" aria-controls='false' title="YouTube video player" 
                        allowfullscreen ref={iframeRef} />
                    <div className={`${playing ? 'hidden' : 'absolute'} top-[34%] left-[41%] cursor-pointer`} onClick={handlePlay}>
                        <img src={playCircle} alt="" />
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

        <div className='flex flex-col justify-between items-center w-[100%] gap-[8px]'>
            <div className='flex justify-between items-center w-[100%] gap-[8px] h-[400px]'>
                <div className='w-[50%] h-[100%]'>
                    <img src={women} alt="" className='h-[100%] w-[100%] object-cover' />
                </div>
                <div className='w-[50%] h-[100%] px-[60px] flex justify-between flex-col bg-primary py-[30px]'>
                    <h2 className='font-roboto text-org font-[700] text-[20px] '>SERVICES</h2>
                    <h1 className='font-anton text-white text-[50px] leading-[60px]'>Browse through our amazing services</h1>
                    <p className='text-white  font-poppins text-[18px]'>Scelerisque auctor dolor diam tortor, fames faucibus non interdum nunc. Ultrices nibh sapien elit gravida ac, rutrum molestie adipiscing lacinia.</p>
                    <div>
                        <Link to={'/services'}>
                            <button className='bg-secondary text-white text-[22px] px-[28px] font-[500] rounded-[8px] border-secondary border-[2px] py-[8px] font-poppins shad'>View More</button>
                        </Link>
                    </div>
                </div>
            </div>

            <div className='flex justify-between items-center gap-[8px] w-[100%]'>
                <img src={service1} alt="" />
                <img src={service2} alt="" />
                <img src={service3} alt="" />
            </div>
        </div>

        <div className="p-[80px]">
            <h1 className='font-anton text-darkText text-[50px] leading-[60px] text-center'>Here&apos;s Our Story</h1>
            <p className='text-darkText text-center font-poppins text-[18px] pb-[80px] pt-[40px]'>Aliquet sed nulla tincidunt pulvinar sed fames sit facilisis dictumst. Ornare faucibus quis velit fringilla aliquam ultricies. Malesuada ut aliquam at ac est nisi, interdum etiam dignissim. Sed ut vestibulum eget purus ornare. Risus elit et fringilla habitant ut facilisi.</p>

            <div >
                <div className='relative'>
                    <div className='w-[55%]'>
                        <img src={man} alt="" />
                    </div>
                    <div className='px-[48px] pt-[48px] pb-[24px] rounded-[5px] w-[52%] bg-white dow absolute top-[60px] right-0' >
                        <p className='font-poppins'>
                            Aliquet sed nulla tincidunt pulvinar sed fames sit facilisis dictumst. Ornare faucibus quis velit fringilla aliquam ultricies. Malesuada ut aliquam at ac est nisi, interdum etiam dignissim. Sed ut vestibulum eget purus ornare. Risus elit et fringilla habitant ut facilisi.
                        </p>
                        <Link to={'/about'}>
                            <div className='flex justify-start items-center gap-[16px] mt-[36px]'>
                                <p className='font-roboto font-[500] text-org '>Read Full Story</p>
                                <img src={arrow} alt="" />
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        </div>

        <div className='px-[80px] pt-[80px] bg-sectionBg w-[100%] flex justify-between items-start gap-[20px] relative'>
            <div className='absolute bottom-0 lg:right-[480px] xl:right-[575px]'>
                <img src={img6} alt="" className='w-[70%]' />
            </div>
            <div className='w-[40%]'>
                <h2 className='font-roboto text-footerLink font-[700] text-[20px] pb-[16px]'>PHOTO GALLERY</h2>
                <h1 className='font-anton text-darkText text-[50px] leading-[60px]'>Explore the world of Shangsat</h1>
                <p className='text-darkText font-poppins text-[18px] py-[32px]'>Scelerisque auctor dolor diam tortor, fames faucibus non interdum nunc. Ultrices nibh sapien elit gravida ac, rutrum molestie adipiscing lacinia.</p>
                <div>
                    <Link to={'/gallery'}>
                        <button className='bg-primary text-white text-[22px] px-[28px] font-[500] rounded-[8px] border-primary border-[2px] py-[8px] font-poppins'>View Gallery</button>
                    </Link>
                </div>
            </div>
            <div className='w-[60%] flex justify-center gap-[15px] items-center h-[100%]'>
                <div>
                    <img src={img3} alt="" />
                </div>
                <div className='w-full'>
                    <div className='flex justify-start items-end gap-[10px] w-full h-full'>
                        <img src={img1} alt="" className='w-[23%] h-[80%]' />
                        <img src={img2} alt="" className='w-[75%] h-[100%] object-contain' />
                    </div>
                    <div className=' w-full'>
                        <img src={img4} alt="" className=' ml-[-22px] w-full h-[100%]object-cover' />
                    </div>
                    <div className='mt-[-28px] flex gap-[8px]'>
                        <img src={img5} alt="" className='w-[30%]' />
                        <img src={img7} alt="" className='w-[70%]' />
                    </div>
                </div>
            </div>
        </div>

    </div>);
}

export default Landing;