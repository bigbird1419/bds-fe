import { useEffect, useState } from "react"

import FillterItem from "./FilterItem"
import { getCategory } from '../../../services/categoryService'

const prices = [
    { name: 'Dưới 500tr', code: '500' },
    { name: '500tr - 800tr', code: '500-800' },
    { name: '800tr - 1ty', code: '800-1000' },
    { name: '1ty - 3ty', code: '1000-3000' },
]
const acreages = [
    { name: 'Dưới 20m', code: '20' },
    { name: '20m - 40m', code: '20-40' },
    { name: '40m - 80m', code: '40-80' },
    { name: '80m - 150m', code: '80-150' },
]

export default function Filter() {
    const [categorys, setCategorys] = useState([])
    const [citys, setCitys] = useState([])

    useEffect(() => {
        const getData = async () => {
            const dataCategorys = await getCategory()
            setCategorys(dataCategorys.data)
            setCitys(dataCategorys.data)
        }
        getData()
    }, [])

    return (
        <div className="wrapper rounded-md shadow-sm">
            <div className="container">
                <div className="flex justify-start items-center p-2 ">
                    <FillterItem type={'list'} data={categorys} head={'Giao dịch'} icon={<i className="fa-solid fa-angle-down"></i>} />
                    <FillterItem type={'list'} data={categorys} head={'Loại nhà đất'} icon={<i className="fa-solid fa-angle-down"></i>} />
                    <FillterItem type={'list'} data={citys} head={'Khu vực'} icon={<i className="fa-solid fa-angle-down"></i>} />
                    <FillterItem type={'list'} data={prices} head={'Khoảng giá'} icon={<i className="fa-solid fa-angle-down"></i>} />
                    <FillterItem type={'list'} data={acreages} head={'Diện tích'} icon={<i className="fa-solid fa-angle-down"></i>} />
                </div>
            </div>
        </div>
    )
}