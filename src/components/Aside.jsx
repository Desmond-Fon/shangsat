import desktop from '../assets/desktop.png'
import pointer from '../assets/cursor-pointer.png'
import {Link} from 'react-router-dom'

const Aside = () => {
    return (
        <div className='flex justify-between items-center flex-col gap-[190px] p-[80px] '>
            <div className='flex justify-between items-center w-[100%] gap-10'>
                <div className='w-[50%] relative'>
                    <img src={desktop} alt="" />
                    <div className='absolute top-7 left-[185px]'>
                        <img src={pointer} alt="" />
                    </div>
                </div>
                <div className='w-[50%] flex justify-between items-start flex-col gap-3'>
                    <h2 className='font-roboto text-footerLink font-[700] text-[20px]'>JUST A LINK AWAY</h2>
                    <h1 className='font-anton text-darkText text-[50px] leading-[60px]'>You&apos;re never too far to reach us</h1>
                    <p className='text-darkText font-poppins text-[18px]'>Scelerisque auctor dolor diam tortor, fames faucibus non interdum nunc. Ultrices nibh sapien elit gravida ac, rutrum molestie adipiscing lacinia.</p>
                    <div>
                        <Link to={'/contact'}>
                            <button className='bg-secondary text-white px-[24px] font-[500] rounded-[8px] border-secondary border-[2px] py-[8px] font-poppins'>Contact Us</button>
                        </Link>
                    </div>
                </div>
            </div>

            <div className='flex justify-center items-center flex-col'>
                <h1 className='font-anton text-darkText text-[50px] text-center mb-[30px]'>Stay Informed with Our Newsletter</h1>
                <p className='text-darkText font-poppins text-[18px] mb-[30px]'>Sed ut vestibulum eget purus ornare. Risus elit et fringilla habitant ut facilisi.</p>
                <div>
                    <div className='relative'>
                        <input type="email" placeholder='Enter email address' className='w-[450px] h-[52px] border-[2px] border-primary rounded-[8px] px-4 font-poppins text-[14px] outline-primary'/>
                        <button className='bg-primary absolute right-1 top-[4px] text-white px-[24px] font-[500] rounded-[8px] border-primary border-[2px] py-[8px] font-poppins'>Submit</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Aside;