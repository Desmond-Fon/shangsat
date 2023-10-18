import logo from '../assets/shangsatLogo.png'
import { NavLink, Link } from 'react-router-dom';
import { useState } from 'react';
// import whiteLogo from '../assets/whiteLogo.png'


const Nav = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        window.scroll(0, 0);
        setIsOpen(!isOpen);
    };

    const toggleNavMenu = () => {
        setIsOpen(!isOpen);
    };

    const navLinkStyle = ({ isActive }) => {
        return {
            color: isActive ? '#F60' : '',
            borderBottom: isActive ? '1px solid #F60' : '',
        };
    };


    return (<div className={`px-[16px] py-[16px] bg-white lg:px-[60px] lg:py-[24px] flex justify-between items-center font-poppins sticky top-0 z-40 `}>
        {isOpen && <div className='py-[10px] px-[24px] w-[90%] rounded-[10px] flex justify-start gap-[25px] bg-white text-darkText flex-col lg:hidden absolute activeNav top-[70px] transition-all duration-400 ease-in-out'>
            {/* <div className='text-right flex flex-col justify-start items-end gap-1'>
                <img src={whiteLogo} alt="" className='w-[60%] md:w-[30%]' />
                <p className='text-white font-poppins text-[20px] font-600'>Menu</p>
            </div> */}
            {/* <div className='h-[1px] w-full navLine'></div> */}
            <div className='text-right flex flex-col justify-start items-end gap-[25px]'>
                <Link onClick={toggleMenu}  to={'/'} className='w-full'>
                    <p className=''>Home</p>
                </Link>
                <Link onClick={toggleMenu}  to={'/about'} className='w-full'>
                    <p className=''>About Us</p>
                </Link>
            </div>
            {/* <div className='h-[1px] w-full navLine'></div> */}
            <div className='text-right flex flex-col justify-start items-end gap-[25px]'>
                <Link onClick={toggleMenu}  to={'/services'} className='w-full'>
                    <p className=''>Services</p>
                </Link>
                <Link onClick={toggleMenu}  to={'/pricing'} className='w-full'>
                    <p className=''>Pricing</p>
                </Link>
            </div>
            {/* <div className='h-[1px] w-full navLine'></div> */}
            <div className='text-right flex flex-col justify-start items-end gap-[25px]'>
                <Link onClick={toggleMenu} to={'/gallery'} className='w-full'>
                    <p className=''>Gallery</p>
                </Link>
                <Link onClick={toggleMenu} to={'/contact'} className='w-full'>
                    <p className=''>Contact</p>
                </Link>
            </div>
        </div>}
        <div>
            <img src={logo} alt="" className='w-[70%] lg:w-[100%]' />
        </div>

        <div className='lg:hidden'>
            <div className={`hamburger-menu ${isOpen ? 'open' : ''} ${isOpen ? 'flex-row-reverse  bg-white rounded-r-[20px]' : ' bg-white'}`} onClick={toggleNavMenu}>
                <div className="line bg-primary"></div>
                <div className="line bg-secondary"></div>
                <div className={`line ${!isOpen ? 'bg-primary' : 'bg-secondary'}`}></div>
            </div>
        </div>
        <div className='lg:flex justify-center items-center gap-7 hidden'>
            <NavLink style={navLinkStyle} onClick={() => {
                window.scroll(0, 0);
            }} to={'/'} className=''>
                Home
            </NavLink>
            <NavLink style={navLinkStyle} onClick={() => {
                window.scroll(0, 0);
            }} to={'/about'}>
                About Us
            </NavLink>
            <NavLink style={navLinkStyle} onClick={() => {
                window.scroll(0, 0);
            }} to={'/services'}>
                Services
            </NavLink>
            <NavLink style={navLinkStyle} onClick={() => {
                window.scroll(0, 0);
            }} to={'/pricing'}>
                Pricing
            </NavLink>
            <NavLink style={navLinkStyle} onClick={() => {
                window.scroll(0, 0);
            }} to={'/gallery'}>
                Gallery
            </NavLink>
            <NavLink style={navLinkStyle} onClick={() => {
                window.scroll(0, 0);
            }} to={'/contact'}>
                Contact
            </NavLink>
        </div>
        <div className='hidden lg:block'>
            <a href="#community"><button className='bg-secondary text-white px-[24px] font-[500] rounded-[8px] border-secondary border-[2px] py-[8px]'>Join The Community</button></a>
        </div>
    </div>);
}

export default Nav;
