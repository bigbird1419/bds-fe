import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';

export default function SwiperImg({ data }) {
    //chuaw commit
    return (
        <div className='relative'>
            <Swiper
                slidesPerView={1}
                loop={true}
                pagination={{
                    clickable: true,
                    type: 'fraction'
                }}
                navigation={{
                    prevEl: '.prev',
                    nextEl: '.next'
                }}
                modules={[Pagination, Navigation]}
                className="mySwiper h-80"
            >
                {data.map((urlImg, i) => (
                    <SwiperSlide key={i}>
                        <div className='bg-black-400 px-4 h-full w-full'>
                            <img src={urlImg} alt='' className='h-full object-cover mx-auto' />
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
            <div className='prev absolute w-8 h-8 flex justify-center items-center ml-2 left-0 z-10 top-1/2 translate-y-[-50%] text-gray-600 rounded-full cursor-pointer'>
                <i className="fa-solid fa-angle-left text-colorPrimary"></i>
            </div>
            <div className='next absolute w-8 h-8 flex justify-center items-center mr-2 right-0 z-10 top-1/2 translate-y-[-50%] text-gray-600 rounded-full cursor-pointer'>
                <i className="fa-solid fa-angle-right text-colorPrimary"></i>
            </div>
        </div>
    )
}