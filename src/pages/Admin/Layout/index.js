import { Link } from 'react-router-dom'
import adminCategory from '../../../constants/adminCategory'
import Menu from '../components/Menu'
import { useState } from 'react'
import Button from '../../../components/Button'

export default function LayoutAdmin({ children }) {
    const [isShowNav, setIsShowNav] = useState(false)

    const hanldeToggleShowNav = () => {
        setIsShowNav(e => !e)
    }

    return (
        <div className="wrapper ">
            <div className='container-fluid'>
                <div className="row">
                    <div className={isShowNav ? 'col-xl-2 col-lg-2 col-md-12 col-sm-12' : 'col-xl-3 col-lg-3 col-md-12 col-sm-12'}>
                        <div className="bg-colorExtraPrimary">
                            <div className='p-2 border-b border-b-slate-200 text-center'>
                                <Link className='text-2xl text-white font-semibold' to={'/'}>
                                    <i className="fa-solid fa-house mr-3"></i>
                                    BDS123.vn
                                </Link>
                            </div>
                            <div>
                                <Menu data={adminCategory} />
                            </div>
                            <div>
                                {isShowNav ?
                                    <div className='flex justify-center items-center p-4'>
                                        <Button className={'w-10 h-10 bg-colorSemiPrimary text-white'} rounded onClick={hanldeToggleShowNav}>
                                            <i className="fa-solid fa-angle-right"></i>
                                        </Button>
                                    </div>
                                    :
                                    <div className='flex justify-center items-center p-4'>
                                        <Button className={'w-10 h-10 bg-colorSemiPrimary text-white'} rounded onClick={hanldeToggleShowNav}>
                                            <i className="fa-solid fa-angle-left"></i>
                                        </Button>
                                    </div>
                                }
                            </div>
                        </div>
                    </div>
                    <div className={isShowNav ? 'col-xl-10 col-lg-10 col-md-12 col-sm-12' : 'col-xl-9 col-lg-9 col-md-12 col-sm-12'}>
                        <div>
                            {children}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}