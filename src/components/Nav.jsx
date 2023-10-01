import logo from '../assets/shangsatLogo.png'
import hamburger from '../assets/hamburger.svg'
import { NavLink } from 'react-router-dom';

const Nav = () => {
    const navLinkStyle = ({ isActive }) => {
        return {
            color: isActive ? '#F60' : '',
            borderBottom: isActive ? '1px solid #F60' : '',
        };
    };
    return (<div className="px-[16px] lg:px-[60px] py-[16px] lg:py-[24px] flex justify-between items-center font-roboto sticky top-0 z-40 bg-white">
        <div>
            <img src={logo} alt="" className='w-[70%] lg:w-[100%]' />
        </div>

        <div className='lg:hidden'>
            <img src={hamburger} alt="" />
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
