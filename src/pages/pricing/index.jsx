import Card from "./components/Card";
import rice from '../../assets/shangRice.png'
import water from '../../assets/shangWater.png'

const Pricing = () => {
    return ( <>
        <div className="px-[16px] pt-[48px] md:px-[24px] lg:px-[80px] lg:pt-[80px] pb-[30px] lg:py-[70px]">
            <h1 className='font-anton text-darkText text-[32px] lg:text-[50px] leading-[35px] lg:leading-[60px] text-center'>Pricing</h1>
        </div>

        <div className="flex justify-center items-center gap-[32px] flex-col lg:flex-row pb-[30px] lg:pb-[70px]">
            <Card pic={rice} product='Rice' item1='10kg' price1='7,500' item2='25kg' price2='17,500' item3='50kg' price3='35,000' />
            <Card pic={water} product='Solar Water Heater' item1='150L' price1='350,500' item2='200L' price2='450,500' item3='300L' price3='650,500' />
        </div>
    </> );
}
 
export default Pricing;