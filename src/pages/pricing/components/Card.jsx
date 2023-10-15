import check from '../../../assets/priceCheck.png'
import { Link } from 'react-router-dom';

// eslint-disable-next-line react/prop-types
const Card = ({ pic, product, item1, price1, item2, price2, item3, price3 }) => {
    return (<>
        <div className='border-[1px] border-primary rounded-[10px] w-[80%] md:w-[320px] lg:w-[320px] py-[50px] flex justify-between items-center flex-col gap-[35px]'>
            <img src={pic} alt="" />
            <h1 className='text-[#737373] font-anton text-[16px]'>Shangsat {product}</h1>

            <div className='flex flex-col gap-[15px] justify-between items-center w-full px-[50px] text-[#252B42] font-poppins font-[700] text-[14px]'>
                <div className='flex justify-between items-center w-full'>
                    <div className='flex justify-between items-center gap-[10px]'>
                        <img src={check} alt="" />
                        <p>{item1}</p>
                    </div>
                    <p>{price1}</p>
                </div>

                <div className='flex justify-between items-center w-full'>
                    <div className='flex justify-between items-center gap-[10px]'>
                        <img src={check} alt="" />
                        <p>{item2}</p>
                    </div>
                    <p>{price2}</p>
                </div>

                <div className='flex justify-between items-center w-full'>
                    <div className='flex justify-between items-center gap-[10px]'>
                        <img src={check} alt="" />
                        <p>{item3}</p>
                    </div>
                    <p>{price3}</p>
                </div>
            </div>

            <div className='w-full px-[30px]'>
                <Link to={'/contact'} className='w-full bg-red-400'>
                    <button className='bg-primary text-white text-[16px] px-[28px] font-[600] rounded-[5px] border-primary border-[2px] w-full py-[8px] font-poppins'>Contact Us</button>
                </Link>
            </div>
        </div>
    </>);
}

export default Card;