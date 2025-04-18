import { Outlet} from "react-router-dom";
import {SidebarProvider, SidebarTrigger} from "@/components/ui/sidebar.jsx";
import AppSidebar from "@/components/app-sidebar.jsx";
import {Toaster} from "sonner";


export default function RootLayout() {
    return (
        <SidebarProvider >
            <AppSidebar/>

            <main className="w-full h-full">
                <Outlet/>
            </main>
            <Toaster/>
        </SidebarProvider>

    )


}
