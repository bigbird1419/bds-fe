import { memo, useState } from "react"
import Button from "../../../../components/Button";

function FillterItem({ icon, head = 'default', data = [], onClick = () => { } }) {
    const [isShowPopup, setIsShowPopup] = useState(false)

    const handleChildClickClose = (event) => {
        event.stopPropagation(); // Ngăn chặn sự kiện click lan ra phần tử cha
        setIsShowPopup(false);
    };

    return (
        <div className="h-full bg-white p-2 mr-2 rounded-md cursor-pointer text-gray-500 text-sm border-1 border-gray-200 hover:border-gray-400" onClick={() => setIsShowPopup(true)}>
            <div className="flex items-center text-sm flex-auto">
                <span className="text-xs mr-2">{head}</span>
                <span className="text-xs">{icon}</span>
            </div>
            {data.length > 0 &&
                <div>
                    <span className={'font-medium text-colorPrimary'}>{data[0].title}</span>
                    {isShowPopup &&
                        <div className="fixed bg-gray-800 bg-opacity-80 top-0 left-0 right-0 bottom-0 z-30">
                            <div className="absolute left-1/2 top-1/2 translate-x-[-50%] translate-y-[-50%] w-3/6 h-4/5 bg-white rounded-md overflow-hidden z-50">
                                <div className="relative">
                                    <div className="absolute top-1/2 left-0 translate-y-[-50%] ml-2 text-colorPrimary text-xl  cursor-pointer hover:bg-gray-100 px-3 py-2 rounded-md" onClick={e => handleChildClickClose(e)}><i className="fa-solid fa-angle-left"></i></div>
                                    <h3 className="text-md font-medium text-center uppercase p-3 shadow-md border-1 border-b-gray-400 text-black">CHỌN {head}</h3>
                                </div>
                                <div>
                                    <ul className="p-4">
                                        {data.map((item, i) => (
                                            <li className="p-2 border-b border-gray-200" key={i}>
                                                <Button className={'text-md'} to={item.path}>{item.title}</Button>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    }
                </div>
            }

        </div >
    )
}

export default memo(FillterItem)