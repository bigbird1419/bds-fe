import Feedback from "./components/Feedback";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Supporter from './components/Supporter'

export default function DefaultLayout({ children }) {
    return (
        <div className="wrapper">
            <div>
                <Header />
            </div>
            <div>
                {children}
            </div>
            <div className="container">
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