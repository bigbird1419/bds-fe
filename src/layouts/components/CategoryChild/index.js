import routes from '../../../constants/routes'
import forSale from '../../../assets/for-sale.svg'
import forRent from '../../../assets/for-rent.svg'
import Button from '../../../components/Button'

const sales = [
    { path: routes.muaban, title: 'Bán căn chung cư' },
    { path: routes.muaban, title: 'Bán nhà, bán nhà riêng' },
    { path: routes.muaban, title: 'Bán nhà mặt tiền (mặt phố)' },
    { path: routes.muaban, title: 'Bán đất nền dự án' },
    { path: routes.muaban, title: 'Bán biệt thự, nhà liền kề' },
    { path: routes.muaban, title: 'Bán đất' },
    { path: routes.muaban, title: 'Bán cửa hàng, kiot, shophouse' },
    { path: routes.muaban, title: 'Bán nhà trọ, dãy phòng trọ' },
    { path: routes.muaban, title: 'Bán kho, nhà xưởng' },
    { path: routes.muaban, title: 'Bán nhà hàng, khách sạn, nhà nghỉ' },
]
const rents = [
    { path: routes.chothue, title: 'Cho thuê căn chung cư' },
    { path: routes.chothue, title: 'Cho thuê nhà, Cho thuê nhà riêng' },
    { path: routes.chothue, title: 'Cho thuê nhà mặt tiền (mặt phố)' },
    { path: routes.chothue, title: 'Cho thuê đất nền dự án' },
    { path: routes.chothue, title: 'Cho thuê biệt thự, nhà liền kề' },
    { path: routes.chothue, title: 'Cho thuê đất' },
    { path: routes.chothue, title: 'Cho thuê cửa hàng, kiot, shophouse' },
    { path: routes.chothue, title: 'Cho thuê nhà trọ, dãy phòng trọ' },
    { path: routes.chothue, title: 'Cho thuê kho, nhà xưởng' },
    { path: routes.chothue, title: 'Cho thuê nhà hàng, khách sạn, nhà nghỉ' },
]

export default function CategoryChild() {
    return (
        <div className="wrapper">
            <div className="container max-w-6xl my-8">
                <h1 className="text-center text-3xl font-bold mb-2">Tìm kiếm bất động sản giá tốt</h1>
                <p className="text-gray-400 text-center text-sm">Bds123 là kênh bất động sản số 1 tại Việt Nam. Hiện có 280.717+ tin rao mua bán & cho thuê BDS, nhà đất như: căn hộ, đất nền, nhà riêng. Đăng tin bất động sản hiệu quả với 1.000.000+ mỗi tháng.</p>
                <div className='my-3'>
                    <div className="row">
                        <div className="col-6">
                            <div className='h-full p-3 rounded border-1 border-gray-100'>
                                <div className="flex mb-3">
                                    <div className='rounded-full p-2 bg-gray-200 mr-4'>
                                        <img src={forSale} alt="..." className="w-20 rounded-full object-cover" />
                                    </div>
                                    <div>
                                        <h3 className='text-2xl font-semibold'>Mua bán nhà đất</h3>
                                        <p className='text-sm text-gray-400'>Tìm kiếm thông tin mua bán nhà đất với nhiều loại diện tích, giá cả, đầy đủ hình ảnh, pháp lý minh bạch rõ ràng.</p>
                                    </div>
                                </div>
                                <div>
                                    <div className='row'>
                                        {sales.map((category, i) => (
                                            <div className='col-6' key={i}>
                                                <Button to={category.path} className={'text-md hover:text-colorPrimary duration-300 transition-all mb-2 truncate text-ellipsis block w-full'}>
                                                    <i className="fa-solid fa-angle-right mr-3 text-colorPrimary text-xs"></i>
                                                    {category.title}
                                                </Button>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-6">
                            <div className='h-full p-3 rounded border-1 border-gray-100'>
                                <div className="flex mb-3">
                                    <div className='rounded-full p-2 bg-gray-200 mr-4'>
                                        <img src={forRent} alt="..." className="w-20 rounded-full object-cover" />
                                    </div>
                                    <div>
                                        <h3 className='text-2xl font-semibold'>Cho thuê nhà đất</h3>
                                        <p className='text-sm text-gray-400'>Hiện tại có rất nhiều tin đăng cho thuê, tha hồ để bạn tìm kiếm và lựa chọn sản phẩm phù hợp.</p>
                                    </div>
                                </div>
                                <div>
                                    <div className='row'>
                                        {rents.map((category, i) => (
                                            <div className='col-6' key={i}>
                                                <Button to={category.path} className={'text-md hover:text-colorPrimary duration-300 transition-all mb-2 truncate text-ellipsis block w-full'}>
                                                    <i className="fa-solid fa-angle-right mr-3 text-colorPrimary text-xs"></i>
                                                    {category.title}
                                                </Button>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* <div className="col-6">
                            <div className='h-full p-3 rounded border-1 border-gray-100'>
                                <div className="flex mb-3">
                                    <div className='w-1/4 rounded-full p-2 bg-gray-200 mr-4'>
                                        <img src={forRent} alt="..." className="w-full rounded-full object-cover" />
                                    </div>
                                    <div>
                                        <h3 className='text-2xl font-semibold'>Cho thuê nhà đất</h3>
                                        <p className='text-sm text-gray-400'>Hiện tại có rất nhiều tin đăng cho thuê, tha hồ để bạn tìm kiếm và lựa chọn sản phẩm phù hợp.</p>
                                    </div>
                                </div>
                                <div>
                                    <div className='row'>
                                        {rents.map((category, i) => (
                                            <div className='col-6' key={i}>
                                                <Button to={category.path} className={'text-md hover:text-colorPrimary duration-300 transition-all mb-2 truncate text-ellipsis block w-full'}>
                                                    <i className="fa-solid fa-angle-right mr-3 text-colorPrimary text-xs"></i>
                                                    {category.title}
                                                </Button>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div> */}
                    </div>
                </div>
            </div>
        </div>
    )
}