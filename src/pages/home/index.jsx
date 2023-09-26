import rice from '../../assets/ricemill.png'
import housing from '../../assets/housing.png'
import solar from '../../assets/waterheater.png'
import water from '../../assets/tablewater.png'
import women from '../../assets/women.png'
import man from '../../assets/storyPic.png'
import arrow from '../../assets/arrow-right.png'
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

        <div className='flex justify-between items-center w-[100%] bg-primary'>
            <div className='w-[50%]'>
                <img src={women} alt="" />
            </div>
            <div className='w-[50%] p-[60px] '>
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

        <div className="p-[80px]">
            <h1 className='font-anton text-darkText text-[50px] leading-[60px] text-center'>Here&apos; Our Story</h1>
            <p className='text-darkText text-center font-poppins text-[18px] py-[80px]'>Aliquet sed nulla tincidunt pulvinar sed fames sit facilisis dictumst. Ornare faucibus quis velit fringilla aliquam ultricies. Malesuada ut aliquam at ac est nisi, interdum etiam dignissim. Sed ut vestibulum eget purus ornare. Risus elit et fringilla habitant ut facilisi.</p>

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

        <div className='px-[80px] pt-[80px] bg-sectionBg'>

        </div>

    </div>);
}

export default Landing;