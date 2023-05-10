import one from './../../assets/1.jpeg'
import two from './../../assets/2.jpeg'
import three from './../../assets/3.jpeg'
import four from './../../assets/4.jpeg'
import five from './../../assets/5.jpeg'
import six from './../../assets/6.jpeg'
import eight from './../../assets/8.jpeg'
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import "./styles.css";

// import required modules
import { Pagination } from "swiper";


const Slider = () => {
    return (
        <div>
            <div className="bg-[url(https://content2.kawasaki.com/ContentStorage/KMC/HomePagePromo/3266/3ba65274-89b9-4daf-8e55-894d5a14f590.jpg?w=1920)] sm:object-cover">
                <div className="border-b-4 mb-1 border-green-600 ">
                    <div className=' border-b-3 pb-1 border-green-600'>
                        <div className='grid grid-cols-3 gap-4  border-b-2 p-4 border-green-600'>
                            <div className='lg:col-span-1 col-span-3'>
                                <h2 className='text-5xl lg:mt-24 text-white flex justify-content-center align-item-center'>Let the good times role!</h2>
                                <button className="px-12 mt-4 text-white bg-green-500 py-4 hover:bg-green-900">Learn more</button>
                            </div>
                            <div className='col-span-2 hidden lg:block object-contain'>
                                <Swiper
                                    slidesPerView={4}
                                    centeredSlides={true}
                                    spaceBetween={30}
                                    grabCursor={true}
                                    pagination={{
                                        clickable: true,
                                    }}
                                    modules={[Pagination]}
                                    className="mySwiper"
                                >
                                    <SwiperSlide >
                                        <img src={one} alt="" />
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <img src={two} alt="" />
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <img src={three} alt="" />
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <img src={four} alt="" />
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <img src={five} alt="" />
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <img src={six} alt="" />
                                    </SwiperSlide>

                                    <SwiperSlide>
                                        <img src={eight} alt="" />
                                    </SwiperSlide>

                                </Swiper>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="mx-auto w-0 h-0 
                lg:border-l-[1200px] border-l-[300px] border-l-transparent
                lg:border-t-[75px] border-t-[45px] border-t-green-500
                border-r-[50px] border-r-transparent">
            </div>

        </div>
    );
};

export default Slider;