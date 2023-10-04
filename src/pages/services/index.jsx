import Expertise from '../../components/Expertise';
import { Link } from 'react-router-dom'

const Services = () => {
    return (<>
        <Expertise text={"Our Services"} />

        <div className='w-[100%]'>
            <div className='background1 h-[400px] lg:h-[420px]'>
                <div className='px-[16px] py-[48px] lg:p-[80px] flex h-full justify-between items-center text-center lg:text-left lg:items-start flex-col'>
                    <div>
                        <h2 className='font-roboto text-org font-[700] text-[20px] pb-[16px]'>SHANGSAT RICE</h2>
                        <h1 className='font-anton text-white text-[32px] lg:text-[50px] leading-[35px] lg:leading-[60px]'>Rice Milling and Retail</h1>
                    </div>
                    <p className='text-white font-poppins text-[16px] lg:text-[18px]'>Scelerisque auctor dolor diam tortor, fames faucibus non interdum nunc. Ultrices nibh sapien elit gravida ac, rutrum molestie adipiscing lacinia.</p>
                    <div>
                        <Link to={'/gallery'}>
                            <button className='bg-secondary text-white text-[16px] px-[28px] font-[600] rounded-[8px] border-secondary border-[2px] py-[8px] font-poppins shad'>View Images</button>
                        </Link>
                    </div>
                </div>
            </div>
            <div className='background2 h-[400px] lg:h-[420px]'>
                <div className='px-[16px] py-[48px] lg:p-[80px] flex h-full justify-between items-center text-center lg:text-left lg:items-end flex-col'>
                    <div>
                        <h2 className='font-roboto text-end text-grn font-[700] text-[20px] pb-[16px]'>SHANGSAT SOLAR WATER HEATER</h2>
                        <h1 className='font-anton text-white text-[32px] lg:text-[50px] leading-[35px] lg:leading-[60px]'>Solar Water Heater Installations</h1>
                    </div>
                    <p className='text-white text-center lg:text-end font-poppins text-[16px] lg:text-[18px]'>Scelerisque auctor dolor diam tortor, fames faucibus non interdum nunc. Ultrices nibh sapien elit gravida ac, rutrum molestie adipiscing lacinia.</p>
                    <div>
                        <Link to={'/gallery'}>
                            <button className='bg-primary text-white text-[16px] px-[28px] font-[600] rounded-[8px] border-primary border-[2px] py-[8px] font-poppins shad'>View Images</button>
                        </Link>
                    </div>
                </div>
            </div>
            <div className='background1 h-[400px] lg:h-[420px]'>
                <div className='px-[16px] py-[48px] lg:p-[80px] flex h-full justify-between items-center text-center lg:text-left lg:items-start flex-col'>
                    <div>
                        <h2 className='font-roboto text-org font-[700] text-[20px] pb-[16px]'>SHANGSAT HOMES</h2>
                        <h1 className='font-anton text-white text-[32px] lg:text-[50px] leading-[35px] lg:leading-[60px]'>Housing</h1>
                    </div>
                    <p className='text-white  font-poppins text-[16px] lg:text-[18px]'>Scelerisque auctor dolor diam tortor, fames faucibus non interdum nunc. Ultrices nibh sapien elit gravida ac, rutrum molestie adipiscing lacinia.</p>
                    <div>
                        <Link to={'/gallery'}>
                            <button className='bg-secondary text-white text-[16px] px-[28px] font-[600] rounded-[8px] border-secondary border-[2px] py-[8px] font-poppins shad'>View Images</button>
                        </Link>
                    </div>
                </div>
            </div>
            <div className='background4 h-[400px] lg:h-[420px]'>
                <div className='px-[16px] py-[48px] lg:p-[80px] flex h-full justify-between items-center text-center lg:text-left lg:items-end flex-col'>
                    <div>
                        <h2 className='font-roboto text-end text-grn font-[700] text-[20px] pb-[16px]'>SHANGSAT TABLE WATER</h2>
                        <h1 className='font-anton text-white text-[32px] lg:text-[50px] leading-[35px] lg:leading-[60px]'>Table Water</h1>
                    </div>
                    <p className='text-white text-center lg:text-end font-poppins text-[16px] lg:text-[18px]'>Scelerisque auctor dolor diam tortor, fames faucibus non interdum nunc. Ultrices nibh sapien elit gravida ac, rutrum molestie adipiscing lacinia.</p>
                    <div>
                        <Link to={'/gallery'}>
                            <button className='bg-primary text-white text-[16px] px-[28px] font-[600] rounded-[8px] border-primary border-[2px] py-[8px] font-poppins shad'>View Images</button>
                        </Link>
                    </div>
                </div>            </div>
        </div>
    </>);
}

export default Services;