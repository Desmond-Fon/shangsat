import { Link } from "react-router-dom";

const Section = () => {
    return (<div className="p-[80px] flex justify-center items-center flex-col bg-primary">
        <h2 className='font-roboto text-org font-[700] text-[20px] pb-[8px]'>JUST A LINK AWAY</h2>
        <h1 className='font-anton text-white text-[50px]'>Let&apos;s build together!</h1>
        <p className='text-white font-poppins text-[18px] p-[32px] text-center'>Malesuada ut aliquam at ac est nisi, interdum etiam dignissim. <br />
            Risus elit et fringilla habitant ut facilisi.</p>
        <div>
            <Link to={'/contact'}>
                <button className='bg-secondary text-white px-[24px] font-[500] rounded-[8px] border-secondary border-[2px] py-[8px] font-poppins shad'>Join The Community</button>
            </Link>
        </div>
    </div>);
}

export default Section;