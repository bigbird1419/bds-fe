import blogs from '../../../constants/blogs'

export default function Blog() {
    return (
        <div className="wrapper">
            <div className="container my-8 max-w-5xl">
                <h1 className='text-2xl font-bold'>Bản tin bất động sản</h1>
                <div className='row'>
                    {blogs.map((blog, i) => {
                        if (i < 2) {
                            return (
                                <div className='col-xl-4 col-lg-4 col-md-12 col-sm-12 group' key={i}>
                                    <div className='my-3'>
                                        <div>
                                            <img src={blog.avatar} alt='' className='w-full group-hover:opacity-90' />
                                        </div>
                                        <div className='text-center mt-3'>
                                            <p className='text-gray-400 text-sm'>{blog.created}</p>
                                            <h3 className='text-xl font-bold group-hover:text-colorPrimary'>{blog.header}</h3>
                                        </div>
                                    </div>
                                </div>
                            )
                        }
                    })}
                    <div className='col-xl-4 col-lg-4 col-md-12 col-sm-12'>
                        <div className='mt-3'>
                            {blogs.map((blog, i) => {
                                if (i > 1 && i < 5) {
                                    return (
                                        <div className='flex justify-between mb-3 group' key={i}>
                                            <div className='text-left mr-3'>
                                                <p className='text-gray-400 text-xs mb-2'>{blog.created}</p>
                                                <h3 className='text-md font-bold group-hover:text-colorPrimary'>{blog.header}</h3>
                                            </div>
                                            <div className='w-1/2'>
                                                <img src={blog.avatar} alt='' className='w-full group-hover:opacity-90' />
                                            </div>
                                        </div>
                                    )
                                }
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}