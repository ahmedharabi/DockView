import { Calendar, Home, Inbox, Search, Settings } from "lucide-react"

import {
    Sidebar,
    SidebarContent,
    SidebarGroup,
    SidebarGroupContent,
    SidebarGroupLabel,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
} from "@/components/ui/sidebar"
import {Link} from "react-router-dom";

// Menu items.
const items = [
    {
        title: "Home",
        url: "/",
        icon: Home,
    },
    {
        title: "Containers",
        url: "/containers",
        icon: Inbox,
    },
    {
        title: "Images",
        url: "/images",
        icon: Calendar,
    },
    {
        title: "Vlumes",
        url: "/volumes",
        icon: Search,
    },
    {
        title: "Networks",
        url: "/networks",
        icon: Settings,
    },
]

export default function AppSidebar() {
    return (
        <Sidebar variant={"sidebar "}>
            <SidebarContent>
                <SidebarGroupLabel>Application</SidebarGroupLabel>
                <SidebarMenu>
                    {items.map((item) => (
                        <SidebarMenuItem key={item.title}>
                            <SidebarMenuButton asChild>
                                <Link to={item.url}>

                                    <span>{item.title}</span>
                                </Link>
                            </SidebarMenuButton>
                        </SidebarMenuItem>
                    ))}
                </SidebarMenu>
            </SidebarContent>
        </Sidebar>
    )
}
