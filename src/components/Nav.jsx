import logo from '../assets/shangsatLogo.png'
import { NavLink, Link } from 'react-router-dom';
import { useState } from 'react';
import whiteLogo from '../assets/whiteLogo.png'


const Nav = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const navLinkStyle = ({ isActive }) => {
        return {
            color: isActive ? '#F60' : '',
            borderBottom: isActive ? '1px solid #F60' : '',
        };
    };


    return (<div className={`${isOpen ? 'px-0 py-0 flex-row-reverse  bg-primary transition-all duration-300 ease-in-out' : 'px-[16px] py-[16px] bg-white transition-all duration-300 ease-in-out'} lg:px-[60px] lg:py-[24px] flex justify-between items-center font-roboto sticky top-0 z-40 `}>
        {isOpen && <div className='transition-all duration-300 ease-in py-[80px] px-[24px] bg-primary h-[100vh] w-full flex justify-start gap-[25px] text-white flex-col'>
        <div className='text-right flex flex-col justify-start items-end gap-1'>
            <img src={whiteLogo} alt="" className='w-[60%] md:w-[30%]' />
            <p className='text-white font-poppins text-[20px] font-600'>Menu</p>
        </div>
        <div className='h-[1px] w-full navLine'></div>
        <div className='text-right flex flex-col justify-start items-end gap-[25px]'>
                <Link onClick={toggleMenu} to={'/'} className='w-full'>
                <p className=''>Home</p>
            </Link>
            <Link onClick={toggleMenu} to={'/about'} className='w-full'>
                <p className=''>About Us</p>
            </Link>
        </div>
        <div className='h-[1px] w-full navLine'></div>
        <div className='text-right flex flex-col justify-start items-end gap-[25px]'>
                <Link onClick={toggleMenu} to={'/services'} className='w-full'>
                <p className=''>Services</p>
            </Link>
                <Link onClick={toggleMenu} to={'/gallery'} className='w-full'>
                <p className=''>Gallery</p>
            </Link>
        </div>
        <div className='h-[1px] w-full navLine'></div>
        <div className='text-right flex flex-col justify-start items-end gap-[25px]'>
                <Link onClick={toggleMenu} to={'/contact'} className='w-full'>
                <p className=''>Contact</p>
            </Link>
        </div>
    </div>}
        {!isOpen && <div>
            <img src={logo} alt="" className='w-[70%] lg:w-[100%]' />
        </div>}

        <div className='lg:hidden'>
            <div className={`hamburger-menu ${isOpen ? 'open' : ''} ${isOpen ? 'flex-row-reverse activeNav pt-[20px] pb-[400px] mt-[40px] px-[20px] bg-white rounded-r-[20px] transition-all duration-300 ease-in-out' : ' bg-white transition-all duration-300 ease-in-out'}`} onClick={toggleMenu}>
                <div className="line bg-primary"></div>
                <div className="line bg-secondary"></div>
                <div className={`line ${!isOpen ? 'bg-primary' : 'bg-secondary'}`}></div>
            </div>
        </div>
        <div className='lg:flex justify-center items-center gap-7 hidden'>
            <NavLink style={navLinkStyle} to={'/'}>
                Home
            </NavLink>
            <NavLink style={navLinkStyle} to={'/about'}>
                About Us
            </NavLink>
            <NavLink style={navLinkStyle} to={'/services'}>
                Services
            </NavLink>
            <NavLink style={navLinkStyle} to={'/gallery'}>
                Gallery
            </NavLink>
            <NavLink style={navLinkStyle} to={'/contact'}>
                Contact
            </NavLink>
        </div>
        <div className='hidden lg:block'>
            <button className='bg-secondary text-white px-[24px] font-[500] rounded-[8px] border-secondary border-[2px] py-[8px]'>Join The Community</button>
        </div>
    </div>);
}

export default Nav;
