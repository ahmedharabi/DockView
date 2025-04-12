import { Container,Package2 , Home, FileImage, EthernetPort , Telescope  } from "lucide-react"

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
          <SidebarHeader className={"text-bold text-xl text-center inline font-[Primeform_Pro_Demo]  "}> <Telescope className={"text-blue-200 inline mr-2 mb-1 w-10 h-10 "}/>DockerView</SidebarHeader>
          <SidebarGroup>

              <SidebarGroupContent className="bg-blue-800 rounded-lg text-white p-1">
                <SidebarMenu>
                  {items.map((item) => (
                      <SidebarMenuItem key={item.title}>
                        <SidebarMenuButton asChild>
                          <Link to={item.url}>
                            <item.icon/>
                            <span className={"font-light font-[Primeform_Pro_Demo]"}>{item.title}</span>
                          </Link>
                        </SidebarMenuButton>
                      </SidebarMenuItem>
                  ))}
                </SidebarMenu>
              </SidebarGroupContent>


          </SidebarGroup>
        </SidebarContent>
        <SidebarFooter className={"align-bottom bg-blue-700 text-white font-light"} > DockView Beta 1.0 </SidebarFooter>
      </Sidebar>
)
}
