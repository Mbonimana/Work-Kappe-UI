import { Outlet } from "react-router-dom";
import Nav from "../components/nav";
import FooterContainer from "../components/FooterContainwe";
import NavContainer from "../components/NavContainer";
import BannerAd from "../components/BannerAd";
import BestSales from "../components/BestSales";
const Layout=() => {

    return (
        <>
            <NavContainer/>
            <Outlet/>
            <BannerAd/>
            <BestSales/>
            <FooterContainer/>

        </>
    )

}
export default Layout;