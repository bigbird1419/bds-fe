import Button from "../Button";
import FormatDate from '../FormatDate';
import FormatNumeric from '../FormatNumeric';

export default function PostItem({ post }) {

    return (
        <div className="wrapper mb-4 p-3">
            <div className="flex">
                <div className=" my-auto">
                    <div className="rounded-md overflow-hidden w-56">
                        <img src={post.postImgs[0].url} alt="" className="w-full h-56" />
                    </div>
                </div>
                <div className="ml-4">
                    <div className="flex flex-col justify-between h-full">
                        <h3 className="text-colorPrimary text-xl font-semibold my-2">
                            <Button to={`/bai-dang/${post.id}`}>{post.header}</Button>
                        </h3>
                        <p className="my-2 flex justify-between items-center">
                            <span className="text-colorSecondary text-lg font-semibold mr-6">
                                <i className="fa-solid fa-tag mr-2"></i>
                                <FormatNumeric number={post.price} />
                            </span>
                            <span className="mr-6 text-sm"><i className="fa-regular fa-square-full mr-2"></i>{post.acreage}m<sup>2</sup></span>
                            <span className="mr-6 text-sm"><i className="fa-regular fa-clock mr-2"></i> <FormatDate date={post.createdDate} /></span>
                        </p>
                        <p className="text-xs text-gray-800 my-2"><i className="fa-solid fa-location-dot mr-2"></i> {post.area.city.name}, {post.area.name}</p>
                        <p className="my-2 text-sm   text-gray-400">
                            {post.shortDescription}
                        </p>
                        <div className="my-2 flex items-center">
                            <img src={post.user.urlImg} alt="" className="w-4 rounded-full" />
                            <p className="ml-2">{post.user.fullName}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}