import logo from '../assets/shangsatLogo.png'
import { NavLink } from 'react-router-dom';

const Nav = () => {
    const navLinkStyle = ({ isActive }) => {
        return {
            color: isActive ? '#F60' : '',
            borderBottom: isActive ? '1px solid #F60' : '',
        };
    };
    return (<div className="px-[60px] py-[24px] flex justify-between items-center font-roboto sticky top-0 z-40 bg-white">
        <div>
            <img src={logo} alt="" />
        </div>
        <div className='flex justify-center items-center gap-7'>
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
        <div>
            <button className='bg-secondary text-white px-[24px] font-[500] rounded-[8px] border-secondary border-[2px] py-[8px]'>Join The Community</button>
        </div>
    </div>);
}

export default Nav;
