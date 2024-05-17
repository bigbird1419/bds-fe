import { useState } from 'react'

import welcomeImg from '../../assets/Welcome-pana.svg'
import Button from '../../components/Button'
import routes from '../../constants/routes'
import { signUp } from '../../services/userService'

export default function Signup() {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [fullname, setFullname] = useState('')
    const [phone, setPhone] = useState('')
    const [email, setEmail] = useState('')
    const [address, setAddress] = useState('')

    const hanldeCreateAccount = async (e) => {
        e.preventDefault()
        const res = await signUp({
            username,
            password,
            fullname,
            phone,
            email,
            address,
            urlImg: 'https://bds123.vn/images/default-user.svg',
            roles: ['user']
        })
        if (res?.status === 'Ok') {
            alert('Đăng ký thành công')
        }
    }

    return (
        <div className="wrapper my-8">
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
                                    <label className='font-medium text-sm'>Họ tên</label>
                                    <input className='w-full px-3 py-2 rounded-md bg-gray-200 outline-none border-none text-colorSecondary' type='text' value={fullname} onChange={e => setFullname(e.target.value)} />
                                </div>
                                <div className='flex flex-col mb-3'>
                                    <label className='font-medium text-sm'>Tên người dùng</label>
                                    <input className='w-full px-3 py-2 rounded-md bg-gray-200 outline-none border-none text-colorSecondary' type='text' value={username} onChange={e => setUsername(e.target.value)} />
                                </div>
                                <div className='flex flex-col mb-3'>
                                    <label className='font-medium text-sm'>Mật khẩu</label>
                                    <input className='w-full px-3 py-2 rounded-md bg-gray-200 outline-none border-none text-colorSecondary' type='password' value={password} onChange={e => setPassword(e.target.value)} />
                                </div>
                                <div className='flex flex-col mb-3'>
                                    <label className='font-medium text-sm'>Số điện thoại</label>
                                    <input className='w-full px-3 py-2 rounded-md bg-gray-200 outline-none border-none text-colorSecondary' type='text' value={phone} onChange={e => setPhone(e.target.value)} />
                                </div>
                                <div className='flex flex-col mb-3'>
                                    <label className='font-medium text-sm'>Email</label>
                                    <input className='w-full px-3 py-2 rounded-md bg-gray-200 outline-none border-none text-colorSecondary' type='text' value={email} onChange={e => setEmail(e.target.value)} />
                                </div>
                                <div className='flex flex-col mb-3'>
                                    <label className='font-medium text-sm'>Địa chỉ</label>
                                    <input className='w-full px-3 py-2 rounded-md bg-gray-200 outline-none border-none text-colorSecondary' type='text' value={address} onChange={e => setAddress(e.target.value)} />
                                </div>
                                <div className='flex justify-center'>
                                    <Button secondary className={' px-4 py-2'} onClick={e => hanldeCreateAccount(e)}>Tạo tài khoản</Button>
                                </div>
                            </form>
                            <p className='text-xs mt-6'>Bạn đã có tài khoản? <Button to={routes.login} className={'text-colorSecondary text-sm font-medium'}>Đăng nhập ngay</Button></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}