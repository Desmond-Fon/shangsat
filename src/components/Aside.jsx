import desktop from '../assets/desktop.png'
import pointer from '../assets/cursor-pointer.png'
import { Link } from 'react-router-dom'

const Aside = () => {
    return (
        <div className='flex justify-between items-center flex-col gap-[80px] lg:gap-[190px] lg:p-[80px] pt-[48px] p-[16px] pb-[48px]'>
            <div className='flex justify-between items-center w-[100%] gap-10 flex-col lg:flex-row'>
                <div className='w-[100%] h-[100%] lg:w-[50%] flex justify-center items-center lg:block relative'>
                    <img src={desktop} alt="" className='w-[90%] md:w-[70%] lg:w-full h-[100%] object-cover' />
                    <div className='absolute top-4 left-[130px] md:left-[300px] md:top-7 lg:top-7 lg:left-[185px]'>
                        <img src={pointer} alt="" />
                    </div>
                </div>
                <div className='w-[100%] lg:w-[50%] flex lg:justify-between justify-center items-center lg:items-start flex-col gap-3'>
                    <h2 className='font-roboto text-footerLink font-[700] text-[20px]'>JUST A LINK AWAY</h2>
                    <h1 className='font-anton lg:text-left text-center text-darkText text-[32px] lg:text-[50px] leading-[32px] lg:leading-[60px] lg:mt-0 lg:mb-0 mt-[16px] mb-[32px]'>You&apos;re never too far to reach us</h1>
                    <p className='text-darkText lg:text-left text-center font-poppins text-[16px] lg:text-[18px]'>Elevate your lifestyle with Shangsat. We&apos;re more than a brand; we&apos;re your partner in a journey towards a brighter, more sustainable future. Join us today, and experience the extraordinary!</p>
                    <div>
                        <Link to={'/contact'} onClick={() => {
                            window.scroll(0, 0);
                        }}>
                            <button className='bg-secondary text-[22px] text-white px-[28px] font-[500] rounded-[8px] border-secondary border-[2px] py-[8px] font-poppins'>Contact Us</button>
                        </Link>
                    </div>
                </div>
            </div>

            <div className='flex justify-center items-center flex-col' id="community">
                <h1 className='font-anton text-darkText text-[32px] lg:text-[50px] text-center mb-[30px]'>Stay Informed with Our Newsletter</h1>
                <p className='text-darkText font-poppins text-[18px] mb-[30px] text-center lg:text-left'>Stay up to date with our latest products and services by submitting your email address.</p>
                <div>
                    <div className='relative'>
                        <input type="email" placeholder='Enter email address' className='w-[300px] lg:w-[450px] h-[52px] border-[2px] border-primary rounded-[8px] px-4 font-poppins text-[14px] outline-primary' />
                        <button className='bg-primary absolute right-1 top-[4px] text-white px-[24px] font-[500] rounded-[8px] border-primary border-[2px] py-[8px] font-poppins'>Submit</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Aside;