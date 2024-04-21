import Button from "../../../components/Button";
import cates from "../../../constants/categorys";
import routes from "../../../constants/routes";
import Logo from "../Logo";

const supports = [
    { path: routes.contact, title: 'Hỗ trợ khách hàng' },
    { path: routes.contact, title: 'Câu hỏi thường gặp' },
    { path: routes.contact, title: 'Hướng dẫn đăng tin' },
    { path: routes.contact, title: 'Bảng giá dịch vụ' },
    { path: routes.contact, title: 'Quy định đăng tin' },
    { path: routes.contact, title: 'Giải quyết khiếu nại' },
]

export default function Footer() {
    return (
        <div className="wrapper mt-9 mb-4 p-9 border-solid border-y border-gray-300">
            <div className="container">
                <div className="row">
                    <div className="col-3">
                        <div>
                            <Logo />
                            <h1 className="text-sm mt-4 mb-2">bds123.com tự hào có lượng dữ liệu bài đăng lớn nhất trong lĩnh vực bất động sản.</h1>
                        </div>
                    </div>
                    <div className="col-3">
                        <div>
                            <h1 className="text-sm uppercase font-bold mb-2">Về BDS123.COM</h1>
                            <div className="flex flex-col">
                                {cates.map((cate, i) => {
                                    if (i === 0) return ''
                                    return (
                                        <Button
                                            style={{ 'marginLeft': '0' }}
                                            className={'my-2 text-xs hover:underline '} to={cate.path} key={i}
                                        >
                                            {cate.title}
                                        </Button>
                                    )
                                })}
                            </div>
                        </div>
                    </div>
                    <div className="col-3">
                        <div>
                            <h1 className="text-sm uppercase font-bold mb-2">Hỗ trợ khách hàng</h1>
                            <div className="flex flex-col">
                                {supports.map((support, i) => (
                                    <Button
                                        style={{ 'marginLeft': '0' }}
                                        className={'my-2 text-xs hover:underline '} to={support.path} key={i}
                                    >
                                        {support.title}
                                    </Button>
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className="col-3">
                        <div>
                            <h1 className="text-sm uppercase font-bold mb-2">Liên hệ với chúng tôi</h1>
                            <div>
                                <Button className={'text-2xl  text-colorFB mr-2'}>
                                    <i className="fab fa-facebook"></i>
                                </Button>
                                <Button className={'text-2xl text-red-400 mr-2'}>
                                    <i className="fab fa-instagram"></i>
                                </Button>
                                <Button className={'text-2xl text-sky-500 mr-2'}>
                                    <i className="fab fa-twitter"></i>
                                </Button>
                                <Button className={'text-2xl text-sky-800 mr-2'}>
                                    <i className="fab fa-facebook-messenger"></i>
                                </Button>
                            </div>
                            <h1 className="text-sm uppercase font-bold mb-2 mt-4">Phương thức thanh toán</h1>
                            <div>
                                <i className="fab fa-cc-visa mr-2 text-2xl"></i>
                                <i className="fab fa-cc-mastercard mr-2 text-2xl"></i>
                                <i className="fab fa-cc-jcb mr-2 text-2xl"></i>
                                <i className="fas fa-money-check mr-2 text-2xl"></i>
                                <i className="far fa-money-bill-alt mr-2 text-2xl"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}