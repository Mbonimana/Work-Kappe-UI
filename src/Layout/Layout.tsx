import { Outlet } from "react-router-dom";
import FooterContainer from "../components/FooterContainwe";
import NavContainer from "../components/NavContainer";

const Layout=() => {

    return (
        <>
            <NavContainer/>
            <Outlet/>
            
            <FooterContainer/>
            
       
            

        </>
    )

}
export default Layout;