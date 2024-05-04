import Blog from "../components/Blog";
import Feedback from "../components/Feedback";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Payment from "../components/Payment";
import Summary from "../components/Summary";
import Supporter from '../components/Supporter'
import CategoryChild from '../components/CategoryChild'
import Filter from "../components/Filter";

export default function DefaultLayout({ children }) {
    return (
        <div className="wrapper">
            <div className="header">
                <Header />
            </div>
            <div className="filter">
                <Filter />
            </div>
            <div>
                {children}
            </div>
            <div className="">
                <div>
                    <CategoryChild />
                </div>
                <div>
                    <Payment />
                </div>
                <div>
                    <Blog />
                </div>
                <div>
                    <Summary />
                </div>
                <div>
                    <Feedback />
                </div>
                <div>
                    <Supporter />
                </div>
                <div>
                    <Footer />
                </div>
            </div>
        </div>
    )
}