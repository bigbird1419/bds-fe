import Button from "../../../components/Button";
import logoUrl from '../../../assets/logo-bds123.svg'
import categorys from "../../../constants/categorys";
import routes from '../../../constants/routes'

export default function Header() {
    return (
        <div className="header px-4 py-2">
            <div className="flex justify-between items-center">
                <div>
                    <Button to={'/'} >
                        <img src={logoUrl} alt="BDS" className="w-40" />
                    </Button>
                </div>
                <div className="flex-auto mx-4">
                    <ul className="flex">
                        {categorys.map((category, i) => (
                            <li className="mx-2 font-medium text-sm hover:underline hover:text-colorPrimary" key={i}>
                                <Button to={category.path}>{category.title}</Button>
                            </li>
                        ))}
                    </ul>
                </div>
                <div>
                    <div className="flex items-center justify-start">
                        <div className="mr-4">
                            <Button normal small to={routes.signup} className={'opacity-90 hover:opacity-100'}>
                                <i className="fa-solid fa-user-plus mr-2"></i>
                                Đăng ký
                            </Button>
                        </div>
                        <div className="mr-4">
                            <Button normal small to={routes.login} className={'opacity-90 hover:opacity-100'}>
                                <i className="fa-solid fa-arrow-right-to-bracket mr-2"></i>
                                Đăng nhập
                            </Button>
                        </div>
                        <div className="mr-4">
                            <Button primary rounded small className={'p-2'}>
                                <i className="fa-regular fa-pen-to-square mr-2"></i>
                                Đăng tin miễn phí
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}