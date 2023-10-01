import { Link } from "react-router-dom";

const Section = () => {
    return (<div className="px-[16px] py-[48px] lg:p-[80px] flex justify-center items-center flex-col secBg">
        <h2 className='font-roboto text-org font-[700] text-[20px] pb-[8px]'>JOIN US</h2>
        <h1 className='font-anton text-white text-[32px] lg:text-[50px]'>Let&apos;s build together!</h1>
        <p className='text-white font-poppins text-[16px] lg:text-[18px] p-[32px] text-center'>Malesuada ut aliquam at ac est nisi, interdum etiam dignissim. <br />
            Risus elit et fringilla habitant ut facilisi.</p>
        <div>
            <Link to={'/contact'}>
                <button className='bg-secondary text-[24px] text-white px-[28px] font-[500] rounded-[8px] border-secondary border-[2px] py-[8px] font-poppins shad'>Join The Community</button>
            </Link>
        </div>
    </div>);
}

export default Section;