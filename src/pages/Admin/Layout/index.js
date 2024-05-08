import { Link } from 'react-router-dom'
import adminCategory from '../../../constants/adminCategory'
import Menu from '../components/Menu'

export default function LayoutAdmin({ children }) {

    return (
        <div className="wrapper ">
            <div className='container-fluid'>
                <div className="row">
                    <div className="col-xl-3 col-lg-3 col-md-12 col-sm-12">
                        <div className="bg-colorExtraPrimary">
                            <div className='p-2 border-b border-b-slate-200 text-center'>
                                <Link className='text-2xl text-white font-semibold' to={'/admin'}>BDS123.vn</Link>
                            </div>
                            <div>
                                <Menu data={adminCategory} />
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-9 col-lg-9 col-md-12 col-sm-12">
                        <div>
                            {children}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}