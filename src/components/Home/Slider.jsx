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
        <div className="bg-[url(https://content2.kawasaki.com/ContentStorage/KMC/HomePagePromo/3266/3ba65274-89b9-4daf-8e55-894d5a14f590.jpg?w=1920)] sm:object-cover">
            <div className="border-b-4 mb-1 border-green-600 ">
                <div className=' border-b-3 pb-1 border-green-600'>
                    <div className='grid grid-cols-3 gap-4  border-b-2 p-4 border-green-600'>
                        <div className='col-span-1'>
                            <h2 className='text-5xl lg:mt-24 text-white flex justify-content-center align-item-center'>Let the good times role!</h2>
                        </div>
                        <div className='col-span-2 lg:d-block'>
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
    );
};

export default Slider;