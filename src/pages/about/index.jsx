import man from '../../assets/storyPic.png'
import Expertise from '../../components/Expertise';
import Team from '../../components/Team';
import Medal from '../../components/Medal'

const Story = () => {
    return ( <>
        <div className="px-[16px] pt-[48px] md:px-[24px] lg:px-[80px] lg:pt-[80px] lg:py-[70px]">
            <h1 className='font-anton text-darkText text-[32px] lg:text-[50px] leading-[35px] lg:leading-[60px] text-center'>Here&apos;s Our Story</h1>
            <p className='text-darkText font-poppins text-[14px] lg:text-[18px] px-[16px] py-[32px] lg:p-[32px] text-center'>Aliquet sed nulla tincidunt pulvinar sed fames sit facilisis dictumst. Ornare faucibus quis velit fringilla aliquam ultricies. Malesuada ut aliquam at ac est nisi, interdum etiam dignissim. Sed ut vestibulum eget purus ornare. Risus elit et fringilla habitant ut facilisi.</p>
        </div>

        <div className='px-[16px] lg:px-[80px] pb-[50px] lg:pb-[100px]'>
            <div className='flex flex-col lg:flex-row justify-between items-center gap-[25px] pb-[30px] lg:pb-[80px]'>
                <div className='w-full lg:w-[50%] h-[100%] flex justify-center items-center lg:block'>
                    <img src={man} alt="" />
                </div>
                <div className='w-full lg:w-[50%] text-center lg:text-left'>
                    <p className='text-darkText text-[14px] lg:text-[18px] font-poppins'>
                        Lorem ipsum dolor sit amet consectetur. Lacus in aliquet egestas aliquam in placerat. Quis nisi platea purus magna risus malesuada risus lorem. Felis nulla adipiscing enim enim nisl. Sit a adipiscing id molestie eu elit feugiat sit nunc. Laoreet fusce felis vel scelerisque. A malesuada consectetur aliquam quis sit. Orci in velit amet neque ullamcorper facilisi accumsan. Ullamcorper convallis viverra enim mauris non bibendum neque diam. Pulvinar tincidunt curabitur tempor pharetra. Ullamcorper cursus ut quis dignissim feugiat. Porttitor sed sapien hendrerit ac ipsum egestas turpis magna suscipit. Congue malesuada eget turpis quisque bibendum. Id amet interdum faucibus tristique tellus cras elementum id. Urna ullamcorper imperdiet habitant vehicula consequat maecenas praesent fringilla. Mattis sed
                    </p>
                </div>
            </div>

            <p className='text-darkText font-poppins text-[14px] lg:text-[18px] text-center lg:text-left'>
                Lorem ipsum dolor sit amet consectetur. Lacus in aliquet egestas aliquam in placerat. Quis nisi platea purus magna risus malesuada risus lorem. Felis nulla adipiscing enim enim nisl. Sit a adipiscing id molestie eu elit feugiat sit nunc. Laoreet fusce felis vel scelerisque. A malesuada consectetur aliquam quis sit. Orci in velit amet neque ullamcorper facilisi accumsan. Ullamcorper convallis viverra enim mauris non bibendum neque diam. Pulvinar tincidunt curabitur tempor pharetra. Ullamcorper cursus ut quis dignissim feugiat. Porttitor sed sapien hendrerit ac ipsum egestas turpis magna suscipit. Congue malesuada eget turpis quisque bibendum. Id amet interdum faucibus tristique tellus cras elementum id. Urna ullamcorper imperdiet habitant vehicula consequat maecenas praesent fringilla. Mattis sed
            </p>
        </div>

        <Expertise text={'Our Expertise'} />

        <Medal />
        <Team />
    </> );
}
 
export default Story;