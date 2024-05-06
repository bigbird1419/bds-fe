import PostItem from './PostItem'

export default function Posts({data}) {

    return (
        <div className="wrapper max-w-6xl mx-auto">
            <div className="container">
                {data.map((post, i) => (
                    <div key={i}>
                        <PostItem post={post} />
                    </div>
                ))}
            </div>
        </div>
    )
}