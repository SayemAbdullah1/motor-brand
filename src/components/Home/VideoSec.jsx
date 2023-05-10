import video from './../../assets/video/1.mp4'
const VideoSec = () => {
    return (
        <div className="lg:flex my-12 mx-6  rounded-md bg-purple-100 border-green-700 border-4 justify-between ">
            <div className=" sm:flex-col lg:flex py-12 mx-auto my-auto align-center justify-center">
            <div className='sm:text-center flex justify-center'>
                <div>
                        <p>
                            <span className="text-xl">SHOP THE</span><br />
                            <span className="text-3xl">ESSENTIAL COLLECTION</span>
                        </p>
                        <button className="px-24 mt-4 text-white bg-green-500 py-4 hover:bg-green-900">SHOP APPAREL</button>
                </div>
            </div>

           </div>

            <div className='lg:w-[800px] sm:w-full'>
                <video src={video} loop autoPlay muted></video>
            </div>
        </div>
    );
};

export default VideoSec;