import { useState } from "react"

import blogs from "../../constants/blogs"
import Button from "../../components/Button"

export default function Blogs() {
    const [curBlog, setCurBlog] = useState({})

    const hanldeSetCurBlog = (val) => {
        setCurBlog(val)
    }

    return (
        <div className="wrapper">
            <div className="container my-6">
                {Object.keys(curBlog).length === 0 ?
                    <div>
                        <div className="text-center">
                            <h1 className="text-3xl font-bold mb-3">Thông tin thị trường nhà đất</h1>
                            <p className="text-sm text-gray-400">Đọc tin tức bất động sản và tài chính mới nhất, xu hướng thị trường bất động sản và thông tin và hiểu biết sâu sắc về nhà ở.</p>
                        </div>
                        <div className="my-4">
                            <div className="row">
                                <div className="col-xl-3 col-lg-3 col-md-12 col-sm-12">
                                    {blogs.map((blog, i) => (
                                        <div className="flex mb-3 cursor-pointer" onClick={() => hanldeSetCurBlog(blog)} key={i}>
                                            <div className="w-1/2 mr-3">
                                                <img src={blog.avatar} alt="" className="w-full" />
                                            </div>
                                            <div className="flex flex-col justify-between">
                                                <p className="text-xs text-gray-400">{blog.created}</p>
                                                <h3 className="font-medium text-sm">{blog.header}</h3>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                                <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12">
                                    <div className="cursor-pointer" onClick={() => hanldeSetCurBlog(blogs[0])}>
                                        <div>
                                            <img src={blogs[0].avatar} alt="" className="w-full" />
                                        </div>
                                        <div className="flex flex-col justify-between">
                                            <p className="text-xs text-gray-400">{blogs[0].created}</p>
                                            <h3 className="font-medium text-2xl">{blogs[0].header}</h3>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-3 col-lg-3 col-md-12 col-sm-12">
                                    {blogs.map((blog, i) => {
                                        if (i < 2) {
                                            return (
                                                <div className="cursor-pointer" key={i} onClick={() => hanldeSetCurBlog(blog)}>
                                                    <div>
                                                        <img src={blog.avatar} alt="" className="w-full" />
                                                    </div>
                                                    <div className="flex flex-col justify-between">
                                                        <p className="text-xs text-gray-400">{blog.created}</p>
                                                        <h3 className="font-medium text-2xl">{blog.header}</h3>
                                                    </div>
                                                </div>
                                            )
                                        }
                                        return null;
                                    })}
                                </div>
                            </div>
                        </div>
                    </div>
                    :
                    <div className=" my-4">
                        <div className="row">
                            <div>
                                <Button className="text-gray-500 underline text-md cursor-pointer mb-3" to={'/'}>Trang chủ</Button>
                                <i className="fa-solid fa-angle-right mx-2"></i>
                                <Button className="text-colorSecondary underline text-md cursor-pointer mb-3"
                                    onClick={() => hanldeSetCurBlog({})}>Tin tức</Button>
                            </div>
                            <div className="col-xl-8 col-lg-8 col-md-12 col-sm-12">
                                <div className="">
                                    <h1 className="text-3xl font-semibold">{curBlog.header}</h1>
                                    <p className="text-gray-400 text-sm">{curBlog.created}</p>
                                    <div>
                                        {curBlog.component.map((item, i) => (
                                            <div key={i}>
                                                <h3 className="font-semibold text-xl my-4">{i + 1}. {item.header}</h3>
                                                <p className="mb-3">{item.content}</p>
                                                <img src={item.img.url} alt={item.img.alt} className="w-full" />
                                                <p className="text-center italic text-gray-400 text-xs my-3">{item.img.alt}</p>
                                                <p>{item.footer}</p>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-4 col-lg-4 col-md-12 col-sm-12">
                                <div className="">
                                    <h3 className="text-xl font-bold mb-3">Có thể bạn quan tâm</h3>
                                    {blogs.map((blog, i) => (
                                        <div className="flex mb-3" onClick={() => hanldeSetCurBlog(blog)} key={i}>
                                            <div className="w-1/2 mr-3">
                                                <img src={blog.avatar} alt="" className="w-full" />
                                            </div>
                                            <div className="flex flex-col">
                                                <p className="text-xs text-gray-400 mb-3">{blog.created}</p>
                                                <h3 className="font-medium text-md">{blog.header}</h3>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                }
            </div>
        </div>
    )
}