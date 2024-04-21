import Footer from "./components/Footer";
import Header from "./components/Header";

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

                </div>
                <div>
                    <Footer />
                </div>
            </div>
        </div>
    )
}