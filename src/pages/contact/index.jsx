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
            <div className='p-[10px] w-full flex justify-between items-center gap-[10px]'>
                <div className='w-[45%] bg-primary relative rounded-[10px] p-[40px] flex flex-col justify-between items-start gap-[120px]'>
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
                            <p className='font-poppins text-white'>No. 57 Zarmaganda Fwavwei Rayfield, Jos Plateau State</p>
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
                <div className='w-[55%]'></div>
            </div>
        </div>
    </>);
}

export default Contact;