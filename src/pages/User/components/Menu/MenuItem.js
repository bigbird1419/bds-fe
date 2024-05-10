import { useState } from 'react'
import Button from '../../../../components/Button'

export default function MenuItem({ category }) {
    const [isShowChildren, setIsShowChildren] = useState(false)

    return (
        <div className="wrapper border-b border-b-slate-200">
            <Button
                to={category.path}
                className={`relative block w-full px-2 py-3 font-medium  text-sm ${isShowChildren ? 'text-white' : 'text-gray-300'}`}
                onClick={() => setIsShowChildren(!isShowChildren)}
            >
                {category.icon}
                <span className='mx-2'>{category.title}</span>
                {category?.children?.length &&
                    <span className='absolute right-5 top-1/2 translate-y-[-50%]'>
                        {isShowChildren ? <i className="fa-solid fa-angle-down"></i> : <i className="fa-solid fa-angle-right"></i>}
                    </span>
                }
            </Button>
            {isShowChildren && category?.children?.length &&
                <div className='rounded-md bg-white mx-2 mb-4 p-2'>
                    <h3 className='text-xs text-gray-400 text-center mb-2'>{category.title}</h3>
                    {category?.children?.map((item, i) => (
                        <div key={i}>
                            <Button className={'text-sm font-medium text-black p-2'} to={item.path}>{item.title}</Button>
                        </div>
                    ))}
                </div>
            }
        </div>
    )
}