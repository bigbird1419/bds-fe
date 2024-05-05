import posts from '../../constants/posts'
import PostItem from './PostItem'

export default function Posts() {

    return (
        <div className="wrapper max-w-6xl mx-auto">
            <div className="container">
                {posts.map((post, i) => (
                    <div key={i}>
                        <PostItem post={post} />
                    </div>
                ))}
            </div>
        </div>
    )
}