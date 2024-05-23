import { useLocation } from "react-router-dom";
import { useContext } from "react";

import Button from "../../../components/Button";
import Logo from '../Logo'
import categorys from "../../../constants/categorys";
import routes from '../../../constants/routes'
import { AuthContext } from "../../../contexts/AuthContext";

export default function Header() {
    const currentPage = useLocation().pathname
    const { isLogin, user } = useContext(AuthContext)

    return (
        <div className="header px-4 py-2">
            <div className="flex justify-between items-center">
                <div>
                    <Logo />
                </div>
                <div className="flex-auto mx-4">
                    <ul className="flex">
                        {categorys.map((category, i) => (
                            <li className="mx-2 font-medium text-sm hover:underline hover:text-colorPrimary" key={i}>
                                <Button to={category.path} className={currentPage === category.path ? 'underline text-colorPrimary' : ''}>{category.title}</Button>
                            </li>
                        ))}
                    </ul>
                </div>
                <div>
                    <div className="flex items-center justify-start">
                        {isLogin ?
                            <div className="mr-4">
                                {user?.roles.includes("ROLE_ADMIN") ?
                                    <Button to={`/admin`}>
                                        <h3 className="text-md font-medium">Xin chào {user.fullname}</h3>
                                    </Button> :
                                    <Button to={`/user`}>
                                        <h3 className="text-md font-medium">Xin chào {user.fullname}</h3>
                                    </Button>
                                }
                            </div>
                            :
                            <>
                                <div className="mr-4">
                                    <Button normal small to={routes.signup} className={'opacity-90 hover:opacity-100 hover:bg-blue-100 p-2 rounded'}>
                                        <i className="fa-solid fa-user-plus mr-2"></i>
                                        Đăng ký
                                    </Button>
                                </div>
                                <div className="mr-4">
                                    <Button normal small to={routes.login} className={'opacity-90 hover:opacity-100 hover:bg-blue-100 p-2 rounded'}>
                                        <i className="fa-solid fa-arrow-right-to-bracket mr-2"></i>
                                        Đăng nhập
                                    </Button>
                                </div>
                            </>
                        }
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