import Button from '../../components/Button'
import posts from '../../constants/posts'
import PostPreview from './PostPreview'


export default function Home() {
    return (
        <div className="wrapper my-8">
            <div className="container">
                <div className="sale my-4 max-w-6xl mx-auto">
                    <div className='flex items-center justify-between'>
                        <h1 className="text-2xl font-semibold mb-4">Bất động sản đang bán</h1>
                        <Button className={'text-colorSecondary text-sm'} to={'/categorys/a'}>Xem thêm
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
                <div className="lease my-4 max-w-6xl mx-auto">
                    <div className='flex items-center justify-between'>
                        <h1 className="text-2xl font-semibold mb-4">Bất động sản đang cho thuê</h1>
                        <Button className={'text-colorSecondary text-sm'} to={'/categorys/a'}>Xem thêm
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