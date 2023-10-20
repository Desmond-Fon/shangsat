import solar1 from '../../assets/solar1p.jpeg'
import solar from '../../assets/solar2p.jpeg'
import rice1 from '../../assets/rice1l.jpeg'
// import rice2 from '../../assets/rice2l.jpeg'
import rice3 from '../../assets/rice3.jpeg'
// import rice4 from '../../assets/waterServices.png'
// import room1 from '../../assets/room1p.jpeg'
// import room2 from '../../assets/room2p.jpeg'
import room3 from '../../assets/room3p.jpeg'
import room4 from '../../assets/room4p.jpeg'
// import rices from '../../assets/rices.jpeg'
import warehouse from '../../assets/warehouse.jpeg'
import bedroom from '../../assets/bedroom.jpeg'
import bathroom from '../../assets/bathroom.jpeg'
import office from '../../assets/officel.jpeg'



const Gallery = () => {
    return (<>
        <div className="px-[16px] pt-[48px] md:px-[24px] lg:px-[80px] lg:pt-[80px] lg:py-[70px]">
            <h1 className='font-anton text-darkText text-[32px] lg:text-[50px] leading-[35px] lg:leading-[60px] text-center'>Photo Gallery</h1>
            <p className='text-darkText font-poppins text-[16px] lg:text-[18px] pt-[32px] p-[16px] pb-0 lg:p-[32px] lg:pb-0 text-center'>
                Let us take you on a visual journey through our world of excellence. Explore our photo gallery, and see for yourself the standards we uphold in every aspect of Shangsat Nigeria. From the verdant rice fields to the gleaming solar panels, the crystal-clear water bottles to the meticulously furnished apartments, we invite you to witness the beauty that is Shangsat.
            </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 px-[16px] py-[48px] lg:py-0 lg:px-[100px] pb-[40px]">
            <div className="grid gap-[18px]">
                <div>
                    <img className="h-auto max-w-full rounded-lg" src={bedroom} alt="" />
                </div>
                <div>
                    <img className="h-auto max-w-full rounded-lg" src={solar1} alt="" />
                </div>
                <div>
                    <img className="h-auto max-w-full rounded-lg" src={rice1} alt="" />
                </div>
            </div>
            <div className="grid gap-4">
                <div>
                    <img className="h-auto max-w-full rounded-lg" src={office} alt="" />
                </div>
                <div>
                    <img className="h-auto max-w-full rounded-lg" src={room4} alt="" />
                </div>
                <div>
                    <img className="h-auto max-w-full rounded-lg" src={warehouse} alt="" />
                </div>
                {/* <div>
                    <img className="h-auto max-w-full rounded-lg" src={solar} alt="" />
                </div>
                <div>
                    <img className="h-auto max-w-full rounded-lg" src={rice2} alt="" />
                </div> */}
            </div>
            <div className="grid gap-4">
                {/* <div>
                    <img className="h-auto max-w-full rounded-lg" src={rice3} alt="" />
                </div> */}
                {/* <div>
                    <img className="h-auto max-w-full rounded-lg" src={office} alt="" />
                </div>
                <div>
                <img className="h-auto max-w-full rounded-lg" src={rice2} alt="" />
            </div> */}
                <div>
                    <img className="h-auto max-w-full rounded-lg" src={rice3}alt="" />
                </div>
                {/* <div>
                    <img className="h-auto max-w-full rounded-lg" src={rice2} alt="" />
                </div> */}
                <div>
                    <img className="h-auto max-w-full rounded-lg" src={room3} alt="" />
                </div>
            </div>
            <div className="grid gap-4">
                {/* <div>
                    <img className="h-auto max-w-full rounded-lg" src={warehouse} alt="" />
                </div> */}
                <div>
                    <img className="h-auto max-w-full rounded-lg" src={bathroom} alt="" />
                </div>
                {/* <div>
                    <img className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-11.jpg" alt="" />
                </div> */}
                <div>
                    <img className="h-auto max-w-full rounded-lg" src={solar} alt="" />
                </div>
            </div>
        </div>

    </>);
}

export default Gallery;