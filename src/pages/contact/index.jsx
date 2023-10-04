import ellipse from '../../assets/ellipse.png'
import contactMeta from '../../assets/contactMeta.png'
import contactInsta from '../../assets/contactInsta.png'
import contactX from '../../assets/contactX.png'
import contactMail from '../../assets/contactMail.svg'
import contactLocation from '../../assets/contactLocation.svg'
import contactPhone from '../../assets/contactPhone.svg'

const Contact = () => {
    return (<>
        <div className="px-[80px] pt-[80px] py-[70px]">
            <h1 className='font-anton text-darkText text-[50px] leading-[60px] text-center'>Contact</h1>
        </div>
        <div className="mx-[100px] rounded-[10px] mb-[40px] boxShad">
            <div className='p-[10px] w-full flex justify-between items-start gap-[0px]'>
                <div className='w-[45%] bg-primary relative rounded-[10px] p-[40px] flex flex-col justify-between items-start gap-[140px]'>
                    <div className='flex flex-col items-start gap-[6px]'>
                        <h1 className='font-anton text-[28px] text-white'>Contact Information</h1>
                        <p className='text-[#C9C9C9] font-poppins text-[18px]'>Say something to start a live chat!</p>
                    </div>
                    <div className='flex flex-col items-start justify-between gap-[50px]'>
                        <div className='flex justify-start items-center gap-[25px]'>
                            <img src={contactPhone} alt="" />
                            <p className='font-poppins text-white'>+234-8036220461, +86-13236958191</p>
                        </div>
                        <div className='flex justify-start items-center gap-[25px]'>
                            <img src={contactMail} alt="" />
                            <p className='font-poppins text-white'>shangsatnigltd@yahoo.com</p>
                        </div>
                        <div className='flex justify-start items-center gap-[25px]'>
                            <img src={contactLocation} alt="" />
                            <p className='font-poppins text-white'>No. 57 Zarmaganda Fwavwei <br /> Rayfield, Jos Plateau State</p>
                        </div>
                    </div>
                    <div className='flex justify-start items-center gap-[24px]'>
                        <img src={contactMeta} alt="" />
                        <img src={contactInsta} alt="" />
                        <img src={contactX} alt="" />
                    </div>

                    <div className='absolute bottom-0 right-0 z-0'>
                        <img src={ellipse} alt="" className=' rounded-b-[10px]' />
                    </div>
                </div>
                <div className='w-[55%] flex flex-col justify-start items-start p-[50px] gap-[45px] h-full'>
                    <div className='flex justify-between items-center gap-[40px] w-full'>
                        <div className='flex justify-start flex-col w-[50%] group'>
                            <label htmlFor="fName" className='font-anton text-[12px]'>First Name</label>
                            <input type="text" id='fName' className='outline-none border-b-[1px] border-b-[#8D8D8D] p-2 font-poppins text-[14px] text-[#8D8D8D]' />
                        </div>

                        <div className='flex justify-start flex-col w-[50%] group'>
                            <label htmlFor="lName" className='font-anton text-[12px] item'>Last Name</label>
                            <input type="text" id='lName' className='outline-none border-b-[1px] border-b-[#8D8D8D] p-2 font-poppins text-[14px] text-[#8D8D8D]' />
                        </div>
                    </div>

                    <div className='flex justify-between items-center gap-[40px] w-full'>
                        <div className='flex justify-start flex-col w-[50%] group'>
                            <label htmlFor="mail" className='font-anton text-[12px]'>Email</label>
                            <input type="email" id='mail' className='outline-none border-b-[1px] border-b-[#8D8D8D] p-2 font-poppins text-[14px] text-[#8D8D8D]' />
                        </div>

                        <div className='flex justify-start flex-col w-[50%] group'>
                            <label htmlFor="lName" className='font-anton text-[12px]'>Phone Number</label>
                            <input type="text" id='lName' className='outline-none border-b-[1px] border-b-[#8D8D8D] p-2 font-poppins text-[14px] text-[#8D8D8D]' />
                        </div>
                    </div>

                    <div className='flex flex-col justify-between items-start gap-[10px] w-full'>
                        <h1 className='font-anton text-[14px]'>Select Subject</h1>
                        <div className='flex justify-between items-center gap-[15px]'>
                            <div className='flex justify-between items-center gap-[5px]'>
                                <input type="radio" name="General Inquiry" id="item1" className='text-darkText' />
                                <label htmlFor="item1" className='text-[12px] font-poppins'>General Inquiry</label>
                            </div>
                            <div className='flex justify-between items-center gap-[5px]'>
                                <input type="radio" name="General Inquiry" id="item1" className='text-darkText' />
                                <label htmlFor="item1" className='text-[12px] font-poppins'>General Inquiry</label>
                            </div>
                            <div className='flex justify-between items-center gap-[5px]'>
                                <input type="radio" name="General Inquiry" id="item1" className='text-darkText' />
                                <label htmlFor="item1" className='text-[12px] font-poppins'>General Inquiry</label>
                            </div>
                            <div className='flex justify-between items-center gap-[5px]'>
                                <input type="radio" name="General Inquiry" id="item1" className='text-darkText' />
                                <label htmlFor="item1" className='text-[12px] font-poppins'>General Inquiry</label>
                            </div>
                        </div>
                    </div>

                    <div className='flex justify-start flex-col w-[100%] group'>
                        <label htmlFor="mail" className='font-anton text-[12px]'>Message</label>
                        <input placeholder='Write your message...' type="email" id='mail' className='outline-none border-b-[1px] border-b-[#8D8D8D] p-2 font-poppins text-[14px] text-[#8D8D8D]' />
                    </div>

                    <div className='flex w-full items-end justify-end'>
                        <button className='bg-secondary text-white px-[24px] font-[500] rounded-[8px] border-secondary border-[2px] py-[8px] send'>Send Message</button>
                    </div>

                </div>
            </div>
        </div>
    </>);
}

export default Contact;