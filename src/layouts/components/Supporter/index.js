import supportUrl from '../../../assets/support-bg-6.jpg'
import Button from '../../../components/Button'

const supporters = [
    { phone: '0903.642.123', zalo: '0903.642.123', title: 'HỖ TRỢ ĐĂNG TIN' },
    { phone: '0903.642.123', zalo: '0903.642.123', title: 'HỖ TRỢ ĐĂNG TIN' },
    { phone: '0903.642.123', zalo: '0903.642.123', title: 'PHẢN ÁNH/KHIẾU NẠI' },
]

export default function Supporter() {
    return (
        <div className="wrapper mt-6">
            <div className="container max-w-4xl p-4 shadow-md">
                <div className="row">
                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                        <div className='mt-4'><img src={supportUrl} alt='' className='w-full h-auto' /></div>
                    </div>
                    <div className='col-xl-6 col-lg-6 col-md-6 col-sm-12'>
                        <div className='mt-4'>
                            <div className='text-2xl text-colorPrimary text-center mb-4'>
                                <i className="fa-regular fa-circle-question"></i>
                                <h3 className='font-bold text-black'>Bạn cần hỗ trợ?</h3>
                            </div>
                            <div className='row'>
                                {supporters.map((supporter, i) => (
                                    <div className='col-xl-6 col-lg-6 col-md-6 col-sm-12' key={i}>
                                        <div className='flex flex-col justify-center items-center mb-4 text-xs font-medium'>
                                            <p className='uppercase text-sm text-colorPrimary mb-2'>{supporter.title}</p>
                                            <Button className={'mb-2'} href={`tel: ${supporter.phone}`}>
                                                Điện thoại: {supporter.phone}
                                            </Button>
                                            <Button className={''} href={`tel: ${supporter.phone}`}>Zalo: {supporter.zalo}</Button>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}