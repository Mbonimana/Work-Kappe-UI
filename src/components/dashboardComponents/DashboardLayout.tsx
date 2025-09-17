import { Outlet } from "react-router-dom";
import SidebarDashboard from "./DashboardSideBar";
import DashboardNabar from "./DashboardNavBar";

function DashboardLayout() {
return(
    <>
    <SidebarDashboard/>
    
    <DashboardNabar/>
   
     <main className="flex-1 bg-slate-100 p-10 ">
        <Outlet />
      </main>
    
    
    </>
)
}
export default DashboardLayout;