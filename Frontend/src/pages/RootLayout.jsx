import {Link, Outlet} from "react-router-dom";
import AppSideBar from "@/components/AppSidebar.jsx";
import {Sidebar, SidebarProvider, SidebarTrigger} from "@/components/ui/sidebar.jsx";

export default function RootLayout() {
    return(
       <>
            <SidebarProvider >
                <AppSideBar/>
                <SidebarTrigger/>
                <Outlet/>
            </SidebarProvider>


       </>
    )
}