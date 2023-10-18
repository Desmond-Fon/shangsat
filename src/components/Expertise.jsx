import rice from '../assets/ricemill.png'
import housing from '../assets/housing.png'
import solar from '../assets/waterheater.png'
import water from '../assets/tablewater.png'

// eslint-disable-next-line react/prop-types
const Expertise = ({text}) => {
    return ( <>
        <div className="p-[16px] py-[48px] lg:p-[80px] lg:pt-[30px]">
            <h1 className='font-anton text-darkText text-[50px] leading-[60px] text-center mb-[70px] hidden lg:block'>{text}</h1>
            <div className='flex items-center flex-col lg:flex-row justify-between gap-[32px] lg:gap-[40px]'>
                <div className='flex flex-col items-center justify-center gap-[16px]'>
                    <img src={rice} alt="" />
                    <h1 className='text-darkText text-[20px] font-anton'>Rice Milling</h1>
                    <p className='font-poppins text-center text-darkText'>We bring you the heart of our farm, meticulously cultivated and harvested to deliver the finest, premium-quality rice.</p>
                </div>
                <div className='flex flex-col items-center justify-center gap-[16px]'>
                    <img src={housing} alt="" />
                    <h1 className='text-darkText text-[20px] font-anton'>Housing</h1>
                    <p className='font-poppins text-center text-darkText'>Our short let apartments are meticulously designed to provide you with comfort, convenience, and an experience that goes beyond traditional accommodation. </p>
                </div>
                <div className='flex flex-col items-center justify-center gap-[16px]'>
                    <img src={solar} alt="" />
                    <h1 className='text-darkText text-[20px] font-anton'>Solar Water Heater</h1>
                    <p className='font-poppins text-center text-darkText'>Harnessing the power of the sun, our solar water heaters provide you with energy-efficient, eco-friendly, and endless hot water. </p>
                </div>
                <div className='flex flex-col items-center justify-center gap-[16px]'>
                    <img src={water} alt="" />
                    <h1 className='text-darkText text-[20px] font-anton'>Table Water Production</h1>
                    <p className='font-poppins text-center text-darkText'>Hydration is the cornerstone of well-being. Our water is not just pure; it&apos;s a promise of quality and safety.</p>
                </div>
            </div>
        </div>
    </> );
}
 
export default Expertise;