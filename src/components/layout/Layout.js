import Navigation from "../navigation/Navigation";
import Marquee from "../marquee/Marquee";
import Footer from "../footer/Footer";
const Layout = (props) => {
    return (
        <div>
             <Navigation />
             <Marquee/>
            <div style={{marginTop:'85px'}}>
               {props.children}
            </div>
            <Footer />
        </div>
    );
}

export default Layout;