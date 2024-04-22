import summaryUrl from '../../../assets/select-house-rafiki-3.svg'
import callCenterUrl from '../../../assets/call-center.svg'
import forRentUrl from '../../../assets/for-rent.svg'
import forSaleUrl from '../../../assets/for-sale.svg'
import Button from '../../../components/Button'

const summarys = [
    { title: 'người dùng', value: '50.000+', img: callCenterUrl },
    { title: 'bất động sản bán', value: '49.338+', img: forSaleUrl },
    { title: 'bất động sản cho thuê', value: '14.085+', img: forRentUrl },
]

export default function Summary() {

    return (
        <div className="wrapper">
            <div className="container max-w-5xl mt-6">
                <div className="row">
                    <div className="col-xl-4 col-lg-4 col-md-12 col-sm-12">
                        <div>
                            <img src={summaryUrl} alt="" className='w-full h-auto' />
                        </div>
                    </div>
                    <div className="col-xl-8 col-lg-8 col-md-12 col-sm-12">
                        <div>
                            <div className='text-center'>
                                <h3 className='text-2xl font-bold'>Bán và cho thuê cùng Bds123.vn</h3>
                                <p className='text-sm text-gray-500'>Nền tảng giao dịch bất động sản hàng đầu Việt Nam</p>
                            </div>
                            <div className='row'>
                                {summarys.map((summary, i) => (
                                    <div className='col-xl-4 col-lg-4 col-md-12 col-sm-12' key={i}>
                                        <div className='my-3 rounded border border-gray-100 shadow-xs p-2  transition-all duration-300 hover:translate-y-[-5%]'>
                                            <div className='flex justify-center my-3 '>
                                                <div className='bg-gray-200 w-1/2 p-2 rounded-full'>
                                                    <img src={summary.img} alt='' className='w-full ' />
                                                </div>
                                            </div>
                                            <div className='text-center'>
                                                <h3 className='text-xl font-bold'>{summary.value}</h3>
                                                <p className='text-sm text-gray-800'>{summary.title}</p>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <div className='my-3 text-center'>
                                <Button to={'/'} secondary className={'px-3 py-2 opacity-90 hover:opacity-100 transition-all duration-300'}>Bắt đầu ngay</Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}