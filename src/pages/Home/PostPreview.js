import { Link } from "react-router-dom"

import FormatDate from "../../components/FormatDate"
import FormatNumeric from "../../components/FormatNumeric"

export default function PostPreview({ post }) {

    return (
        <div className="wrapper">
            <Link to={`posts/${post.id}`} className='block hover:translate-y-[-3%] transition-all duration-300'>
                <div className='relative'>
                    <img src={post.postImgs[0].url} alt='' className='w-full h-44 rounded-md' />
                    <span className='absolute block bottom-1 left-1 text-white text-sm'><i className="fa-regular fa-image mr-2"></i>{post.postImgs.length}</span>
                    <span className="absolute block bottom-1 right-1 text-white text-sm"><i className="fa-regular fa-clock mr-2"></i> <FormatDate date={post.createdDate} /></span>
                </div>
                <div className='p-2'>
                    <h3 className='font-medium text-colorExtraPrimary mb-4'>{post.header}</h3>
                    <p className='flex text-sm mb-2'>
                        <span className='font-medium mr-4 text-green-400'>
                            <FormatNumeric number={post.price} />
                        </span>
                        <span><i className="fa-regular fa-square-full mr-2"></i>{post.acreage}m<sup>2</sup></span>
                    </p>
                    <p className='text-sm text-gray-400'><i className="fa-solid fa-location-dot mr-2"></i> {post.area.city.name}, {post.area.name}</p>
                </div>
            </Link>
        </div>
    )
}