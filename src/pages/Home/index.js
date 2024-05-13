import { useEffect, useState } from 'react'

import routes from '../../constants/routes'
import { getPosts } from '../../services/postService'
import Button from '../../components/Button'
import PostPreview from './PostPreview'

export default function Home() {
    const [posts, setPosts] = useState([])

    useEffect(() => {
        const getData = async () => {
            const rs = await getPosts()
            setPosts(rs.data)
        }
        getData()
    }, [])

    return (
        <div className="wrapper my-8">
            <div className="container">
                <div className="sale my-6 max-w-6xl mx-auto">
                    <div className='flex items-center justify-between'>
                        <h1 className="text-2xl font-semibold mb-4">Bất động sản đang bán</h1>
                        <Button className={'text-colorSecondary text-sm'} to={routes.muaban}>Xem thêm
                            <i className="fa-solid fa-angle-right ml-3 text-xs"></i>
                        </Button>
                    </div>
                    <div className='row'>
                        {posts.map((post, i) => {
                            if (i < 4) {
                                return (
                                    <div key={i} className='col-3'>
                                        <PostPreview post={post} />
                                    </div>
                                )
                            }
                            return null
                        })}
                    </div>
                </div>
                <div className="lease my-6 max-w-6xl mx-auto">
                    <div className='flex items-center justify-between'>
                        <h1 className="text-2xl font-semibold mb-4">Bất động sản đang cho thuê</h1>
                        <Button className={'text-colorSecondary text-sm'} to={routes.chothue}>Xem thêm
                            <i className="fa-solid fa-angle-right ml-3 text-xs"></i>
                        </Button>
                    </div>
                    <div className='row'>
                        {posts.map((post, i) => {
                            if (i < 4) {
                                return (
                                    <div key={i} className='col-3'>
                                        <PostPreview post={post} />
                                    </div>
                                )
                            }
                            return null
                        })}
                    </div>
                </div>
            </div>
        </div>
    )
}