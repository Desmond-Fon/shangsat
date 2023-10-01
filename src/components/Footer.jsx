import facebook from '../assets/facebook.svg'
import youtube from '../assets/youtube.svg'
import twitter from '../assets/twitter.svg'
import linkedIn from '../assets/linkedin.svg'
import instagram from '../assets/instagram.svg'

const Footer = () => {
    return (<div className="px-[16px] lg:px-[80px] pt-[45px]">
        <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start gap-10 lg:gap-0">
            <div>
                <p className="font-roboto text-center lg:text-left text-darkText font-[500] pb-[18px]">CATEGORIES</p>
                <ul className="text-footerLink gap-[18px] flex justify-center items-center lg:justify-start lg:items-start flex-col">
                    <li className='cursor-pointer'>User Interface</li>
                    <li className='cursor-pointer'>User Experience</li>
                    <li className='cursor-pointer'>Digital Media</li>
                    <li className='cursor-pointer'>Lifestyle</li>
                    <li className='cursor-pointer'>Animation</li>
                    <li className='cursor-pointer'>Programming</li>
                </ul>
            </div>
            <div>
                <p className="font-roboto text-center lg:text-left text-darkText font-[500] pb-[18px]">PRODUCT</p>
                <ul className="text-footerLink gap-[18px] flex justify-center items-center lg:justify-start lg:items-start flex-col">
                    <li className='cursor-pointer'>Pricing</li>
                    <li className='cursor-pointer'>Overview</li>
                    <li className='cursor-pointer'>Browse</li>
                    <li className='cursor-pointer'>Accessibility</li>
                </ul>
            </div>
            <div>
                <p className="font-roboto text-center lg:text-left text-darkText font-[500] pb-[18px]">SOLUTIONS</p>
                <ul className="text-footerLink gap-[18px] flex justify-center items-center lg:justify-start lg:items-start flex-col">
                    <li className='cursor-pointer'>Brainstorming</li>
                    <li className='cursor-pointer'>Ideation</li>
                    <li className='cursor-pointer'>Wireframing</li>
                    <li className='cursor-pointer'>Research</li>
                </ul>
            </div>
            <div>
                <p className="font-roboto text-center lg:text-left text-darkText font-[500] pb-[18px]">RESOURCES</p>
                <ul className="text-footerLink gap-[18px] flex justify-center items-center lg:justify-start lg:items-start flex-col">
                    <li className='cursor-pointer'>Help Center</li>
                    <li className='cursor-pointer'>Blog</li>
                    <li className='cursor-pointer'>Tutorials</li>
                </ul>
            </div>
            <div>
                <p className="font-roboto text-center lg:text-left text-darkText font-[500] pb-[18px]">CATEGORIES</p>
                <ul className="text-footerLink gap-[18px] flex justify-center items-center lg:justify-start lg:items-start flex-col">
                    <li className='cursor-pointer'>Contact Us</li>
                    <li className='cursor-pointer'>Developers</li>
                    <li className='cursor-pointer'>Documentation</li>
                    <li className='cursor-pointer'>Integrations</li>
                    <li className='cursor-pointer'>Reports</li>
                    <li className='cursor-pointer'>Webinar</li>
                </ul>
            </div>
            <div>
                <p className="font-roboto text-center lg:text-left text-darkText font-[500] pb-[18px]">CATEGORIES</p>
                <ul className="text-footerLink gap-[18px] flex justify-center items-center lg:justify-start lg:items-start flex-col">
                    <li className='cursor-pointer'>About</li>
                    <li className='cursor-pointer'>Press</li>
                    <li className='cursor-pointer'>Events</li>
                    <li className='cursor-pointer'>Career</li>
                </ul>
            </div>
        </div>

        <div className="w-full bg-footerLink h-[1px] mt-[48px]"></div>
        <div className="flex flex-col lg:flex-row justify-between items-center py-[24px] font-roboto text-footerLink gap-5 lg:gap-0">
            <p className="">All rights reserved @ ShangsatNigeriaLtd 2023.</p>
            <div className='flex flex-col lg:flex-row items-center justify-between gap-5 lg:gap-[48px]'>
                <div>
                    <ul className="flex justify-between items-center gap-[24px]">
                        <li className='cursor-pointer'>Terms</li>
                        <li className='cursor-pointer'>Privacy</li>
                        <li className='cursor-pointer'>Contact</li>
                    </ul>
                </div>
                <div className='flex justify-between items-center gap-[16px]'>
                    <img src={youtube} alt="" />
                    <img src={facebook} alt="" />
                    <img src={twitter} alt="" />
                    <img src={instagram} alt="" />
                    <img src={linkedIn} alt="" />
                </div>
            </div>
        </div>
    </div>);
}

export default Footer;