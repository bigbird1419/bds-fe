import Button from "../../components/Button";
import Pagination from "../../components/Pagination";
import Posts from "../../components/Posts";
import categorys from "../../constants/categorys";
import posts from "../../constants/posts";

export default function Categorys() {

    return (
        <div className="wrapper">
            <div className="container">
                <div className="row">
                    <div className="col-xl-8 col-lg-8 col-md-6 col-sm-12">
                        <div className="mb-4">
                            <Posts data={posts} />
                        </div>
                        <div className="my-4">
                            <Pagination totalPage={10} page={1}/>
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