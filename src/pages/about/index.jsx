import man from '../../assets/storyPic.png'
import Expertise from '../../components/Expertise';

const Story = () => {
    return ( <>
        <div className="px-[80px] pt-[80px] py-[70px]">
            <h1 className='font-anton text-darkText text-[50px] leading-[60px] text-center'>Here&apos;s Our Story</h1>
            <p className='text-darkText font-poppins text-[18px] p-[32px] text-center'>Aliquet sed nulla tincidunt pulvinar sed fames sit facilisis dictumst. Ornare faucibus quis velit fringilla aliquam ultricies. Malesuada ut aliquam at ac est nisi, interdum etiam dignissim. Sed ut vestibulum eget purus ornare. Risus elit et fringilla habitant ut facilisi.</p>
        </div>

        <div className='px-[80px] pb-[150px]'>
            <div className='flex justify-between items-center gap-[25px] pb-[80px]'>
                <div className='w-[50%] h-[100%]'>
                    <img src={man} alt="" />
                </div>
                <div className='w-[50%]'>
                    <p className='text-darkText font-poppins text-[18px]'>
                        Lorem ipsum dolor sit amet consectetur. Lacus in aliquet egestas aliquam in placerat. Quis nisi platea purus magna risus malesuada risus lorem. Felis nulla adipiscing enim enim nisl. Sit a adipiscing id molestie eu elit feugiat sit nunc. Laoreet fusce felis vel scelerisque. A malesuada consectetur aliquam quis sit. Orci in velit amet neque ullamcorper facilisi accumsan. Ullamcorper convallis viverra enim mauris non bibendum neque diam. Pulvinar tincidunt curabitur tempor pharetra. Ullamcorper cursus ut quis dignissim feugiat. Porttitor sed sapien hendrerit ac ipsum egestas turpis magna suscipit. Congue malesuada eget turpis quisque bibendum. Id amet interdum faucibus tristique tellus cras elementum id. Urna ullamcorper imperdiet habitant vehicula consequat maecenas praesent fringilla. Mattis sed
                    </p>
                </div>
            </div>

            <p className='text-darkText font-poppins text-[18px]'>
                Lorem ipsum dolor sit amet consectetur. Lacus in aliquet egestas aliquam in placerat. Quis nisi platea purus magna risus malesuada risus lorem. Felis nulla adipiscing enim enim nisl. Sit a adipiscing id molestie eu elit feugiat sit nunc. Laoreet fusce felis vel scelerisque. A malesuada consectetur aliquam quis sit. Orci in velit amet neque ullamcorper facilisi accumsan. Ullamcorper convallis viverra enim mauris non bibendum neque diam. Pulvinar tincidunt curabitur tempor pharetra. Ullamcorper cursus ut quis dignissim feugiat. Porttitor sed sapien hendrerit ac ipsum egestas turpis magna suscipit. Congue malesuada eget turpis quisque bibendum. Id amet interdum faucibus tristique tellus cras elementum id. Urna ullamcorper imperdiet habitant vehicula consequat maecenas praesent fringilla. Mattis sed
            </p>
        </div>

        <Expertise text={'Our Expertise'} />
    </> );
}
 
export default Story;