import project from '../assets/project.svg'
import client from '../assets/people.svg'
import medal from '../assets/medal-star.svg'
import CountUp from "react-countup";
import { useState } from "react";
import ScrollTrigger from "react-scroll-trigger";

const Medal = () => {
    const [counterOn, setCounterOn] = useState(false);

    return (
        <ScrollTrigger
            onEnter={() => setCounterOn(true)}
            onExit={() => setCounterOn(false)}
        >
        <div className="px-[16px] py-[48px] lg:p-[80px] flex justify-around items-center flex-col lg:flex-row secBg gap-[48px]">
            <div className='flex flex-col justify-center items-center gap-[20px]'>
                <div >
                    <img src={project} alt="" />
                </div>
                    <h1 className='font-anton text-white text-[32px] lg:text-[50px] lg:leading-[35px] leading-[60px] text-center'>{counterOn && <CountUp start={0} end={20} duration={3} />}</h1>
                    <p className='font-poppins text-white text-[14px] lg:text-[16px]'>
                   Projects</p>
            </div>
            <div className='flex flex-col justify-center items-center gap-[20px]'>
                <div >
                    <img src={client} alt="" className='text-primary bg-secondary rounded-[15px]' />
                </div>
                    <h1 className='font-anton text-white text-[32px] lg:text-[50px] lg:leading-[35px] leading-[60px] text-center'>{counterOn && <CountUp start={0} end={20} duration={3} />}</h1>
                    <p className='font-poppins text-white text-[14px] lg:text-[16px]'>
                   Clients</p>
            </div>
            <div className='flex flex-col justify-center items-center gap-[20px]'>
                <div >
                        <img src={medal} alt="" className='text-primary bg-secondary rounded-[15px]' />
                </div>
                    <h1 className='font-anton text-white text-[32px] lg:text-[50px] lg:leading-[35px] leading-[60px] text-center'>{counterOn && <CountUp start={0} end={3} duration={3} />}</h1>
                    <p className='font-poppins text-white text-[14px] lg:text-[16px]'>
                   Medals</p>
            </div>
    
    </div> 
        </ScrollTrigger>);
}
 
export default Medal;