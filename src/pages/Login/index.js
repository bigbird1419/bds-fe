import Button from '../../components/Button'

export default function Login() {
    return (
        <div className="wrapper my-8 mx-auto">
            <div className="container">
                <div className="flex justify-center ">
                    <div className='min-w-96'>
                        <h1 className='text-2xl font-bold mb-6'>Đăng nhập</h1>
                        <form>
                            <div className='flex flex-col mb-3'>
                                <label className='font-medium text-sm'>Tên người dùng</label>
                                <input className='w-full px-3 py-2 rounded-md bg-gray-200 outline-none border-none text-colorSecondary' type='text' />
                            </div>
                            <div className='flex flex-col mb-3'>
                                <label className='font-medium text-sm'>Mật khẩu</label>
                                <input className='w-full px-3 py-2 rounded-md bg-gray-200 outline-none border-none text-colorSecondary' type='password' />
                            </div>
                            <div className='flex justify-center'>
                                <Button secondary className={' px-4 py-2'}>Đăng nhập</Button>
                            </div>
                        </form>
                        <p className='text-xs mt-6'>Bạn chưa có tài khoản?  <Button to={'/signup'} className={'text-colorSecondary text-sm font-medium'}>Đăng ký ngay</Button></p>
                    </div>
                </div>
            </div>
        </div>
    )
}