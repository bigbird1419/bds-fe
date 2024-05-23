import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"

import Button from "../../components/Button"
import Pagination from "../../components/Pagination"
import Posts from "../../components/Posts"
import categorys from "../../constants/categorys"
import { getPosts } from '../../services/postService'

export default function Categorys() {
    const { categoryCode } = useParams()
    const [posts, setPosts] = useState([])

    useEffect(() => {
        const getData = async () => {
            const rs = await getPosts({
                city: categoryCode,
                area: categoryCode,
                category: categoryCode
            })
            setPosts(rs.data)
        }
        getData()
    }, [categoryCode])

    return (
        <div className="wrapper">
            <div className="container">
                <div className="row">
                    <div className="col-xl-8 col-lg-8 col-md-6 col-sm-12">
                        <div className="mb-4">
                            {posts.length > 0 ?
                                <div>
                                    <Posts data={posts} />
                                    <div className="my-4">
                                        <Pagination totalPage={10} page={1} />
                                    </div>
                                </div>
                                :
                                <div className="my-4">
                                    <h3 className="text-xl font-medium text-center">Chưa có bài đăng mới</h3>
                                </div>
                            }
                        </div>

                    </div>
                    <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12">
                        <div>
                            <h3 className="text-md font-semibold mb-4">Mua bán nhà đất theo khu vực</h3>
                            {categorys.map((category, i) => {
                                if (category.path !== '/') {
                                    return (
                                        <div key={i}>
                                            <Button to={category.path} className={'hover:text-colorPrimary'}>
                                                <i className="fa-solid fa-angle-right text-colorPrimary mr-2 text-xs"></i>
                                                {category.title}
                                            </Button>
                                        </div>
                                    )
                                }
                                return null
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}