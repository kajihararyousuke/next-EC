import "./globals.css"
import Header from "./components/header"     // 追加
import Footer from "./components/footer"     // 追加

const RootLayout = ({ children }) => {
    return (
        <html lang="en">
            <body>
              <Header/>
                {children}
              <Footer/>
            </body>
        </html>
    )
}

export default RootLayout