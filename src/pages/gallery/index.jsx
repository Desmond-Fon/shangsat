import man from '../../assets/storyPic.png'
import service2 from '../../assets/housingService.png'
import service3 from '../../assets/waterServices.png'


const Gallery = () => {
    return (<>
        <div className="p-[80px] w-full h-[850px] flex justify-between items-center gap-[15px]">
            <div className="flex justify-between w-full gap-[15px] flex-col items-center h-[100%] bg-white">
                <div className="h-[30%] bg-blue-300 w-full">
                    <img src={service2} alt="" className='h-[100%] w-[100%] object-cover' />
                </div>
                <div className="h-[70%]  w-full flex justify-between items-center flex-col gap-[15px]">
                    <div className="flex justify-between items-center w-full h-full gap-[15px]">
                        <div className="w-[100%] h-[100%] bg-blue-500">
                            <img src={man} alt="" className='h-[100%] w-[100%] object-cover' />
                        </div>
                        <div className="w-[100%] h-[100%] bg-blue-700">
                            <img src={man} alt="" className='h-[100%] w-[100%] object-cover' /></div>
                    </div>
                    <div className="flex justify-between items-center w-full h-full gap-[15px]">
                        <div className="w-[100%] h-[100%] bg-blue-700">
                            <img src={man} alt="" className='h-[100%] w-[100%] object-cover' />
                        </div>
                        <div className="w-[100%] h-[100%] bg-blue-500">
                            <img src={man} alt="" className='h-[100%] w-[100%] object-cover' />
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex justify-between w-full gap-[15px] flex-col items-center h-[100%]">
                <div className="h-[70%]  w-full flex justify-between items-center gap-[15px]">
                    <div className="flex justify-between items-center w-full h-full gap-[15px]">
                        <div className="w-[100%] h-[100%] bg-red-500">
                            <img src={service2} alt="" className='h-[100%] w-[100%] object-cover' />
                        </div>
                    </div>
                    <div className="flex justify-between items-center w-full h-full flex-col gap-[15px]">
                        <div className="w-[100%] h-[100%] bg-red-700">
                            <img src={man} alt="" className='h-[100%] w-[100%] object-cover' />
                        </div>
                        <div className="w-[100%] h-[100%] bg-red-500">
                            <img src={man} alt="" className='h-[100%] w-[100%] object-cover' />
                        </div>
                    </div>
                </div>
                <div className="h-[30%] bg-red-300 w-full">
                    <img src={service3} alt="" className='h-[100%] w-[100%] object-cover' />
                </div>
            </div>
        </div>
    </>);
}

export default Gallery;