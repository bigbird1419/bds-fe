import Button from "../Button";

export default function PostItem({ post }) {

    return (
        <div className="wrapper mb-4 p-3">
            <div className="flex">
                <div className="">
                    <div className="rounded-md overflow-hidden w-56">
                        <img src={post.images[0]} alt="" className="w-full h-56" />
                    </div>
                </div>
                <div className="ml-4">
                    <div className="flex flex-col justify-between">
                        <h3 className="text-colorPrimary text-xl font-semibold my-2">
                            <Button to={`/posts/1`}>{post.head}</Button>
                        </h3>
                        <p className="my-2 flex justify-between items-center">
                            <span className="text-colorSecondary text-lg font-semibold mr-6"><i className="fa-solid fa-tag mr-2"></i> {post.price}</span>
                            <span className="mr-6"><i className="fa-regular fa-square-full mr-2"></i>{post.area}m<sup>2</sup></span>
                            <span className="mr-6"><i className="fa-regular fa-clock mr-2"></i> {post.createdDate}</span>
                        </p>
                        <p className="text-xs text-gray-800 my-2"><i className="fa-solid fa-location-dot mr-2"></i> {post.address}</p>
                        <p className="my-2 text-md text-gray-400">
                            {post.summaryContent}
                        </p>
                        <div className="my-2 flex items-center">
                            <img src={post.user.avatar} alt="" className="w-4 rounded-full" />
                            <p className="ml-2">{post.user.name}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}