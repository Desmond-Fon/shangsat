import rice from '../../assets/ricemill.png'
import housing from '../../assets/housing.png'
import solar from '../../assets/waterheater.png'
import water from '../../assets/tablewater.png'
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
import { Link } from 'react-router-dom'

const Landing = () => {
    return (<div>
        <div className="px-[80px] pt-[80px] py-[100px]">
            <h1 className='font-anton text-darkText text-[72px] leading-[80px] text-center'>Welcome to Shangsat Nigeria</h1>
            <p className='text-dakrText font-poppins text-[18px] p-[32px] text-center'> Sit elit feugiat turpis sed integer integer accumsan turpis. Sed suspendisse nec lorem mauris. <br /> Pharetra, eu imperdiet ipsum ultrices amet, dui sit suspendisse.</p>
        </div>

        <div className="p-[80px]">
            <h1 className='font-anton text-darkText text-[50px] leading-[60px] text-center mb-[70px]'>Our Expertise</h1>
            <div className='flex items-center justify-between gap-[64px]'>
                <div className='flex flex-col items-center justify-center gap-[16px]'>
                    <img src={rice} alt="" />
                    <h1 className='text-darkText text-[20px] font-anton'>Rice Milling</h1>
                    <p className='font-poppins text-center text-darkText'>Pellentesque quis tincidunt sit sed. Tortor massa sed habitant.</p>
                </div>
                <div className='flex flex-col items-center justify-center gap-[16px]'>
                    <img src={housing} alt="" />
                    <h1 className='text-darkText text-[20px] font-anton'>Housing</h1>
                    <p className='font-poppins text-center text-darkText'>Eget sed nunc, amet, nibh nulla. Morbi sed risus ullamcorper diam.</p>
                </div>
                <div className='flex flex-col items-center justify-center gap-[16px]'>
                    <img src={solar} alt="" />
                    <h1 className='text-darkText text-[20px] font-anton'>Solar Water Heater</h1>
                    <p className='font-poppins text-center text-darkText'>Euismod sed nibh nulla ut elementum.</p>
                </div>
                <div className='flex flex-col items-center justify-center gap-[16px]'>
                    <img src={water} alt="" />
                    <h1 className='text-darkText text-[20px] font-anton'>Table Water Production</h1>
                    <p className='font-poppins text-center text-darkText'>Quam sed neque vitae viverra purus venenatis ac.</p>
                </div>
            </div>
        </div>

        <div className='flex flex-col justify-between items-center w-[100%] gap-[8px]'>
            <div className='flex justify-between items-center w-[100%] gap-[8px]'>
                <div className='w-[50%]'>
                    <img src={women} alt="" />
                </div>
                <div className='w-[50%] p-[60px] bg-primary'>
                    <h2 className='font-roboto text-org font-[700] text-[20px] pb-[16px]'>SERVICES</h2>
                    <h1 className='font-anton text-white text-[50px] leading-[60px]'>Browse through our amazing services</h1>
                    <p className='text-white  font-poppins text-[18px] py-[32px]'>Scelerisque auctor dolor diam tortor, fames faucibus non interdum nunc. Ultrices nibh sapien elit gravida ac, rutrum molestie adipiscing lacinia.</p>
                    <div>
                        <Link to={'/services'}>
                            <button className='bg-secondary text-white px-[24px] font-[500] rounded-[8px] border-secondary border-[2px] py-[8px] font-poppins shad'>View More</button>
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
                <div className='absolute bottom-0 right-[480px]'>
                    <img src={img6} alt=""  className='w-[70%]'/>
                </div>
            <div className='w-[40%]'>
                <h2 className='font-roboto text-footerLink font-[700] text-[20px] pb-[16px]'>PHOTO GALLERY</h2>
                <h1 className='font-anton text-darkText text-[50px] leading-[60px]'>Explore the world of Shangsat</h1>
                <p className='text-darkText font-poppins text-[18px] py-[32px]'>Scelerisque auctor dolor diam tortor, fames faucibus non interdum nunc. Ultrices nibh sapien elit gravida ac, rutrum molestie adipiscing lacinia.</p>
                <div>
                    <Link to={'/gallery'}>
                        <button className='bg-primary text-white px-[24px] font-[500] rounded-[8px] border-primary border-[2px] py-[8px] font-poppins'>View Gallery</button>
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
                        <img src={img4} alt="" className=' ml-[-22px] w-full' />
                    </div>
                    <div className='mt-[-28px] flex gap-[8px]'>
                        <img src={img5} alt="" className='w-[30%]'/>
                        <img src={img7} alt="" className='w-[70%]'/>
                    </div>
                </div>
            </div>
        </div>

    </div>);
}

export default Landing;