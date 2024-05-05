import FillterItem from "./FilterItem"

const giaoDich = [
    { title: 'Mua bán', path: 'category/mua-ban' },
    { title: 'Cho thuê', path: 'category/cho-thue' },
]
const prices = [
    {title: 'Duoi 500tr', path: 'category/'}, 
    {title: 'Duoi 800tr', path: 'category/'}, 
    {title: 'Duoi 1ty', path: 'category/'}, 
    {title: 'Duoi 3ty', path: 'category/'}, 
]

export default function Filter() {
    return (
        <div className="wrapper rounded-md shadow-sm">
            <div className="container">
                <div className="flex justify-start items-center p-2 ">
                    <FillterItem type={'list'} data={giaoDich} head={'Giao dịch'} icon={<i className="fa-solid fa-angle-down"></i>} />
                    <FillterItem type={'list'} data={giaoDich} head={'Loại nhà đất'} icon={<i className="fa-solid fa-angle-down"></i>} />
                    <FillterItem type={'list'} data={giaoDich} head={'Khu vực'} icon={<i className="fa-solid fa-angle-down"></i>} />
                    <FillterItem type={'list'} data={prices} head={'Khoảng giá'} icon={<i className="fa-solid fa-angle-down"></i>} />
                    <FillterItem type={'list'} data={prices} head={'Diện tích'} icon={<i className="fa-solid fa-angle-down"></i>} />
                </div>
            </div>
        </div>
    )
}