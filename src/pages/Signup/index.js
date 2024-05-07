import welcomeImg from '../../assets/Welcome-pana.svg'
import Button from '../../components/Button'

export default function Signup() {
    return (
        <div className="wrapper my-8 max-w-6xl mx-auto">
            <div className="container">
                <div className="row">
                    <div className="col-6">
                        <img src={welcomeImg} alt='' className='w-full' />
                    </div>
                    <div className='col-6'>
                        <div>
                            <h1 className='text-2xl font-bold mb-6'>Tạo tài khoản</h1>
                            <form>
                                <div className='flex flex-col mb-3'>
                                    <label className='font-medium text-sm'>Tên người dùng</label>
                                    <input className='w-full px-3 py-2 rounded-md bg-gray-200 outline-none border-none text-colorSecondary' type='text' />
                                </div>
                                <div className='flex flex-col mb-3'>
                                    <label className='font-medium text-sm'>Số điện thoại</label>
                                    <input className='w-full px-3 py-2 rounded-md bg-gray-200 outline-none border-none text-colorSecondary' type='text' />
                                </div>
                                <div className='flex flex-col mb-3'>
                                    <label className='font-medium text-sm'>Họ tên của bạn</label>
                                    <input className='w-full px-3 py-2 rounded-md bg-gray-200 outline-none border-none text-colorSecondary' type='text' />
                                </div>
                                <div className='flex flex-col mb-3'>
                                    <label className='font-medium text-sm'>Tạo mật khẩu</label>
                                    <input className='w-full px-3 py-2 rounded-md bg-gray-200 outline-none border-none text-colorSecondary' type='password' />
                                </div>
                                <div className='flex justify-center'>
                                    <Button secondary className={' px-4 py-2'}>Tạo tài khoản</Button>
                                </div>
                            </form>
                            <p className='text-xs mt-6'>Bạn đã có tài khoản? <Button to={'/login'} className={'text-colorSecondary text-sm font-medium'}>Đăng nhập ngay</Button></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}