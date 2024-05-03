import routes from "./routes"

const categorys = [
    { path: '/', title: 'Trang chủ' },
    { path: routes.muaban, title: 'Mua bán' },
    { path: routes.chothue, title: 'Cho thuê' },
    { path: routes.pricing, title: 'Bảng giá dịch vụ' },
    { path: routes.blogs, title: 'Tin tức' },
]

export default categorys