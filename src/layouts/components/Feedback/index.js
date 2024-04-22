import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';

import feedbackUrl from '../../../assets/feedback-rafiki.svg'

const feedbacks = [
    { username: 'Cô Huyền Nga (Tp.HCM)', content: ' Do công việc nên gia đình tôi quyết định chuyển ra Hà Nội sinh sống. Căn nhà ở Hồ Chí Minh vì vậy bỏ trống. Tôi đã rất mong muốn có thể nhanh chóng bán đi để giải quyết hoàn toàn các vấn đề trước khi ra Hà Nội. Sau khi được con gái gợi ý và hỗ trợ đăng tin trên website bds123.vn, căn nhà cần bán của tôi đã nhanh chóng tiếp cận với hàng trăm người có nhu cầu. Rất đông người cần mua đã liên hệ và sau khi thương thảo, tôi đã bán nhà nhanh chóng, sớm hơn dự định hơn 1 tuần. Tôi nghĩ rằng những website trung gian như bds123.vn thực sự tiện lợi và đáng được biết đến rộng rãi trong lĩnh vực nhà đất. ' },
    { username: 'Cô Huyền Nga (Tp.HCM)', content: ' Do công việc nên gia đình tôi quyết định chuyển ra Hà Nội sinh sống. Căn nhà ở Hồ Chí Minh vì vậy bỏ trống. Tôi đã rất mong muốn có thể nhanh chóng bán đi để giải quyết hoàn toàn các vấn đề trước khi ra Hà Nội. Sau khi được con gái gợi ý và hỗ trợ đăng tin trên website bds123.vn, căn nhà cần bán của tôi đã nhanh chóng tiếp cận với hàng trăm người có nhu cầu. Rất đông người cần mua đã liên hệ và sau khi thương thảo, tôi đã bán nhà nhanh chóng, sớm hơn dự định hơn 1 tuần. Tôi nghĩ rằng những website trung gian như bds123.vn thực sự tiện lợi và đáng được biết đến rộng rãi trong lĩnh vực nhà đất. ' },
    { username: 'Cô Huyền Nga (Tp.HCM)', content: ' Do công việc nên gia đình tôi quyết định chuyển ra Hà Nội sinh sống. Căn nhà ở Hồ Chí Minh vì vậy bỏ trống. Tôi đã rất mong muốn có thể nhanh chóng bán đi để giải quyết hoàn toàn các vấn đề trước khi ra Hà Nội. Sau khi được con gái gợi ý và hỗ trợ đăng tin trên website bds123.vn, căn nhà cần bán của tôi đã nhanh chóng tiếp cận với hàng trăm người có nhu cầu. Rất đông người cần mua đã liên hệ và sau khi thương thảo, tôi đã bán nhà nhanh chóng, sớm hơn dự định hơn 1 tuần. Tôi nghĩ rằng những website trung gian như bds123.vn thực sự tiện lợi và đáng được biết đến rộng rãi trong lĩnh vực nhà đất. ' },
]

export default function Feedback() {
    return (
        <div className="wrapper">
            <div className="container max-w-5xl my-8">
                <h2 className="text-2xl font-semibold mb-3">Khách hàng nói về chúng tôi</h2>
                <div className='row'>
                    <div className='col-xl-8 col-lg-8 col-md-12 col-sm-12'>
                        <div className='mt-2'>
                            <div className='relative'>
                                <Swiper
                                    slidesPerView={1}
                                    loop={true}
                                    pagination={{
                                        clickable: true,
                                        type: ''
                                    }}
                                    navigation={{
                                        prevEl: '.prev',
                                        nextEl: '.next'
                                    }}
                                    modules={[Pagination, Navigation]}
                                    className="mySwiper w-10/12 m-auto"
                                >
                                    {feedbacks.map((feedback, i) => (
                                        <SwiperSlide key={i}>
                                            <div className='p-2'>
                                                <h3 className='text-sm font-bold mb-2'>{feedback.username}</h3>
                                                <p className='text-sm'>{feedback.content}</p>
                                            </div>
                                        </SwiperSlide>
                                    ))}
                                </Swiper>
                                <div className='prev absolute w-8 h-8 flex justify-center items-center ml-2 left-0 z-10 top-1/2 translate-y-[-50%] text-gray-600 rounded-full cursor-pointer shadow-md'>
                                    <i className="fa-solid fa-angle-left text-colorSecondary"></i>
                                </div>
                                <div className='next absolute w-8 h-8 flex justify-center items-center mr-2 right-0 z-10 top-1/2 translate-y-[-50%] text-gray-600 rounded-full cursor-pointer shadow-md'>
                                    <i className="fa-solid fa-angle-right text-colorSecondary"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='col-xl-4 col-lg-4 col-md-12 col-sm-12'>
                        <div className='mt-2'>
                            <img src={feedbackUrl} alt='' className='w-full'/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}