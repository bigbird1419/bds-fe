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
            <div>
                
            </div>
        </div>
    )
}