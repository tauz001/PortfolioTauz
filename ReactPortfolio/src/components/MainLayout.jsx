import Header from "./header"
import Footer from "./footer"

const MainLayout = ({children}) => (
  <>
    <Header />
    {children}
    <Footer />
  </>
)

export default MainLayout
