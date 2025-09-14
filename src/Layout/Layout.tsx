import { Outlet } from "react-router-dom";
import Nav from "../components/nav";
import FooterContainer from "../components/FooterContainwe";
import NavContainer from "../components/NavContainer";
import BannerAd from "../components/BannerAd";
import BestSales from "../components/BestSales";
import HotDeals from "../components/HotDeals"; 
import FeaturedProducts from "../components/FeaturedProducts"; 
import MyAccount from "../components/auth/myaccount";
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