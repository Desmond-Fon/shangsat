import Expertise from '../../components/Expertise';
import { Link } from 'react-router-dom'

const Services = () => {
    return (<>
        <div className="p-[16px] py-[38px] lg:p-[80px] lg:pb-0">
            <h1 className='font-anton text-darkText text-[50px] leading-[60px] text-center hidden lg:block'>Our Services</h1>

            <p className='text-darkText font-poppins text-[16px] lg:text-[18px] pt-[32px] p-[16px] pb-0 lg:p-[32px] lg:pb-0 text-center'>
                At Shangsat, our vision is to enhance your life through products and services that prioritize quality, sustainability, and your overall well-being. Whether it&apos;s the rice on your plate, the warm shower you take, the water you drink, or the space you stay in, our brand is dedicated to making every moment a cherished memory.
                </p>
            <p className='text-darkText font-poppins text-[16px] lg:text-[18px] pt-[32px] p-[16px] lg:p-[32px] text-center'>Join us in this journey of excellence, sustainability, and comfort. We invite you to experience the Shangsat difference - where every product and service is a testament to our commitment to enhancing your everyday life.</p> 
        </div>
        <Expertise />

        <div className='w-[100%]'>
            <div className='background1 h-[400px] lg:h-[420px]'>
                <div className='px-[16px] py-[48px] lg:p-[80px] flex h-full justify-between items-center text-center lg:text-left lg:items-start flex-col'>
                    <div>
                        <h2 className='font-roboto text-org font-[700] text-[20px] pb-[16px]'>SHANGSAT RICE</h2>
                        <h1 className='font-anton text-white text-[32px] lg:text-[50px] leading-[35px] lg:leading-[60px]'>Rice Milling and Retail</h1>
                    </div>
                    <p className='text-white font-poppins text-[16px] lg:text-[18px]'>We bring you the heart of our farm, meticulously cultivated and harvested to deliver the finest, premium-quality rice. Each grain embodies the essence of freshness, flavor, and nutrition, ensuring that your meals are nothing short of exceptional.</p>
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
                    <p className='text-white text-center lg:text-end font-poppins text-[16px] lg:text-[18px]'>Harnessing the power of the sun, our solar water heaters provide you with energy-efficient, eco-friendly, and endless hot water. We believe in the power of sustainable living, and our solar solutions are a testament to that commitment. Research has proven that electricity is a part of nature and our power generating devices are nature friendly. With Shangsat power, eco-friendly energy is sure.</p>
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
                        <h1 className='font-anton text-white text-[32px] lg:text-[50px] leading-[35px] lg:leading-[60px]'>Short-Let Apartments (Housing)</h1>
                    </div>
                    <p className='text-white  font-poppins text-[16px] lg:text-[18px]'>We understand the importance of feeling at home even when you&apos;re away. Our short let apartments are meticulously designed to provide you with comfort, convenience, and an experience that goes beyond traditional accommodation. A home away from home.</p>
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
                    <p className='text-white text-center lg:text-end font-poppins text-[16px] lg:text-[18px]'>Hydration is the cornerstone of well-being. Our table water is not just pure; it&apos;s a promise of quality and safety. We bring you the crisp, refreshing taste of purity in every sip, ensuring your health and satisfaction.</p>
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