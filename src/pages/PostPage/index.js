import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

import SwiperImg from '../../components/SwiperImg'
import Button from "../../components/Button"
import { getPostById } from '../../services/postService'
import FormatDate from "../../components/FormatDate"

export default function PostPage() {
    const { postId } = useParams()
    const [post, setPost] = useState({})

    useEffect(() => {
        const getData = async () => {
            const rs = await getPostById(postId)
            setPost(rs.data)
        }
        getData()
    }, [postId])
    document.title = post.header

    return (
        <div className="wrapper max-w-6xl mx-auto my-6">
            <div className="container">
                <div className="row">
                    <div className="col-xl-8 col-lg-8 col-md-6 col-sm-12">
                        <div className="p-3 rounded shadow">
                            <div className="head mb-4">
                                <h1 className="text-colorPrimary text-2xl font-medium my-2">{post.header}</h1>
                                <p className="text-xs text-gray-800"><i className="fa-solid fa-location-dot mr-2 my-2"></i> {post.area?.city.name}, {post.area?.name}</p>
                                <p className=" my-2">
                                    <span className="text-colorSecondary text-lg font-semibold mr-6"><i className="fa-solid fa-tag mr-2"></i> {post.price}</span>
                                    <span className="mr-6"><i className="fa-regular fa-square-full mr-2"></i>{post.acreage}m<sup>2</sup></span>
                                    <span className="mr-6"><i className="fa-regular fa-clock mr-2"></i> <FormatDate createdDate={post.createdDate} /></span>
                                </p>
                            </div>
                            <div className="swiper mb-4">
                                {post.postImgs &&
                                    <SwiperImg data={post.postImgs} />
                                }
                            </div>
                            <div className="summary mb-4">
                                <h3 className="underline text-md font-bold mb-2">Tóm tắt tin đăng</h3>
                                <p className="text-sm p-3 rounded bg-gray-100">{post.shortDescription}</p>
                            </div>
                            <div className="description mb-4">
                                <h3 className="underline text-md font-bold mb-3">Thông tin mô tả</h3>
                                <div className="p-3 text-sm rounded bg-gray-100">
                                    {post.content?.split('. ').map((item, i) => (
                                        <p key={i} className="mb-2">{item}</p>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12">
                        <div className="p-3 rounded border border-gray-200 sticky top-10">
                            <div className="flex items-center mb-4">
                                <img src={post.user?.urlImg} alt="" className="w-1/5 border-2 border-colorSecondary rounded-full" />
                                <div className="ml-3">
                                    <h3 className="font-semibold text-md">{post.user?.fullName}</h3>
                                </div>
                            </div>
                            <div className="my-2 flex flex-wrap justify-center">
                                <Button href={`tel:${post.user?.phone}`} className={'m-2 bg-colorPrimary text-white px-4 py-2 rounded hover:opacity-80 hover:underline transition-all duration-300'}>
                                    <i className="fa-solid fa-phone mr-2"></i>
                                    {post.user?.phone}
                                </Button>
                                <Button href={`tel:${post.user?.phone}`} className={'m-2 bg-colorSecondary text-white px-4 py-2 rounded hover:opacity-80 hover:underline transition-all duration-300'}>
                                    Nhắn Zalo
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}