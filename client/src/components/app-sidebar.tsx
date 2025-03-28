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

// Menu items.
const items = [
  {
    title: "Jobs",
    url: "jobs",
    icon: Inbox,
  },
  {
    title: "Add Job",
    url: "/ghosted/create-job",
    icon: Calendar,
  },
]

export function AppSidebar() {
  return (
    <Sidebar className="bg-orange-600 border-orange-800 rounded-tr-3xl">
      <SidebarContent className="">
        <SidebarGroup className="">
          <SidebarGroupLabel className="mb-2 underline">Ghosted</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <a href={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  )
}
