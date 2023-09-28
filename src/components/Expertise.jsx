import rice from '../assets/ricemill.png'
import housing from '../assets/housing.png'
import solar from '../assets/waterheater.png'
import water from '../assets/tablewater.png'

// eslint-disable-next-line react/prop-types
const Expertise = ({text}) => {
    return ( <>
        <div className="p-[80px]">
            <h1 className='font-anton text-darkText text-[50px] leading-[60px] text-center mb-[70px]'>{text}</h1>
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
    </> );
}
 
export default Expertise;