import Feedback from "../components/Feedback";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Payment from "../components/Payment";
import Summary from "../components/Summary";
import Supporter from '../components/Supporter'

export default function NoFilterLayout({ children }) {
    return (
        <div className="wrapper">
            <div>
                <Header />
            </div>
            <div>
                {children}
            </div>
            <div className="my-6">
                <div>
                    <Payment />
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