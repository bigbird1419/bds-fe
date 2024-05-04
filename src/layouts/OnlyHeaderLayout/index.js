import Footer from "../components/Footer";
import Header from "../components/Header";

export default function OnlyHeaderLayout({ children }) {
    return (
        <div className="wrapper">
            <div>
                <Header />
            </div>
            <div>
                {children}
            </div>
            <div className="mt-8">
                <Footer />
            </div>
        </div>
    )
}