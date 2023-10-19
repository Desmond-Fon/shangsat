import man from '../../assets/officel.jpeg'
import Expertise from '../../components/Expertise';
import Team from '../../components/Team';
import Medal from '../../components/Medal'

const Story = () => {
    return ( <>
        <div className="px-[16px] pt-[48px] md:px-[24px] lg:px-[80px] lg:pt-[80px] lg:py-[70px] pb-10 lg:pb-3">
            <h1 className='font-anton text-darkText text-[32px] lg:text-[50px] leading-[35px] lg:leading-[60px] text-center'>Here&apos;s Our Story</h1>
            <p className='text-darkText font-poppins text-[14px] lg:text-[18px] px-[16px] py-[32px] lg:p-[32px] text-center hidden lg:block'>We are a brand that celebrates diversity, inclusivity, and the power of community. We believe in bringing people together, bridging gaps, and creating shared experiences through our offerings. We are passionate about quality, integrity and authenticity.</p>
        </div>

        <div className='px-[16px] lg:px-[80px] pb-[50px] lg:pb-[100px]'>
            <div className='flex flex-col lg:flex-row justify-between items-center gap-[25px] pb-[30px] lg:pb-[80px]'>
                <div className='w-full lg:w-[50%] h-[100%] flex justify-center items-center lg:block'>
                    <img src={man} alt="" className='rounded-[7px]' />
                </div>
                <div className='w-full lg:w-[50%] text-center lg:text-left'>
                    <p className='text-darkText text-[14px] lg:text-[18px] font-poppins'>
                        Our name comes from Shangsat CEOs paternal grandmother&apos;s name meaning &apos;lovely to talk about&apos; in the mwaghavul language in Jos, Plateau state (Mangu LGA). With &apos;Shang&apos; meaning &apos;lovely&apos; and &apos;sat&apos; meaning &apos;to talk about&apos;. We are a brand that celebrates diversity, inclusivity, and the power of community. We believe in bringing people together, bridging gaps, and creating shared experiences through our offerings. We are passionate about quality, integrity and authenticity. Shangsat believes in continuous growth and expansion. We aim to achieve continuous growth and expand our presence in the Nigerian trade market.
                    </p>
                </div>
            </div>

            <p className='text-darkText font-poppins text-[14px] lg:text-[18px] text-center lg:text-left'>
                Our intention is to explore new opportunities, diversify our portfolio, and establish ourselves as a leading brand known for excellence, reliability, and innovation in the industry.
                We aim to build trust and credibility with our stakeholders, including customers, partners, and investors, by maintaining honesty, fairness, and accountability in every aspect of our business. An additional reason behind our name &apos;Shangsat&apos; goes back to our early days when we visited &apos;Shanghai&apos; which we discovered means &apos;Business world&apos;. Digging further, we saw that the Shang (上) character of the Chinese language means “UP” which we translated to mean going to the next level. We are determined to embrace new innovation, grow and expand our reach. We desire to better serve our customers while proudly representing our heritage.
            </p>
        </div>

        <Expertise text={'Our Expertise'} />

        <Medal />
        <Team />
    </> );
}
 
export default Story;