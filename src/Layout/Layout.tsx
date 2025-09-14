import { Outlet } from "react-router-dom";
import FooterContainer from "../components/FooterContainwe";
import NavContainer from "../components/NavContainer";

const Layout=() => {

    return (
        <>
            <NavContainer/>
            <Outlet/>
            {/* <BannerAd />  
            <BestSales />
            <HotDeals />  
            <FeaturedProducts />     */}
            <FooterContainer/>
            
       
            

        </>
    )

}
export default Layout;