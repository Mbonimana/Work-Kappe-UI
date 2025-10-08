import { Outlet } from "react-router-dom";
import FooterContainer from "../components/FooterContainwe";
import NavContainer from "../components/NavContainer";

const Layout=() => {

    return (
        <>
            <NavContainer/> 
            <main className="">
             <Outlet />
            </main>
            
            
            <FooterContainer/>
            
       
            

        </>
    )

}
export default Layout;