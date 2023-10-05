import ellipse from '../../assets/ellipse.png'
import contactMeta from '../../assets/contactMeta.png'
import contactInsta from '../../assets/contactInsta.png'
import contactX from '../../assets/contactX.png'
import contactMail from '../../assets/contactMail.svg'
import contactLocation from '../../assets/contactLocation.svg'
import contactPhone from '../../assets/contactPhone.svg'
import { useState } from 'react'

const Contact = () => {
    const [first, setFirst] = useState('')
    const [last, setLast] = useState('')
    const [email, setEmail] = useState('')
    const [category, setCategory] = useState('')
    const [message, setMessage] = useState('')
    const [number, setNumber] = useState('')

    return (<>
        <div className="px-[16px] pt-[48px] md:px-[24px] lg:px-[80px] lg:pt-[80px] pb-[30px] lg:py-[70px]">
            <h1 className='font-anton text-darkText text-[32px] lg:text-[50px] leading-[35px] lg:leading-[60px] text-center'>Contact</h1>
        </div>
        <div className="mx-[32px] lg:mx-[100px] rounded-[10px] mb-[40px] boxShad">
            <div className='p-[10px] flex-col lg:flex-row w-full flex justify-between items-center lg:items-start gap-[0px]'>
                <div className='w-[100%] lg:w-[45%] bg-primary relative rounded-[10px] p-[15px] lg:p-[40px] flex flex-col justify-between items-center lg:items-start gap-[60px] lg:gap-[140px]'>
                    <div className='flex flex-col items-center lg:items-start gap-[6px]'>
                        <h1 className='font-anton text-[20px] lg:text-[28px] text-white text-center lg:text-left'>Contact Information</h1>
                        <p className='text-[#C9C9C9] font-poppins text-[11px] lg:text-[18px] text-center lg:text-left'>Say something to start a live chat!</p>
                    </div>
                    <div className='flex flex-col items-center lg:items-start justify-between gap-[15px] lg:gap-[50px]'>
                        <div className='flex flex-col lg:flex-row justify-center lg:justify-start items-center gap-[10px] lg:gap-[25px]'>
                            <img src={contactPhone} alt="" />
                            <p className='text-[12px] lg:text-[16px] text-center lg:text-left font-poppins text-white'>+234-8036220461, +86-13236958191</p>
                        </div>
                        <div className='flex flex-col lg:flex-row justify-center lg:justify-start  items-center gap-[10px] lg:gap-[25px]'>
                            <img src={contactMail} alt="" />
                            <p className='text-[12px] lg:text-[16px] text-center lg:text-left font-poppins text-white'>shangsatnigltd@yahoo.com</p>
                        </div>
                        <div className='flex flex-col lg:flex-row justify-center lg:justify-start  items-center gap-[10px] lg:gap-[25px]'>
                            <img src={contactLocation} alt="" />
                            <p className='text-[12px] lg:text-[16px] text-center lg:text-left font-poppins text-white'>No. 57 Zarmaganda Fwavwei <br /> Rayfield, Jos Plateau State</p>
                        </div>
                    </div>
                    <div className='flex justify-start items-center gap-[24px] z-20'>
                        <img src={contactMeta} alt="" />
                        <img src={contactInsta} alt="" />
                        <img src={contactX} alt="" />
                    </div>

                    <div className='absolute bottom-0 right-0 z-0 w-[30%] lg:w-[45%]'>
                        <img src={ellipse} alt="" className='w-full rounded-b-[10px]' />
                    </div>
                </div>
                <div className='w-[100%] lg:w-[55%] flex flex-col justify-start items-start px-[20px] py-[30px] lg:p-[50px] gap-[45px] h-full'>
                    <div className='flex flex-col lg:flex-row justify-between items-center gap-[40px] w-full'>
                        <div className='flex justify-start flex-col w-[100%] lg:w-[50%] group'>
                            <label htmlFor="fName" className='font-anton text-[12px]'>First Name</label>
                            <input type="text" id='fName' className='outline-none border-b-[1px] border-b-[#8D8D8D] p-2 font-poppins text-[14px] text-[#8D8D8D]' value={first} onChange={(e) => setFirst(e.target.value)}/>
                        </div>

                        <div className='flex justify-start flex-col w-[100%] lg:w-[50%] group'>
                            <label htmlFor="lName" className='font-anton text-[12px] item'>Last Name</label>
                            <input type="text" id='lName' className='outline-none border-b-[1px] border-b-[#8D8D8D] p-2 font-poppins text-[14px] text-[#8D8D8D]' value={last} onChange={(e) => setLast(e.target.value)}/>
                        </div>
                    </div>

                    <div className='flex flex-col lg:flex-row justify-between items-center gap-[40px] w-full'>
                        <div className='flex justify-start flex-col w-[100%] lg:w-[50%] group'>
                            <label htmlFor="mail" className='font-anton text-[12px]'>Email</label>
                            <input type="email" id='mail' className='outline-none border-b-[1px] border-b-[#8D8D8D] p-2 font-poppins text-[14px] text-[#8D8D8D]' value={email} onChange={(e) => setEmail(e.target.value)} />
                        </div>

                        <div className='flex justify-start flex-col w-[100%] lg:w-[50%] group'>
                            <label htmlFor="lName" className='font-anton text-[12px]'>Phone Number</label>
                            <input type="text" id='lName' className='outline-none border-b-[1px] border-b-[#8D8D8D] p-2 font-poppins text-[14px] text-[#8D8D8D]' value={number} onChange={(e) => setNumber(e.target.value)}/>
                        </div>
                    </div>

                    <div className='flex flex-col justify-between items-start gap-[10px] w-full'>
                        <h1 className='font-anton text-[14px]'>Select Subject</h1>
                        <div className='flex flex-wrap justify-between items-center gap-[8px]'>
                            <div className='flex justify-between items-center gap-[5px]'>
                                <input value='Shangsat Housing' onChange={(e) => setCategory(e.target.value)} type="radio" name="General Inquiry" id="item1" className='text-darkText' />
                                <label htmlFor="item1" className='text-[12px] font-poppins'>Shangsat Housing</label>
                            </div>
                            <div className='flex justify-between items-center gap-[5px]'>
                                <input value='Shangsat Rice' onChange={(e) => setCategory(e.target.value)} type="radio" name="General Inquiry" id="item2" className='text-darkText' />
                                <label htmlFor="item2" className='text-[12px] font-poppins'>Shangsat Rice</label>
                            </div>
                            <div className='flex justify-between items-center gap-[5px]'>
                                <input value='Shangsat Solar' onChange={(e) => setCategory(e.target.value)} type="radio" name="General Inquiry" id="item3" className='text-darkText' />
                                <label htmlFor="item3" className='text-[12px] font-poppins'>Shangsat Solar</label>
                            </div>
                            <div className='flex justify-between items-center gap-[5px]'>
                                <input value='Shangsat Water' onChange={(e) => setCategory(e.target.value)} type="radio" name="General Inquiry" id="item4" className='text-darkText' />
                                <label htmlFor="item4" className='text-[12px] font-poppins'>Shangsat Water</label>
                            </div>
                        </div>
                    </div>

                    <div className='flex justify-start flex-col w-[100%] group'>
                        <label htmlFor="mail" className='font-anton text-[12px]'>Message</label>
                        <input value={message} onChange={(e) => setMessage(e.target.value)} placeholder='Write your message...' type="email" id='mail' className='outline-none border-b-[1px] border-b-[#8D8D8D] p-2 font-poppins text-[14px] text-[#8D8D8D]' />
                    </div>

                    <div className='flex w-full items-end justify-center lg:justify-end'>
                        <a href={`mailto:info@shangsatnigeria.com?subject=${category}&body=Name: ${first} ${last}%0D%0A Email: ${email}%0D%0A Phone: ${number}%0D%0A Message: ${message}`} className='bg-secondary w-full lg:w-[40%] text-white px-[24px] font-[500] text-center rounded-[8px] border-secondary border-[2px] py-[8px] send'>Send Message
                        </a>
                    </div>

                </div>
            </div>
        </div>
    </>);
}

export default Contact;