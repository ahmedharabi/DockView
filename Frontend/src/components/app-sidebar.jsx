import { Container,Package2 , Home, FileImage, EthernetPort , Settings } from "lucide-react"

import {
  Sidebar,
  SidebarContent, SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel, SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"
import {Link} from "react-router-dom";

// Menu items.
const items = [
  {
    title: "Home",
    url: "#",
    icon: Home,
  },
  {
    title: "Containers",
    url: "/containers",
    icon: Container ,
  },
  {
    title: "Images",
    url: "/images",
    icon: FileImage,
  },
  {
    title: "Volumes",
    url: "/volumes",
    icon: Package2 ,
  },
  {
    title: "Networks",
    url: "/networks",
    icon: EthernetPort ,
  },
]

export default function AppSidebar() {
  return (
      <Sidebar>
        <SidebarContent className="bg-blue-700 text-white">
          <SidebarHeader className={"text-bold text-xl text-center"}>DockerView</SidebarHeader>
          <SidebarGroup >

            <SidebarGroupContent className="bg-blue-800 rounded-lg text-white p-1">
              <SidebarMenu  >
                {items.map((item) => (
                    <SidebarMenuItem key={item.title}  >
                      <SidebarMenuButton asChild >
                        <Link to={item.url}  >
                          <item.icon/>
                          <span >{item.title}</span>
                        </Link>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
          <SidebarFooter > hello  </SidebarFooter>
        </SidebarContent>
      </Sidebar>
  )
}
