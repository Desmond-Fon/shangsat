// import man from '../../assets/storyPic.png'
// import service2 from '../../assets/housingService.png'
// import service3 from '../../assets/waterServices.png'


const Gallery = () => {
    return (<>
        <div className="px-[16px] pt-[48px] md:px-[24px] lg:px-[80px] lg:pt-[80px] lg:py-[70px]">
            <h1 className='font-anton text-darkText text-[32px] lg:text-[50px] leading-[35px] lg:leading-[60px] text-center'>Photo Gallery</h1>
            <p className='text-darkText font-poppins text-[16px] lg:text-[18px] pt-[32px] p-[16px] pb-0 lg:p-[32px] lg:pb-0 text-center'>
                Let us take you on a visual journey through our world of excellence. Explore our photo gallery, and see for yourself the standards we uphold in every aspect of Shangsat Nigeria. From the verdant rice fields to the gleaming solar panels, the crystal-clear water bottles to the meticulously furnished apartments, we invite you to witness the beauty that is Shangsat.
            </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 px-[16px] py-[48px] lg:py-0 lg:px-[100px] pb-[40px]">
            <div className="grid gap-4">
                <div>
                    <img className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image.jpg" alt="" />
                </div>
                <div>
                    <img className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-1.jpg" alt="" />
                </div>
                <div>
                    <img className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-2.jpg" alt="" />
                </div>
            </div>
            <div className="grid gap-4">
                <div>
                    <img className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-3.jpg" alt="" />
                </div>
                <div>
                    <img className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-4.jpg" alt="" />
                </div>
                <div>
                    <img className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-5.jpg" alt="" />
                </div>
            </div>
            <div className="grid gap-4">
                <div>
                    <img className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-6.jpg" alt="" />
                </div>
                <div>
                    <img className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-7.jpg" alt="" />
                </div>
                <div>
                    <img className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-8.jpg" alt="" />
                </div>
            </div>
            <div className="grid gap-4">
                <div>
                    <img className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-9.jpg" alt="" />
                </div>
                <div>
                    <img className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-10.jpg" alt="" />
                </div>
                <div>
                    <img className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-11.jpg" alt="" />
                </div>
            </div>
        </div>

    </>);
}

export default Gallery;