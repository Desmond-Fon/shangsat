import x from '../assets/x.png'
import meta from '../assets/meta.png'
import instagram from '../assets/instagram.png'
import logo from '../assets/shangsatLogo.png'
import { Link } from 'react-router-dom'



const Footer = () => {
    return (<div className="px-[16px] lg:px-[80px] pt-[45px]">
        <div className="flex flex-col lg:flex-row justify-center lg:justify-between items-center lg:items-start gap-[48px] lg:gap-[24px] w-[100%]">
            <div className='flex flex-col item-center justify-center lg:justify-start gap-[24px] w-full lg:w-[50%]'>
                <div className='flex justify-center items-center lg:justify-start'>
                    <img src={logo} alt="" className='w-[40%] lg:w-[20%]' />
                </div>
                <p className='font-poppins text-center lg:text-left text-darkText text-[14px]'>
                    We are helping organizations and individuals, to address all aspects of their procurements and sourcing operations to achieve and meet the standards of the modern world economy, saving more and improving business growth.
                </p>
            </div>

            <div className='w-[40%]'>
                <p className="font-anton text-[16px] lg:text-[18px] text-center lg:text-left text-darkText font-[500] pb-[18px]">Quick Links</p>
                <ul className="text-footerLink flex justify-center items-center lg:justify-between lg:items-start flex-col lg:flex-row gap-[12px]">
                    <Link to='/'>
                        <li className='cursor-pointer'>Home</li>
                    </Link>
                    <Link to='/about'>
                        <li className='cursor-pointer'>About</li>
                    </Link>
                    <Link to='/services'>
                        <li className='cursor-pointer'>Services</li>
                    </Link>
                    <Link to='/gallery'>
                        <li className='cursor-pointer'>Gallery</li>
                    </Link>
                    <Link to='/contact'>
                        <li className='cursor-pointer'>Contact</li>
                    </Link>
                </ul>
            </div>
        </div>

        <div className="w-full bg-footerLink h-[1px] my-[48px]"></div>
        <div className="flex flex-col lg:flex-row justify-between items-center py-[24px] font-poppins text-footerLink gap-5 lg:gap-0 pb-[48px]">
            <p className="text-center lg:text-left">All rights reserved @ ShangsatNigeriaLtd 2023.</p>
            <div className='flex flex-col lg:flex-row items-center justify-between gap-5 lg:gap-[48px]'>
                
                <div className='flex justify-between items-center gap-[16px]'>
                    <img src={meta} alt="" />
                    <img src={instagram} alt="" />
                    <img src={x} alt="" />
                </div>
            </div>
        </div>
    </div>);
}

export default Footer;