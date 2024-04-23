import routes from "./routes"

const categorys = [
    { path: '/', title: 'Trang chủ' },
    { path: routes.muaban, title: 'Mua bán' },
    { path: routes.chothue, title: 'Cho thuê' },
    { path: '/bang-gia-dich-vu', title: 'Bảng giá dịch vụ' },
    { path: routes.blogs, title: 'Tin tức' },
]

export default categorys